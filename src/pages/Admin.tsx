import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [surveys, setSurveys] = useState<any[]>([]);
  const [view, setView] = useState<'reg' | 'survey'>('reg');
  const navigate = useNavigate();

  const ADMIN_EMAIL = 'aksharkh04@gmail.com';

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        alert('Access denied. Admin eyes only! 🐾');
        navigate('/');
        return;
      }
      setIsAdmin(true);

      const { data: regData } = await supabase.from('registrations').select('*').order('created_at', { ascending: false });
      const { data: surveyData } = await supabase.from('pet_parents_survey').select('*').order('created_at', { ascending: false });

      if (regData) setRegistrations(regData);
      if (surveyData) setSurveys(surveyData);
      
      setLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  if (loading) return (
    <div className="min-h-screen bg-[var(--color-bruniverse-dark)] flex items-center justify-center font-fredoka text-3xl font-black uppercase text-white">
      Securing Dashboard... 🔐
    </div>
  );

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="font-fredoka text-5xl font-black text-[var(--color-bruniverse-dark)] uppercase">Admin Panel</h1>
            <p className="font-outfit text-xl font-bold text-gray-500 uppercase tracking-widest mt-2">Total Insights: {registrations.length + surveys.length}</p>
          </div>
          <div className="flex gap-4 p-2 bg-white neo-border rounded-xl">
             <button 
               onClick={() => setView('reg')}
               className={`px-6 py-2 rounded-lg font-fredoka font-bold uppercase transition-all ${view === 'reg' ? 'bg-[var(--color-bruniverse-blue)] text-white' : 'hover:bg-gray-100'}`}
             >
               Registrations ({registrations.length})
             </button>
             <button 
               onClick={() => setView('survey')}
               className={`px-6 py-2 rounded-lg font-fredoka font-bold uppercase transition-all ${view === 'survey' ? 'bg-[var(--color-bruniverse-peach)] text-white' : 'hover:bg-gray-100'}`}
             >
               Surveys ({surveys.length})
             </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white neo-border neo-shadow rounded-2xl overflow-hidden"
        >
           <div className="overflow-x-auto">
             <table className="w-full text-left font-outfit border-collapse">
               <thead>
                 <tr className="bg-[var(--color-bruniverse-dark)] text-white uppercase text-sm tracking-widest">
                   <th className="p-6">Date</th>
                   {view === 'reg' ? (
                     <>
                       <th className="p-6">Name</th>
                       <th className="p-6">Email</th>
                       <th className="p-6">Phone</th>
                       <th className="p-6">City</th>
                     </>
                   ) : (
                     <>
                       <th className="p-6">Pet Info</th>
                       <th className="p-6">Shopping Habits</th>
                       <th className="p-6">Spend</th>
                       <th className="p-6">WhatsApp</th>
                     </>
                   )}
                 </tr>
               </thead>
               <tbody className="font-bold text-[var(--color-bruniverse-dark)]">
                 {(view === 'reg' ? registrations : surveys).map((item, idx) => (
                   <tr key={item.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                     <td className="p-6 border-b border-gray-200 text-sm">{new Date(item.created_at).toLocaleDateString()}</td>
                     {view === 'reg' ? (
                       <>
                         <td className="p-6 border-b border-gray-200">{item.full_name}</td>
                         <td className="p-6 border-b border-gray-200">{item.email}</td>
                         <td className="p-6 border-b border-gray-200">{item.phone}</td>
                         <td className="p-6 border-b border-gray-200">{item.city}</td>
                       </>
                     ) : (
                       <>
                         <td className="p-6 border-b border-gray-200">
                           <div className="text-sm uppercase text-gray-500">{item.pet_type} - {item.pet_breed}</div>
                           <div>Age: {item.pet_age}</div>
                         </td>
                         <td className="p-6 border-b border-gray-200">
                           <div className="text-sm uppercase text-gray-500">Buys: {item.buy_most_often}</div>
                           <div>Store: {item.where_shop}</div>
                         </td>
                         <td className="p-6 border-b border-gray-200">{item.monthly_spend}</td>
                         <td className="p-6 border-b border-gray-200">{item.whatsapp}</td>
                       </>
                     )}
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </motion.div>
      </div>
    </div>
  );
};
