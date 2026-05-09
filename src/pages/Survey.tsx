import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Survey = () => {
  const [formData, setFormData] = useState({
    petType: '',
    petAge: '',
    petBreed: '',
    buyMostOften: '',
    whereShop: '',
    monthlySpend: '',
    biggestStruggle: '',
    productsLoveMore: '',
    curatedBoxes: '',
    subscribeReason: '',
    instagram: '',
    stayUpdated: '',
    whatsapp: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('pet_parents_survey')
        .insert([
          {
            pet_type: formData.petType,
            pet_age: formData.petAge,
            pet_breed: formData.petBreed,
            buy_most_often: formData.buyMostOften,
            where_shop: formData.whereShop,
            monthly_spend: formData.monthlySpend,
            biggest_struggle: formData.biggestStruggle,
            products_love_more: formData.productsLoveMore,
            curated_boxes: formData.curatedBoxes,
            subscribe_reason: formData.subscribeReason,
            instagram: formData.instagram,
            stay_updated: formData.stayUpdated,
            whatsapp: formData.whatsapp
          }
        ]);
        
      if (supabaseError) throw supabaseError;
      
      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (err: unknown) {
      console.error(err);
      setError((err as Error).message || "An error occurred while submitting the form.");
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
          <h2 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-dark)] mb-4 uppercase">Welcome to Bruniverse!</h2>
          <p className="font-outfit text-xl font-bold mb-10 text-[var(--color-bruniverse-dark)]">
            Thank you for filling out the survey. We're so excited to have you and your furry friend on board! 🐾
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
  const labelClass = "block font-fredoka font-bold text-xl text-[var(--color-bruniverse-dark)] mb-3";
  const sectionTitleClass = "font-fredoka text-3xl font-black uppercase tracking-wider mb-8 border-b-8 border-[var(--color-bruniverse-dark)] pb-4 inline-block";

  return (
    <div className="min-h-screen bg-[var(--color-bruniverse-blue)] pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(var(--color-bruniverse-dark) 2px, transparent 2px), linear-gradient(90deg, var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="neo-card overflow-hidden"
        >
          <div className="bg-[var(--color-bruniverse-peach)] p-12 text-center relative border-b-4 border-[var(--color-bruniverse-dark)]">
             <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-6 right-8 text-6xl opacity-40">🐾</motion.div>
             <h1 className="font-fredoka text-5xl md:text-6xl font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase tracking-tight">Pet Parent Survey</h1>
             <p className="font-outfit text-[var(--color-bruniverse-dark)] text-xl font-bold bg-white inline-block px-6 py-4 neo-border rotate-1">
               Hey pet parents 💗<br />
               Help us understand what you actually need, love & struggle with.
             </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-16 bg-white">
            {error && (
              <div className="bg-red-100 text-red-800 p-6 neo-border font-outfit font-bold text-lg">
                {error}
              </div>
            )}

            {/* Section 1: Pet Details */}
            <div className="space-y-8">
              <h3 className={`${sectionTitleClass} text-[var(--color-bruniverse-green)]`} style={{ borderColor: 'var(--color-bruniverse-green)' }}>1. Pet Details</h3>
              
              <div>
                <label className={labelClass}>What type of pet do you have? *</label>
                <select required name="petType" value={formData.petType} onChange={handleChange} className={inputClass}>
                  <option value="">Select option</option>
                  <option value="DOG">DOG</option>
                  <option value="CAT">CAT</option>
                  <option value="BOTH">BOTH</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>How old is your pet? *</label>
                  <input required type="text" name="petAge" value={formData.petAge} onChange={handleChange} className={inputClass} placeholder="e.g. 2 years" />
                </div>
                <div>
                  <label className={labelClass}>What breed is your pet? *</label>
                  <input required type="text" name="petBreed" value={formData.petBreed} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Section 2: Shopping Habits */}
            <div className="space-y-8">
              <h3 className={`${sectionTitleClass} text-[var(--color-bruniverse-purple)]`} style={{ borderColor: 'var(--color-bruniverse-purple)' }}>2. Habits</h3>
              
              <div>
                <label className={labelClass}>What do you buy MOST often for your pet? *</label>
                <select required name="buyMostOften" value={formData.buyMostOften} onChange={handleChange} className={inputClass}>
                  <option value="">Select option</option>
                  <option value="Treats">Treats 🍖</option>
                  <option value="Toys">Toys 🧸</option>
                  <option value="Grooming products">Grooming products 🧴</option>
                  <option value="Accessories">Accessories 🎀</option>
                  <option value="Food">Food 🍽️</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Where do you usually shop for pet products? *</label>
                <select required name="whereShop" value={formData.whereShop} onChange={handleChange} className={inputClass}>
                  <option value="">Select option</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Local pet stores">Local pet stores</option>
                  <option value="Instagram stores">Instagram stores</option>
                  <option value="Online pet websites">Online pet websites</option>
                  <option value="Veterinary clinics">Veterinary clinics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>How much do you usually spend monthly? *</label>
                <select required name="monthlySpend" value={formData.monthlySpend} onChange={handleChange} className={inputClass}>
                  <option value="">Select option</option>
                  <option value="Under ₹500">Under ₹500</option>
                  <option value="₹500–₹1000">₹500–₹1000</option>
                  <option value="₹1000–₹3000">₹1000–₹3000</option>
                  <option value="₹3000+">₹3000+</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>What’s the biggest struggle while buying pet products? *</label>
                <select required name="biggestStruggle" value={formData.biggestStruggle} onChange={handleChange} className={inputClass}>
                  <option value="">Select option</option>
                  <option value="Too expensive">Too expensive 💸</option>
                  <option value="Poor quality">Poor quality 😕</option>
                  <option value="Hard to choose">Hard to choose 🤔</option>
                  <option value="Not enough customization">Not enough customization 🐾</option>
                  <option value="Unsafe ingredients">Unsafe ingredients ⚠️</option>
                  <option value="Delivery issues">Delivery issues 📦</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>What kind of products would you LOVE to see more of? *</label>
                <input required type="text" name="productsLoveMore" value={formData.productsLoveMore} onChange={handleChange} className={inputClass} placeholder="e.g. Healthy treats, Durable toys" />
              </div>
            </div>

            {/* Section 3: Subscriptions & Extras */}
            <div className="space-y-8">
              <h3 className={`${sectionTitleClass} text-[var(--color-bruniverse-yellow)]`} style={{ borderColor: 'var(--color-bruniverse-yellow)' }}>3. Subscriptions</h3>
              
              <div>
                <label className={labelClass}>Interested in curated pet boxes tailored to your pet? *</label>
                <div className="flex gap-8">
                  {['Yes', 'No', 'Maybe'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer font-outfit font-bold text-xl">
                      <input type="radio" name="curatedBoxes" value={opt} onChange={handleChange} required className="w-6 h-6 accent-[var(--color-bruniverse-dark)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>What would make you subscribe to a pet box? *</label>
                <textarea required name="subscribeReason" value={formData.subscribeReason} onChange={handleChange} rows={3} className={inputClass}></textarea>
              </div>

              <div>
                <label className={labelClass}>Your Pet's Instagram handle (Optional)</label>
                <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} className={inputClass} placeholder="@" />
              </div>

              <div>
                <label className={labelClass}>Like to stay updated with Bruniverse launches? *</label>
                <div className="flex gap-8">
                  {['Yes', 'No', 'Maybe'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer font-outfit font-bold text-xl">
                      <input type="radio" name="stayUpdated" value={opt} onChange={handleChange} required className="w-6 h-6 accent-[var(--color-bruniverse-dark)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Want WhatsApp updates? (Optional)</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              type="submit" 
              disabled={loading}
              className="w-full bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] py-6 neo-btn text-2xl uppercase tracking-widest mt-12 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Survey 🐾'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
