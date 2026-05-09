import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city
          }
        ]);
        
      if (supabaseError) throw supabaseError;
      
      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (err: unknown) {
      console.error(err);
      setError((err as Error).message || "An error occurred while submitting the form. Please make sure the 'registrations' table exists in Supabase.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[var(--color-bruniverse-green)] flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="neo-card bg-white p-12 max-w-lg text-center relative"
        >
          <div className="w-24 h-24 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center mx-auto mb-8 text-5xl neo-shadow">
            🎉
          </div>
          <h2 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-dark)] mb-4 uppercase">You're on the list!</h2>
          <p className="font-outfit text-xl font-bold mb-10 text-[var(--color-bruniverse-dark)]">
            Thanks for joining Bruniverse. Keep an eye on your inbox for exclusive early member perks! 🐾
          </p>
          <Link to="/">
            <motion.button whileTap={{ scale: 0.95 }} className="bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] px-8 py-4 neo-btn text-xl uppercase">
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const inputClass = "w-full bg-white border-4 border-[var(--color-bruniverse-dark)] rounded-xl px-4 py-4 font-outfit font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0_0_#a7edfc] transition-shadow";
  const labelClass = "block font-fredoka font-bold text-xl text-[var(--color-bruniverse-dark)] mb-3 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-yellow)] pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="neo-card overflow-hidden"
        >
          <div className="bg-[var(--color-bruniverse-peach)] p-12 text-center relative border-b-4 border-[var(--color-bruniverse-dark)]">
             <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-6 right-8 text-6xl opacity-40">🐾</motion.div>
             
             <div className="inline-block bg-white px-4 py-1 neo-border font-outfit font-black text-sm uppercase tracking-widest mb-6 -rotate-2">
               New
             </div>

             <h1 className="font-fredoka text-5xl md:text-6xl font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase tracking-tight">
               Welcome to Bruniverse 💗
             </h1>
             
             <p className="font-outfit text-[var(--color-bruniverse-dark)] text-xl font-bold bg-white inline-block px-6 py-4 neo-border rotate-1 mb-6">
               We’re building something special for pet parents 🐾
             </p>
             
             <p className="font-outfit text-lg font-bold text-[var(--color-bruniverse-dark)] max-w-lg mx-auto">
               Fill this form to help us understand your pet better and receive personalized recommendations, exclusive offers & cute surprises 💗🐾
             </p>
          </div>
          
          <div className="bg-[var(--color-bruniverse-dark)] text-white p-4 text-center font-outfit font-bold tracking-widest uppercase">
            ✨ Early members may receive special discounts & first access to new launches ✨
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8 bg-white">
            {error && (
              <div className="bg-red-100 text-red-800 p-6 neo-border font-outfit font-bold text-lg">
                {error}
              </div>
            )}
            
            <div>
              <label className={labelClass}>Email Address *</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
            </div>

            <div>
              <label className={labelClass}>Full Name *</label>
              <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="John Doe" />
            </div>

            <div>
              <label className={labelClass}>Phone Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91" />
            </div>

            <div>
              <label className={labelClass}>City *</label>
              <input required type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Mumbai, Delhi..." />
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              type="submit" 
              disabled={loading}
              className="w-full bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] py-6 neo-btn text-2xl uppercase tracking-widest mt-8 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Join the Club 🐾'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
