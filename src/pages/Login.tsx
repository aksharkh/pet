import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
        alert('Check your email for the confirmation link!');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        navigate('/profile');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-bruniverse-dark) 2px, transparent 2px), linear-gradient(90deg, var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="neo-card bg-white w-full max-w-md p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center mx-auto mb-4 text-4xl neo-shadow">
            🐾
          </div>
          <h1 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-dark)] uppercase">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="font-outfit text-lg font-bold text-gray-600 mt-2">
            Join the Bruniverse community 💗
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {error && (
            <div className="bg-red-100 text-red-800 p-4 neo-border font-outfit font-bold text-sm">
              {error}
            </div>
          )}

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

          <div>
            <label className="block font-fredoka font-bold text-lg text-[var(--color-bruniverse-dark)] mb-2 uppercase">Password</label>
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
            {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}
          </motion.button>
        </form>

        <div className="text-center mt-8">
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-outfit font-bold text-[var(--color-bruniverse-dark)] hover:underline"
          >
            {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
