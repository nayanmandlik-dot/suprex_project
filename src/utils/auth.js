// Lightweight client-side auth shim. No real backend yet — we just persist a
// flag in localStorage so the UI can branch on "logged in / logged out" state.
// When the real auth service lands, swap these helpers for API calls and keep
// the same exported surface so callers don't have to change.

const STORAGE_KEY = 'suprex.auth';

export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function login() {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* ignore quota / privacy-mode errors */
  }
}

export function logout() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
