import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [petData, setPetData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser(user);

      // Try to fetch pet data from registrations or survey by email
      const { data: regData } = await supabase
        .from('registrations')
        .select('*')
        .eq('email', user.email)
        .single();

      if (regData) {
        setPetData(regData);
      } else {
        const { data: surveyData } = await supabase
          .from('pet_parents_survey')
          .select('*')
          .eq('email', user.email)
          .single();
        if (surveyData) setPetData(surveyData);
      }
      
      setLoading(false);
    };

    fetchUserAndData();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] flex items-center justify-center font-fredoka text-3xl font-black uppercase text-white animate-pulse">
      Loading Profile... 🐾
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center text-5xl neo-shadow">
               👤
            </div>
            <div>
              <h1 className="font-fredoka text-4xl md:text-5xl font-black text-white uppercase leading-none mb-2">
                Hi, {petData?.full_name || user.email.split('@')[0]}!
              </h1>
              <p className="font-outfit text-xl font-bold text-white opacity-80 uppercase tracking-widest">
                Pet Parent Dashboard
              </p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-white text-[var(--color-bruniverse-dark)] px-8 py-3 neo-btn font-fredoka font-bold uppercase"
          >
            Log Out
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pet Status Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="neo-card bg-[var(--color-bruniverse-yellow)] p-8 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-20 text-8xl -rotate-12 translate-x-8 translate-y-8">🐾</div>
             <h2 className="font-fredoka text-3xl font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase">Your Pet Profile</h2>
             {petData ? (
               <div className="space-y-4 font-outfit text-xl font-bold text-[var(--color-bruniverse-dark)]">
                 <div className="bg-white p-4 neo-border rounded-xl">
                   <span className="text-gray-500 uppercase text-sm block">Parent Name</span>
                   {petData.full_name}
                 </div>
                 <div className="bg-white p-4 neo-border rounded-xl">
                   <span className="text-gray-500 uppercase text-sm block">Location</span>
                   {petData.city || 'Not provided'}
                 </div>
                 <div className="bg-white p-4 neo-border rounded-xl">
                   <span className="text-gray-500 uppercase text-sm block">Email</span>
                   {user.email}
                 </div>
               </div>
             ) : (
               <div className="text-center p-8 bg-white neo-border rounded-xl">
                 <p className="font-outfit font-bold text-lg mb-6">You haven't registered your pet's details yet!</p>
                 <button onClick={() => navigate('/register')} className="bg-[var(--color-bruniverse-blue)] px-6 py-2 neo-btn uppercase font-fredoka font-bold">Register Now</button>
               </div>
             )}
          </motion.div>

          {/* Quick Actions / Stats */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="neo-card bg-white p-8"
          >
             <h2 className="font-fredoka text-3xl font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase">Quick Actions</h2>
             <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => navigate('/survey')}
                  className="w-full bg-[var(--color-bruniverse-peach)] p-4 neo-border rounded-xl flex items-center justify-between group hover:shadow-[6px_6px_0_0_var(--color-bruniverse-dark)] transition-all"
                >
                   <span className="font-fredoka font-black text-xl uppercase text-[var(--color-bruniverse-dark)]">Complete Survey</span>
                   <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
                <button className="w-full bg-[var(--color-bruniverse-green)] p-4 neo-border rounded-xl flex items-center justify-between group hover:shadow-[6px_6px_0_0_var(--color-bruniverse-dark)] transition-all opacity-50 cursor-not-allowed">
                   <span className="font-fredoka font-black text-xl uppercase text-[var(--color-bruniverse-dark)]">Orders (Coming Soon)</span>
                   <span>📦</span>
                </button>
                <button className="w-full bg-[var(--color-bruniverse-blue)] p-4 neo-border rounded-xl flex items-center justify-between group hover:shadow-[6px_6px_0_0_var(--color-bruniverse-dark)] transition-all opacity-50 cursor-not-allowed">
                   <span className="font-fredoka font-black text-xl uppercase text-[var(--color-bruniverse-dark)]">Pet Wallet</span>
                   <span>💰</span>
                </button>
             </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
