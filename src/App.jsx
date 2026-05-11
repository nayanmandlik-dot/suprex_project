import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AfterLogin from './pages/AfterLogin';
import Purchase from './pages/Purchase';
import LoadChip from './pages/LoadChip';
import Profile from './pages/Profile';
import { RequireAuth } from './components/RouteGuards';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public auth routes — always reachable so the header Login button works */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public landing page — accessible to everyone */}
          <Route path="/" element={<Home />} />

          {/* Protected routes — bounce to /register if not logged in */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/chips" element={<Dashboard />} />
          <Route
            path="/after-login"
            element={
              <RequireAuth>
                <AfterLogin />
              </RequireAuth>
            }
          />
          <Route
            path="/purchase"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="/load-chip"
            element={
              <RequireAuth>
                <LoadChip />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
