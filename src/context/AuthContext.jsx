import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  isAuthenticated as readAuth,
  login as setAuthFlag,
  logout as clearAuthFlag,
} from '../utils/auth';

// Auth state for the whole app. Source of truth = localStorage (via utils/auth)
// so existing route guards keep working; this context just exposes the same
// state plus shared user/balance shape so any component can subscribe.
const AuthContext = createContext(null);

const USER_STORAGE_KEY = 'suprex.user';
const DEFAULT_USER = { username: 'Player', avatar: null };

function readStoredUser() {
  if (typeof window === 'undefined') return DEFAULT_USER;
  try {
    const raw = window.localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return DEFAULT_USER;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_USER, ...parsed };
  } catch {
    return DEFAULT_USER;
  }
}

function writeStoredUser(user) {
  try {
    window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch {
    /* ignore quota / privacy-mode errors */
  }
}

function clearStoredUser() {
  try {
    window.localStorage.removeItem(USER_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => readAuth());
  const [user, setUserState] = useState(() => readStoredUser());
  const [socialChips, setSocialChips] = useState(0);
  const [d1Chips, setD1Chips] = useState(0);

  // Cross-tab sync: if another tab logs in/out, mirror the change here.
  useEffect(() => {
    const onStorage = () => {
      setIsLoggedIn(readAuth());
      setUserState(readStoredUser());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setUser = useCallback((updater) => {
    setUserState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      writeStoredUser(next);
      return next;
    });
  }, []);

  const login = useCallback((nextUser) => {
    setAuthFlag();
    setIsLoggedIn(true);
    if (nextUser) {
      setUserState((prev) => {
        const next = { ...prev, ...nextUser };
        writeStoredUser(next);
        return next;
      });
    }
  }, []);

  const logout = useCallback(() => {
    clearAuthFlag();
    clearStoredUser();
    setIsLoggedIn(false);
    setUserState(DEFAULT_USER);
    setSocialChips(0);
    setD1Chips(0);
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      user,
      socialChips,
      d1Chips,
      login,
      logout,
      setUser,
      setSocialChips,
      setD1Chips,
    }),
    [isLoggedIn, user, socialChips, d1Chips, login, logout, setUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return ctx;
}
