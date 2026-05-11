import { useState } from 'react';
import {
  FaPen,
  FaCircleCheck,
  FaCheck,
  FaXmark,
  FaPlus,
  FaCopy,
  FaTrash,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdBadge,
} from 'react-icons/fa6';
import AuthHeader from '../components/layout/AuthHeader';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';

// Format raw digits as +1 (XXX) XXX-XXXX as the user types.
function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  // Strip leading 1 if user typed it (we always render +1 prefix).
  const local = digits.startsWith('1') ? digits.slice(1) : digits;
  const a = local.slice(0, 3);
  const b = local.slice(3, 6);
  const c = local.slice(6, 10);
  if (!a) return '+1 ';
  if (a.length < 3) return `+1 (${a}`;
  if (!b) return `+1 (${a}) `;
  if (b.length < 3) return `+1 (${a}) ${b}`;
  if (!c) return `+1 (${a}) ${b}`;
  return `+1 (${a}) ${b}-${c}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_ICON = {
  username: FaUser,
  fullName: FaIdBadge,
  phone: FaPhone,
  email: FaEnvelope,
};

function validate(field, value) {
  if (!value || !value.trim()) return 'This field is required.';
  if (field === 'email' && !EMAIL_RE.test(value.trim())) return 'Enter a valid email address.';
  if (field === 'phone' && value.replace(/\D/g, '').length < 11) return 'Enter a complete phone number.';
  return null;
}

const INITIAL_PERSONAL = {
  username: 'alexdsuza20256',
  fullName: 'Devon Lane',
  phone: '+1 (123) 456-7890',
  email: 'divbuddy007@gmail.com',
};

const INITIAL_CLUBS = [
  { id: 'c1', name: 'DOMINION', tint: '#EF0C27', initial: 'D' },
  { id: 'c2', name: 'Division 2', tint: '#1E40AF', initial: '2' },
  { id: 'c3', name: 'Division 3', tint: '#EF4444', initial: '3' },
  { id: 'c4', name: 'Division 4', tint: '#10B981', initial: '4' },
];

// Pool of brand colors to assign to user-added clubs in rotation.
const TINT_POOL = ['#7717FF', '#22C55E', '#F59E0B', '#06B6D4', '#EC4899', '#8B5CF6'];

const INITIAL_VERIFICATIONS = {
  member: true,
  kyc: true,
  email: true,
};

const PERSONAL_FIELDS = [
  { key: 'fullName', label: 'Full Name', autoComplete: 'name', type: 'text' },
  { key: 'phone', label: 'Phone Number', autoComplete: 'tel', type: 'tel', formatter: formatPhone },
  { key: 'email', label: 'Email', autoComplete: 'email', type: 'email' },
];

function Profile() {
  const { user, setUser } = useAuth();

  // Personal details — seeded from the logged-in user's record so the form
  // shows the actual user. Falls back to placeholders if a field is missing.
  const [personal, setPersonal] = useState(() => ({
    username: user?.username || INITIAL_PERSONAL.username,
    fullName: user?.fullName || user?.username || INITIAL_PERSONAL.fullName,
    phone: user?.phone || INITIAL_PERSONAL.phone,
    email: user?.email || INITIAL_PERSONAL.email,
  }));
  const [draft, setDraft] = useState({});
  const [editing, setEditing] = useState(null); // 'username' | 'fullName' | 'phone' | 'email' | null
  const [errors, setErrors] = useState({});

  // Clubs
  const [clubs, setClubs] = useState(INITIAL_CLUBS);
  const [showAddClub, setShowAddClub] = useState(false);
  const [newClub, setNewClub] = useState('');
  const [addClubError, setAddClubError] = useState('');

  // ClubGG ID
  const clubGgId = 'XXXX-XX89';

  // Verifications
  const [verifications, setVerifications] = useState(INITIAL_VERIFICATIONS);

  // Connection state for ClubGG
  const [clubGgConnected, setClubGgConnected] = useState(false);

  // Toast (very small inline notification)
  const [toast, setToast] = useState(null);
  const showToast = (message, tone = 'success') => {
    setToast({ message, tone });
    window.setTimeout(() => setToast(null), 2400);
  };

  const beginEdit = (field) => {
    setEditing(field);
    setDraft({ ...draft, [field]: personal[field] });
    setErrors({ ...errors, [field]: undefined });
  };

  const cancelEdit = () => {
    setEditing(null);
    setDraft({});
    setErrors({});
  };

  const handleDraftChange = (field, raw) => {
    const formatter = PERSONAL_FIELDS.find((f) => f.key === field)?.formatter;
    const value = formatter ? formatter(raw) : raw;
    setDraft((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const saveEdit = (field) => {
    const value = (draft[field] ?? '').trim();
    const err = validate(field, value);
    if (err) {
      setErrors((prev) => ({ ...prev, [field]: err }));
      return;
    }
    setPersonal((prev) => ({ ...prev, [field]: value }));
    // Mirror the change into AuthContext so the header (and any other
    // subscriber) picks up the new value immediately and it survives reloads.
    setUser((prev) => ({ ...prev, [field]: value }));
    setEditing(null);
    setDraft({});
    showToast(`${field === 'username' ? 'Username' : field === 'fullName' ? 'Full name' : field === 'phone' ? 'Phone number' : 'Email'} updated`);
  };

  // ───── Clubs ─────
  const submitNewClub = (e) => {
    e?.preventDefault();
    const trimmed = newClub.trim();
    if (!trimmed) {
      setAddClubError('Club name is required.');
      return;
    }
    if (clubs.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      setAddClubError('You already added that club.');
      return;
    }
    const tint = TINT_POOL[clubs.length % TINT_POOL.length];
    setClubs((prev) => [
      ...prev,
      { id: `c-${Date.now()}`, name: trimmed, tint, initial: trimmed.charAt(0).toUpperCase() },
    ]);
    setNewClub('');
    setAddClubError('');
    setShowAddClub(false);
    showToast(`${trimmed} added`);
  };

  const removeClub = (id, name) => {
    setClubs((prev) => prev.filter((c) => c.id !== id));
    showToast(`${name} removed`);
  };

  // ───── Misc actions ─────
  const copyClubGgId = async () => {
    try {
      await navigator.clipboard.writeText(clubGgId);
      showToast('ClubGG ID copied');
    } catch {
      showToast('Could not copy ID', 'error');
    }
  };

  const handleUpdateKyc = () => {
    setVerifications((prev) => ({ ...prev, kyc: true }));
    showToast('KYC update submitted');
  };

  const handleVerifyEmail = () => {
    setVerifications((prev) => ({ ...prev, email: true }));
    showToast('Verification email sent');
  };

  const handleConnectClubGg = () => {
    setClubGgConnected((prev) => !prev);
    showToast(clubGgConnected ? 'ClubGG disconnected' : 'ClubGG connected');
  };

  const renderPersonalField = ({ key, label, type, autoComplete }) => {
    const isEditing = editing === key;
    const Icon = FIELD_ICON[key];
    const error = errors[key];
    return (
      <div key={key} className="flex flex-col gap-[12px]">
        <label htmlFor={`profile-${key}`} className="text-[16px] capitalize leading-[1.5] text-white">
          {label}
        </label>
        <div className="flex h-[58px] w-full items-center">
          <div
            className={`flex h-full flex-1 items-center gap-3 rounded-l-[12px] bg-[#232325] py-[10px] pl-[20px] pr-[12px] ${
              isEditing ? 'ring-1 ring-[#7717FF]' : ''
            } ${error ? 'ring-1 ring-[#EF0C27]' : ''}`}
          >
            <Icon className="size-[16px] text-[#939294]" aria-hidden="true" />
            <input
              id={`profile-${key}`}
              type={type}
              autoComplete={autoComplete}
              readOnly={!isEditing}
              value={isEditing ? draft[key] ?? '' : personal[key]}
              onChange={(e) => handleDraftChange(key, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveEdit(key);
                if (e.key === 'Escape') cancelEdit();
              }}
              className="w-full bg-transparent text-[16px] leading-[26px] text-white outline-none placeholder:text-[#666]"
            />
          </div>
          {isEditing ? (
            <div className="flex h-full">
              <button
                type="button"
                onClick={() => saveEdit(key)}
                aria-label={`Save ${label}`}
                className="flex h-full w-[58px] items-center justify-center border border-[#232325] bg-[#7717FF] text-white transition-colors hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
              >
                <FaCheck size={16} />
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                aria-label={`Cancel editing ${label}`}
                className="flex h-full w-[58px] items-center justify-center rounded-r-[12px] border border-l-0 border-[#232325] bg-[#131314] text-white transition-colors hover:bg-[#1A1A1E] focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <FaXmark size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => beginEdit(key)}
              aria-label={`Edit ${label}`}
              className="flex h-full w-[76px] items-center justify-center rounded-r-[12px] border border-[#232325] bg-[#131314] text-white transition-colors hover:bg-[#1A1A1E] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
            >
              <FaPen size={16} />
            </button>
          )}
        </div>
        {error && (
          <p role="alert" className="text-[13px] text-[#EF0C27]">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#080809] font-sans text-white">
      <AuthHeader showLogout={false} />

      <main className="relative flex-1 overflow-hidden">
        {/* Background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[300px] -top-[200px] z-0 h-[700px] w-[900px]"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(119,23,255,0.32) 0%, rgba(40,12,90,0.18) 45%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[150px] top-[820px] z-0 h-[460px] w-[460px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(119,23,255,0.35) 0%, rgba(60,18,140,0.18) 40%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Toast */}
        {toast && (
          <div
            role="status"
            aria-live="polite"
            className={`fixed left-1/2 top-[120px] z-[100] -translate-x-1/2 rounded-[10px] px-5 py-3 text-[14px] font-semibold shadow-lg ${
              toast.tone === 'error'
                ? 'bg-[#EF0C27] text-white'
                : 'bg-[#22C55E] text-black'
            }`}
          >
            {toast.message}
          </div>
        )}

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[clamp(20px,4vw,60px)] pb-[80px] pt-[85px]">
          <h1
            className="text-[clamp(40px,4.44vw,64px)] capitalize leading-none text-white"
            style={{ fontFamily: "'Bebas Neue', 'Oswald', 'Inter', sans-serif", letterSpacing: '0.02em' }}
          >
            Player Profile
          </h1>

          <div className="mt-[60px] grid grid-cols-1 gap-[30px] lg:grid-cols-[770fr_520fr] lg:items-start">
            {/* ─────────── LEFT COLUMN ─────────── */}
            <div className="flex flex-col gap-[30px]">
              {/* Profile banner card */}
              <div className="overflow-hidden rounded-[20px] bg-[#131314] p-[30px]">
                <div className="flex flex-wrap items-center gap-[clamp(16px,3vw,30px)] rounded-[10px] bg-[#7717FF] py-[12px] pl-[16px] pr-[24px]">
                  <div className="flex size-[80px] flex-shrink-0 items-center justify-center rounded-full bg-[#302E33] p-[18.982px]">
                    <p className="text-[32.21px] font-bold capitalize leading-[1.179] text-white">
                      <span>D</span>
                      <span className="text-[#EF0C27]">N</span>
                    </p>
                  </div>
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                    <p className="truncate text-[clamp(20px,2.22vw,32px)] font-semibold leading-[32px] text-white">
                      {personal.username}
                    </p>
                    <div className="hidden items-center gap-[30px] sm:flex">
                      <div className="flex flex-col gap-[10px]">
                        <p className="text-[12px] tracking-[-0.24px] text-[#EFEFEF]">Join Date</p>
                        <p className="text-[16px] font-medium leading-[24px] text-white">12/30/2025</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p className="text-[12px] tracking-[-0.24px] text-[#EFEFEF]">Last Login</p>
                        <p className="text-[16px] font-medium leading-[24px] text-white">01/15/2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details card */}
              <div className="flex flex-col gap-[30px] rounded-[20px] bg-[#131314] p-[30px]">
                <h2 className="text-[24px] leading-[26px] text-white">Personal Details</h2>

                {/* Username row */}
                {renderPersonalField({ key: 'username', label: 'Username', type: 'text', autoComplete: 'username' })}

                {/* Other personal fields */}
                {PERSONAL_FIELDS.map(renderPersonalField)}
              </div>
            </div>

            {/* ─────────── RIGHT COLUMN ─────────── */}
            <div className="flex flex-col gap-[24px] self-stretch rounded-[20px] bg-[#131314] p-[30px]">
              <h2 className="text-[24px] font-semibold capitalize text-[#FAFAFA]">
                clubGG Account Details
              </h2>

              <div className="flex flex-col gap-[30px]">
                {/* clubGG ID */}
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[24px] font-semibold capitalize text-[#FAFAFA]">clubGG ID</p>
                  <div className="flex h-[58px] w-full items-center justify-between gap-3 rounded-[12px] bg-[#232325] px-[16px] py-[10px]">
                    <p className="text-[16px] font-medium tracking-wider text-[#FAFAFA]">{clubGgId}</p>
                    <button
                      type="button"
                      onClick={copyClubGgId}
                      aria-label="Copy ClubGG ID"
                      className="flex size-[36px] items-center justify-center rounded-[8px] bg-[#131314] text-white transition-colors hover:bg-[#1A1A1E] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                </div>

                {/* Clubs */}
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center justify-between">
                      <p className="text-[24px] font-semibold capitalize text-[#FAFAFA]">clubs</p>
                      <span className="text-[13px] text-[#939294]">{clubs.length} connected</span>
                    </div>
                    {clubs.length === 0 ? (
                      <p className="rounded-[12px] bg-[#232325] px-4 py-6 text-center text-[14px] text-[#939294]">
                        No clubs yet — add your first below.
                      </p>
                    ) : (
                      <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                        {clubs.map(({ id, name, initial, tint }) => (
                          <li
                            key={id}
                            className="group flex items-center justify-between gap-[12px] rounded-[24px] bg-[#232325] px-[20px] py-[20px]"
                          >
                            <div className="flex min-w-0 items-center gap-[12px]">
                              <div
                                className="flex size-[56px] flex-shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white"
                                style={{ backgroundColor: tint }}
                              >
                                {initial}
                              </div>
                              <p className="truncate text-[clamp(16px,1.67vw,22px)] font-medium leading-[28px] text-white">
                                {name}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeClub(id, name)}
                              aria-label={`Remove ${name}`}
                              className="flex size-[32px] flex-shrink-0 items-center justify-center rounded-full text-[#939294] opacity-0 transition-opacity hover:bg-white/5 hover:text-[#EF0C27] focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#EF0C27]/40 group-hover:opacity-100"
                            >
                              <FaTrash size={12} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {showAddClub ? (
                    <form
                      onSubmit={submitNewClub}
                      className="flex flex-col gap-2 rounded-[8px] border-[0.776px] border-[#7717FF] bg-[#1A1A1E] p-3"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          autoFocus
                          value={newClub}
                          onChange={(e) => {
                            setNewClub(e.target.value);
                            if (addClubError) setAddClubError('');
                          }}
                          placeholder="Club name (e.g. Division 5)"
                          className="h-[42px] flex-1 rounded-[6px] bg-[#232325] px-3 text-[14px] text-white outline-none placeholder:text-[#666] focus:ring-1 focus:ring-[#7717FF]"
                        />
                        <button
                          type="submit"
                          className="flex h-[42px] items-center justify-center rounded-[6px] bg-[#7717FF] px-4 text-[14px] font-semibold text-white hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowAddClub(false);
                            setNewClub('');
                            setAddClubError('');
                          }}
                          aria-label="Cancel"
                          className="flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-[#232325] text-white hover:bg-[#1F1D24]"
                        >
                          <FaXmark size={14} />
                        </button>
                      </div>
                      {addClubError && (
                        <p role="alert" className="text-[12px] text-[#EF0C27]">
                          {addClubError}
                        </p>
                      )}
                    </form>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowAddClub(true)}
                      className="flex h-[58px] w-full items-center justify-center gap-2 rounded-[8px] border-[0.776px] border-[#7717FF] px-[12.419px] py-[7.762px] text-[18px] font-semibold capitalize text-white transition-colors hover:bg-[#7717FF]/10 focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
                    >
                      <FaPlus size={16} />
                      Add Club
                    </button>
                  )}
                </div>

                {/* Verifications */}
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[24px] font-medium leading-[26px] text-white">Verifications</p>
                  <ul className="flex flex-wrap items-center gap-[12px]">
                    {[
                      { key: 'member', label: 'Member Verified' },
                      { key: 'kyc', label: 'KYC Verified' },
                      { key: 'email', label: 'Email Verified' },
                    ].map(({ key, label }) => {
                      const verified = verifications[key];
                      return (
                        <li
                          key={key}
                          className={`flex items-center gap-[6px] rounded-[12px] px-[10px] py-[10px] text-[14px] ${
                            verified ? 'bg-[#232325] text-white' : 'bg-[#1A1A1E] text-[#939294]'
                          }`}
                        >
                          <FaCircleCheck
                            className={`size-[20px] ${verified ? 'text-[#22C55E]' : 'text-[#444]'}`}
                            aria-hidden="true"
                          />
                          {label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Bottom action buttons */}
              <div className="flex w-full items-start gap-[12px]">
                <button
                  type="button"
                  onClick={handleUpdateKyc}
                  className="flex h-[58px] flex-1 items-center justify-center rounded-[8px] border-[0.776px] border-[#7717FF] px-[12.419px] py-[7.762px] text-[18px] font-semibold capitalize text-white transition-colors hover:bg-[#7717FF]/10 focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
                >
                  Update KYC
                </button>
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  className="flex h-[58px] flex-1 items-center justify-center rounded-[8px] border-[0.776px] border-[#7717FF] px-[12.419px] py-[7.762px] text-[18px] font-semibold capitalize text-white transition-colors hover:bg-[#7717FF]/10 focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
                >
                  Verify Email
                </button>
              </div>

              <button
                type="button"
                onClick={handleConnectClubGg}
                className={`flex h-[58px] w-full items-center justify-center rounded-[8px] px-[12.419px] py-[7.762px] text-[18px] font-semibold capitalize text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60 ${
                  clubGgConnected
                    ? 'border-[0.776px] border-[#22C55E] bg-transparent text-[#22C55E] hover:bg-[#22C55E]/10'
                    : 'bg-[#7717FF] hover:bg-[#6611E0]'
                }`}
              >
                {clubGgConnected ? 'Disconnect ClubGG' : 'Connect ClubGG'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
