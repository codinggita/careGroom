import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Smartphone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import spaAuthBg from '../assets/spa_auth_bg.png';

/* ═══════════════════════════════════════════════
   CareGroom Auth Page – Premium Split Layout
   FIX: Moved InputField outside to prevent focus loss on re-render.
   ═══════════════════════════════════════════════ */

const SAGE = '#1F4A3F';
const GOLD = '#D4A56A';
const CREAM = '#FDFBF7';

// ── Reusable Premium Input (Defined OUTSIDE to prevent re-mounting/focus loss) ──
const InputField = ({ 
  icon: Icon, 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  onFocus, 
  onBlur, 
  focused, 
  error, 
  rightElement, 
  rightLabel 
}) => (
  <div style={s.fieldGroup}>
    <div style={s.labelRow}>
      <label style={s.label}>{label}</label>
      {rightLabel}
    </div>
    <div
      style={{
        ...s.inputWrapper,
        borderColor: error ? '#e05252' : focused ? SAGE : '#E5E5E5',
        backgroundColor: focused ? '#FFFFFF' : '#F9F9F7',
        boxShadow: focused ? '0 0 0 4px rgba(31,74,63,0.06)' : 'none',
      }}
    >
      <Icon size={18} style={{ ...s.inputIcon, color: focused ? SAGE : '#999' }} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === ' ') e.stopPropagation();
        }}
        placeholder={placeholder}
        onFocus={() => onFocus(name)}
        onBlur={() => onBlur(null)}
        style={s.input}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {rightElement}
    </div>
    <AnimatePresence>
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={s.error}>
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('client');
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!isLogin && !formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (formData.password.length < 1) newErrors.password = 'Required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const roles = [
    { key: 'client', label: 'Client' },
    { key: 'artisan', label: 'Artisan' },
    { key: 'admin', label: 'Admin' },
  ];

  return (
    <div style={s.page} id="auth-page-root">
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #1F4A3F;
          -webkit-box-shadow: 0 0 0px 1000px #FDFBF7 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        ::placeholder { color: #999; opacity: 0.8; }
      `}</style>

      {/* ═══ LEFT PANEL ═══ */}
      <div style={s.left}>
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={spaAuthBg} alt="" style={s.leftImg} 
        />
        <div style={s.leftOverlay} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" style={s.backToHome}>
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </motion.div>
        
        <motion.div 
          style={s.logo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span style={s.logoText}>CareGroom</span>
        </motion.div>

        <motion.div 
          style={s.quote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p style={s.quoteText}>
            "Precision is not just a skill; it's an art form.
            Welcome to the sanctuary of self-care."
          </p>
          <p style={s.quoteAuthor}>— THE CAREGROOM PHILOSOPHY</p>
        </motion.div>
      </div>

      {/* ═══ RIGHT PANEL ═══ */}
      <div style={s.right}>
        <div style={s.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1 
                variants={itemVariants}
                style={s.heading}
              >
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                style={s.subheading}
              >
                {isLogin ? 'Sign in to access your sanctuary.' : 'Join CareGroom and start your journey.'}
              </motion.p>

              <motion.div variants={itemVariants} style={s.roleSwitcher}>
                {roles.map((r) => (
                  <motion.button
                    key={r.key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRole(r.key)}
                    style={{ ...s.roleBtn, ...(role === r.key ? s.roleBtnActive : {}) }}
                  >
                    {r.label}
                  </motion.button>
                ))}
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                style={s.form}
                variants={containerVariants}
              >
                {!isLogin && (
                  <motion.div variants={itemVariants}>
                    <InputField 
                      icon={User} label="Full Name" name="fullName" placeholder="John Doe"
                      value={formData.fullName} onChange={handleInputChange} 
                      onFocus={setFocusedField} onBlur={setFocusedField}
                      focused={focusedField === 'fullName'} error={errors.fullName}
                    />
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <InputField 
                    icon={Mail} label="Email Address" name="email" placeholder="your@email.com"
                    value={formData.email} onChange={handleInputChange} 
                    onFocus={setFocusedField} onBlur={setFocusedField}
                    focused={focusedField === 'email'} error={errors.email}
                  />
                </motion.div>

                {!isLogin && (
                  <motion.div variants={itemVariants}>
                    <InputField 
                      icon={Smartphone} label="Phone Number" name="phone" placeholder="+91 98765 43210"
                      value={formData.phone} onChange={handleInputChange} 
                      onFocus={setFocusedField} onBlur={setFocusedField}
                      focused={focusedField === 'phone'} error={errors.phone}
                    />
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <InputField
                    icon={Lock} label="Password" name="password" type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••" value={formData.password} onChange={handleInputChange}
                    onFocus={setFocusedField} onBlur={setFocusedField}
                    focused={focusedField === 'password'} error={errors.password}
                    rightLabel={isLogin && <Link to="/forgot-password" style={s.forgotBtn}>Forgot Password?</Link>}
                    rightElement={
                      <button type="button" onClick={() => setShowPassword(!showPassword)} style={s.eyeBtn}>
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    }
                  />
                </motion.div>

                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, backgroundColor: '#C4955A' }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={isLoading} 
                  style={s.submitBtn}
                >
                  {isLoading ? 'PROCESSING...' : (
                    <>{isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'} <ArrowRight size={16} /></>
                  )}
                </motion.button>
              </motion.form>

              <motion.p variants={itemVariants} style={s.toggleText}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button onClick={() => setIsLogin(!isLogin)} style={s.toggleBtn}>
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const s = {
  page: { display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: CREAM, fontFamily: "'Inter', sans-serif" },
  left: { flex: 1, position: 'relative', overflow: 'hidden' },
  leftImg: { width: '100%', height: '100%', objectFit: 'cover' },
  leftOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,74,63,0.2) 0%, rgba(31,74,63,0.6) 100%)' },
  backToHome: { position: 'absolute', top: '32px', left: '32px', zIndex: 10, color: '#FFF', textDecoration: 'none', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.8 },
  logo: { position: 'absolute', top: '40%', left: '10%', zIndex: 10 },
  logoText: { fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '48px', color: '#FFF', fontWeight: 700 },
  quote: { position: 'absolute', bottom: '48px', left: '10%', right: '10%', zIndex: 10 },
  quoteText: { fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', maxWidth: '400px' },
  quoteAuthor: { fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '12px', letterSpacing: '0.1em' },
  right: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' },
  content: { maxWidth: '400px', width: '100%' },
  heading: { fontFamily: "'Noto Serif', serif", fontSize: '32px', color: SAGE, marginBottom: '8px', fontWeight: 600 },
  subheading: { fontSize: '14px', color: '#666', marginBottom: '32px' },
  roleSwitcher: { display: 'flex', backgroundColor: '#F0EFE9', padding: '4px', borderRadius: '32px', marginBottom: '32px' },
  roleBtn: { flex: 1, border: 'none', backgroundColor: 'transparent', padding: '10px', fontSize: '12px', fontWeight: 600, borderRadius: '28px', cursor: 'pointer', color: '#888', transition: 'all 0.3s ease' },
  roleBtnActive: { backgroundColor: '#FFF', color: SAGE, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  form: { display: 'flex', flexDirection: 'column', gap: '24px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  labelRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: '13px', fontWeight: 600, color: SAGE, letterSpacing: '0.01em', marginBottom: '4px' },
  forgotBtn: { fontSize: '12px', color: GOLD, textDecoration: 'none', fontWeight: 700, letterSpacing: '0.01em' },
  inputWrapper: { display: 'flex', alignItems: 'center', border: '1.5px solid #E5E5E5', borderRadius: '12px', padding: '14px 16px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
  inputIcon: { marginRight: '12px', flexShrink: 0 },
  input: { border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: '15px', flex: 1, minWidth: 0, color: SAGE, fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' },
  eyeBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#BBB', padding: '4px' },
  error: { fontSize: '11px', color: '#e05252', marginTop: '4px' },
  submitBtn: { backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: '4px', padding: '16px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(212, 165, 106, 0.2)' },
  toggleText: { marginTop: '32px', textAlign: 'center', fontSize: '13px', color: '#666' },
  toggleBtn: { background: 'none', border: 'none', color: SAGE, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }
};

export default AuthPage;
