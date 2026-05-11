import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import BrandPanel from '../components/login/BrandPanel';
import { useAuth } from '../context/AuthContext';

// If the identifier is an email, take the part before @ as the displayed name.
function deriveUsername(identifier) {
  const trimmed = identifier.trim();
  if (!trimmed) return 'Player';
  return trimmed.includes('@') ? trimmed.split('@')[0] : trimmed;
}

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password) return;
    login({ username: deriveUsername(identifier) });
    navigate('/after-login', { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-[#080809]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
        <BrandPanel />

        {/* ────────── RIGHT — form panel ────────── */}
        <section
          aria-label="Login form"
          className="relative flex w-full flex-1 items-center justify-center bg-[#080809] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16 lg:py-16"
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[480px] flex-col"
            noValidate
          >
            <h2 className="mb-10 text-center text-4xl font-bold text-white sm:mb-12 sm:text-5xl lg:mb-14 lg:text-[56px]">
              Welcome Back
            </h2>

            {/* Email / Username */}
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="login-identifier"
                className="mb-2 text-[15px] font-medium text-white"
              >
                Email or Username<span aria-hidden="true">*</span>
              </label>
              <input
                id="login-identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                placeholder="Enter email or username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="h-14 w-full rounded-xl border border-transparent bg-[#1f1f22] px-4 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16"
              />
            </div>

            {/* Password */}
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="login-password"
                className="mb-2 text-[15px] font-medium text-white"
              >
                Password<span aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 w-full rounded-xl border border-transparent bg-[#1f1f22] px-4 pr-14 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forget Password */}
            <div className="flex justify-end">
              <a
                href="#forgot"
                className="text-[13px] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50"
              >
                Forget Password?
              </a>
            </div>

            {/* Bottom group */}
            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#6C3BFF] text-base font-semibold text-white transition-colors duration-200 hover:bg-[#5A2FE0] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60 lg:h-16"
              >
                Log In
              </button>
              <p className="mt-5 text-center text-sm text-white/70">
                Don&apos;t have an account?{' '}
                <Link
                  to="/register"
                  className="font-bold text-[#6C3BFF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
