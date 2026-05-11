import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

// Wraps any route that requires the user to be logged in.
// Anonymous users are bounced to /register (per product spec).
export function RequireAuth({ children }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/register" replace state={{ from: location }} />;
  }
  return children;
}

// Wraps Login / Register so an already-authenticated user can't see them
// — they get sent home instead.
export function RedirectIfAuth({ children }) {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}
