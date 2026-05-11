import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import BrandPanel from '../components/login/BrandPanel';
import { useAuth } from '../context/AuthContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields) {
  const e = {};
  if (!fields.fullName.trim()) e.fullName = 'Full name is required.';
  if (!fields.email.trim()) e.email = 'Email is required.';
  else if (!EMAIL_RE.test(fields.email.trim())) e.email = 'Enter a valid email address.';
  if (!fields.password) e.password = 'Password is required.';
  else if (fields.password.length < 8) e.password = 'Password must be at least 8 characters.';
  if (!fields.confirmPassword) e.confirmPassword = 'Please confirm your password.';
  else if (fields.confirmPassword !== fields.password)
    e.confirmPassword = 'Passwords do not match.';
  return e;
}

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      login({ username: values.fullName.trim() });
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#080809]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
        <BrandPanel />

        {/* ────────── RIGHT — form panel ────────── */}
        <section
          aria-label="Registration form"
          className="relative flex w-full flex-1 items-center justify-center bg-[#080809] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16 lg:py-16"
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[480px] flex-col"
            noValidate
          >
            <h2 className="mb-8 text-center text-4xl font-bold text-white sm:mb-10 sm:text-5xl lg:mb-12 lg:text-[56px]">
              Create Account
            </h2>

            <Field
              id="reg-fullname"
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange('fullName')}
              error={errors.fullName}
            />
            <Field
              id="reg-email"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
            <PasswordField
              id="reg-password"
              label="Password"
              name="password"
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              value={values.password}
              onChange={handleChange('password')}
              show={showPassword}
              onToggle={() => setShowPassword((v) => !v)}
              error={errors.password}
            />
            <PasswordField
              id="reg-confirm"
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Re-enter password"
              autoComplete="new-password"
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              show={showConfirm}
              onToggle={() => setShowConfirm((v) => !v)}
              error={errors.confirmPassword}
            />

            {/* Bottom group */}
            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#6C3BFF] text-base font-semibold text-white transition-colors duration-200 hover:bg-[#5A2FE0] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60 lg:h-16"
              >
                Register
              </button>
              <p className="mt-5 text-center text-sm text-white/70">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-bold text-[#6C3BFF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

function Field({ id, label, name, type = 'text', placeholder, autoComplete, value, onChange, error }) {
  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor={id} className="mb-2 text-[15px] font-medium text-white">
        {label}
        <span aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={`h-14 w-full rounded-xl border bg-[#1f1f22] px-4 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16 ${
          error ? 'border-red-500/70' : 'border-transparent'
        }`}
      />
      {error && <p className="mt-1.5 text-[13px] text-red-400">{error}</p>}
    </div>
  );
}

function PasswordField({ id, label, name, placeholder, autoComplete, value, onChange, show, onToggle, error }) {
  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor={id} className="mb-2 text-[15px] font-medium text-white">
        {label}
        <span aria-hidden="true">*</span>
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={`h-14 w-full rounded-xl border bg-[#1f1f22] px-4 pr-14 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16 ${
            error ? 'border-red-500/70' : 'border-transparent'
          }`}
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={show ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="mt-1.5 text-[13px] text-red-400">{error}</p>}
    </div>
  );
}

export default Register;
