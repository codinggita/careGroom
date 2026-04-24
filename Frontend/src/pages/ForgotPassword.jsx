import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import resetBg from '../assets/reset_password_bg.png';

/* ═══════════════════════════════════════════════
   CareGroom – Reset Password Page
   Updated with Premium Boxed Inputs & Fix for Space Key
   ═══════════════════════════════════════════════ */

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div style={s.page}>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #1F4A3F;
          -webkit-box-shadow: 0 0 0px 1000px #FDFBF7 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        ::placeholder {
          color: #999;
          opacity: 0.8;
        }
      `}</style>

      {/* ─── LEFT PANEL: Image ─── */}
      <div style={s.leftPanel}>
        <img src={resetBg} alt="Spa" style={s.bgImage} />
      </div>

      {/* ─── RIGHT PANEL: Form ─── */}
      <div style={s.rightPanel}>
        <div style={s.content}>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Brand Logo */}
                <div style={s.brand}>
                  <h3 style={s.brandText}>CareGroom</h3>
                </div>

                {/* Heading */}
                <h1 style={s.heading}>Reset Password</h1>
                <p style={s.subheading}>
                  Enter the email address associated with your account, and we'll send you a secure link to reset your password.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} style={s.form}>
                  <div style={s.inputGroup}>
                    <label style={s.label}>EMAIL ADDRESS</label>
                    <div style={{
                      ...s.inputWrapper,
                      borderColor: focused ? GOLD : '#E5E5E5',
                      backgroundColor: focused ? '#FFFFFF' : '#F9F9F7',
                      boxShadow: focused ? '0 0 0 4px rgba(212, 165, 106, 0.06)' : 'none',
                    }}>
                      <Mail size={18} style={s.icon} />
                      <input
                        type="text"
                        placeholder="your.name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === ' ') e.stopPropagation();
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        style={s.input}
                        required
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    style={s.button}
                  >
                    {isLoading ? 'SENDING...' : (
                      <>
                        SEND RESET LINK <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                {/* Back Link */}
                <div style={s.footer}>
                  <Link to="/auth" style={s.backLink}>
                    <ArrowLeft size={14} /> BACK TO LOGIN
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={s.successCard}
              >
                <div style={s.successIcon}>
                  <CheckCircle size={48} color={GOLD} />
                </div>
                <h2 style={s.heading}>Email Sent</h2>
                <p style={s.subheading}>
                  We've sent a password reset link to <strong>{email}</strong>. Please check your inbox.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={s.button}
                >
                  <RotateCcw size={16} /> RESEND EMAIL
                </button>
                <div style={s.footer}>
                  <Link to="/auth" style={s.backLink}>
                    <ArrowLeft size={14} /> BACK TO LOGIN
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const SAGE = '#1F4A3F';
const GOLD = '#D4A56A';
const CREAM = '#FDFBF7';

const s = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: CREAM,
    fontFamily: "'Inter', sans-serif",
  },
  leftPanel: {
    flex: 1,
    display: 'block',
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  bgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  content: {
    maxWidth: '400px',
    width: '100%',
  },
  brand: {
    marginBottom: '60px',
  },
  brandText: {
    fontFamily: "'Noto Serif', serif",
    fontStyle: 'italic',
    fontSize: '22px',
    color: SAGE,
    margin: 0,
    fontWeight: 700,
  },
  heading: {
    fontFamily: "'Noto Serif', serif",
    fontSize: '32px',
    color: SAGE,
    marginBottom: '16px',
    fontWeight: 600,
  },
  subheading: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: SAGE,
    letterSpacing: '0.01em',
    marginBottom: '4px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #E5E5E5',
    borderRadius: '12px',
    padding: '14px 16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  icon: {
    color: '#999',
    marginRight: '12px',
  },
  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '15px',
    flex: 1,
    minWidth: 0,
    color: SAGE,
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.01em',
  },
  button: {
    backgroundColor: GOLD,
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    padding: '16px',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    width: '100%',
    boxShadow: '0 4px 12px rgba(212, 165, 106, 0.2)',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  backLink: {
    fontSize: '11px',
    fontWeight: 700,
    color: SAGE,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    letterSpacing: '0.05em',
  },
  successCard: {
    textAlign: 'center',
  },
  successIcon: {
    marginBottom: '24px',
  }
};

export default ForgotPassword;
