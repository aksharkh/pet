import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Ensure phone number starts with + for Supabase
    let formattedPhone = phone;
    if (loginMethod === 'phone' && !phone.startsWith('+')) {
      formattedPhone = '+' + phone.replace(/\D/g, ''); // Basic formatting
    }

    try {
      if (isSignUp) {
        if (loginMethod === 'email') {
          const { error: signUpError } = await supabase.auth.signUp({ email, password });
          if (signUpError) throw signUpError;
          alert('Check your email for the confirmation link!');
        } else {
          const { error: signUpError } = await supabase.auth.signUp({ phone: formattedPhone, password });
          if (signUpError) throw signUpError;
          alert('Sign up successful!');
        }
      } else {
        if (loginMethod === 'email') {
          const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
          if (signInError) throw signInError;
          navigate('/profile');
        } else {
          if (!otpSent) {
            const { error: otpError } = await supabase.auth.signInWithOtp({ phone: formattedPhone });
            if (otpError) throw otpError;
            setOtpSent(true);
            alert('OTP sent to your phone!');
          } else {
            const { error: verifyError } = await supabase.auth.verifyOtp({ phone: formattedPhone, token: password, type: 'sms' });
            if (verifyError) throw verifyError;
            navigate('/profile');
          }
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please check your inputs or Supabase settings.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert('Please enter your email first!');
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) alert(error.message);
    else alert('Password reset link sent to your email!');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] pt-24 pb-20 flex items-center justify-center relative overflow-hidden font-outfit px-4">
      {/* Home Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-4 md:top-8 md:left-8 z-50 bg-white p-2 md:p-3 neo-border rounded-full neo-shadow hover:scale-110 transition-transform group flex items-center gap-2"
      >
        <span className="text-xl md:text-2xl group-hover:-translate-x-1 transition-transform">←</span>
        <span className="font-fredoka font-bold uppercase text-sm md:text-base">Home</span>
      </Link>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-bruniverse-dark) 2px, transparent 2px), linear-gradient(90deg, var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="neo-card bg-white w-full max-w-md p-6 md:p-10 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center mx-auto mb-4 text-4xl neo-shadow">
            🐾
          </div>
          <h1 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-dark)] uppercase">
            {showForgotPassword ? 'Reset Password' : (isSignUp ? 'Create Account' : 'Welcome Back')}
          </h1>
          <p className="font-outfit text-lg font-bold text-gray-600 mt-2">
            {showForgotPassword ? 'Enter your email to get a reset link' : 'Join the Bruniverse community 💗'}
          </p>
        </div>

        {showForgotPassword ? (
          <div className="space-y-6">
            <div>
              <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] mb-2 uppercase">Email Address</label>
              <input 
                required 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-3 font-outfit font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#a7edfc] transition-shadow"
                placeholder="your@email.com"
              />
            </div>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleForgotPassword}
              className="w-full bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] py-4 neo-btn text-xl uppercase tracking-widest"
            >
              Send Reset Link
            </motion.button>
            <button 
              onClick={() => setShowForgotPassword(false)}
              className="w-full text-center font-outfit font-bold text-[var(--color-bruniverse-dark)] hover:underline"
            >
              ← Back to Login
            </button>
          </div>
        ) : (
          <>
            {!isSignUp && (
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => { setLoginMethod('email'); setOtpSent(false); }}
                  className={`flex-1 py-2 font-fredoka font-bold rounded-lg neo-border transition-all ${loginMethod === 'email' ? 'bg-[var(--color-bruniverse-blue)]' : 'bg-white'}`}
                >
                  Email
                </button>
                <button 
                  onClick={() => { setLoginMethod('phone'); setOtpSent(false); }}
                  className={`flex-1 py-2 font-fredoka font-bold rounded-lg neo-border transition-all ${loginMethod === 'phone' ? 'bg-[var(--color-bruniverse-peach)]' : 'bg-white'}`}
                >
                  Phone
                </button>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-6">
              {error && (
                <div className="bg-red-100 text-red-800 p-4 neo-border font-outfit font-bold text-sm">
                  {error}
                </div>
              )}

              {loginMethod === 'email' ? (
                <div>
                  <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] mb-2 uppercase">Email</label>
                  <input 
                    required 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-3 font-outfit font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#a7edfc] transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
              ) : (
                <div>
                  <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] mb-2 uppercase">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    disabled={otpSent}
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className={`w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-3 font-outfit font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#fcdbc8] transition-shadow ${otpSent ? 'opacity-50' : ''}`}
                    placeholder="+91..."
                  />
                  {otpSent && (
                    <button 
                      type="button" 
                      onClick={() => setOtpSent(false)} 
                      className="text-sm font-bold text-blue-600 mt-2 hover:underline"
                    >
                      Change Number
                    </button>
                  )}
                </div>
              )}

              {(loginMethod === 'email' || isSignUp || otpSent) && (
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] uppercase">
                      {otpSent ? 'Enter OTP' : 'Password'}
                    </label>
                    {!isSignUp && loginMethod === 'email' && (
                      <button 
                        type="button" 
                        onClick={() => setShowForgotPassword(true)}
                        className="text-xs font-bold text-gray-500 hover:text-[var(--color-bruniverse-dark)] hover:underline uppercase"
                      >
                        Forgot?
                      </button>
                    )}
                  </div>
                  <input 
                    required 
                    type={otpSent ? "text" : "password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-3 font-outfit font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#fcdbc8] transition-shadow"
                    placeholder={otpSent ? "123456" : "••••••••"}
                  />
                </div>
              )}

              <motion.button 
                whileTap={{ scale: 0.95 }}
                type="submit" 
                disabled={loading}
                className="w-full bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] py-4 neo-btn text-xl uppercase tracking-widest disabled:opacity-50"
              >
                {loading ? 'Processing...' : (
                  isSignUp ? 'Sign Up' : (
                    loginMethod === 'phone' && !otpSent ? 'Get OTP' : 'Log In'
                  )
                )}
              </motion.button>
            </form>

            <div className="text-center mt-8">
              <button 
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setLoginMethod('email');
                  setOtpSent(false);
                }}
                className="font-outfit font-bold text-[var(--color-bruniverse-dark)] hover:underline"
              >
                {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
