import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.message || 'An error occurred while updating your password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] pt-32 pb-20 flex items-center justify-center relative overflow-hidden font-outfit">
      {/* Home Button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-50 bg-white p-3 neo-border rounded-full neo-shadow hover:scale-110 transition-transform group"
      >
        <span className="text-2xl group-hover:-translate-x-1 inline-block transition-transform">←</span>
        <span className="ml-2 font-fredoka font-bold uppercase">Home</span>
      </Link>

      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-bruniverse-dark) 2px, transparent 2px), linear-gradient(90deg, var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="neo-card bg-white w-full max-w-md p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center mx-auto mb-4 text-4xl neo-shadow">
            🔐
          </div>
          <h1 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-dark)] uppercase">
            Reset Password
          </h1>
          <p className="font-outfit text-lg font-bold text-gray-600 mt-2">
            Enter your new password below 🐾
          </p>
        </div>

        {success ? (
          <div className="bg-green-100 text-green-800 p-6 neo-border font-outfit font-bold text-center">
            Password updated successfully! Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleUpdatePassword} className="space-y-6">
            {error && (
              <div className="bg-red-100 text-red-800 p-4 neo-border font-outfit font-bold text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] mb-2 uppercase">New Password</label>
              <input 
                required 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-3 font-outfit font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#fcdbc8] transition-shadow"
                placeholder="••••••••"
              />
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              type="submit" 
              disabled={loading}
              className="w-full bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] py-4 neo-btn text-xl uppercase tracking-widest disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
