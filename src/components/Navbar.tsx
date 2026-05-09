import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="neo-glass bg-white rounded-full px-6 py-3 flex items-center justify-between gap-12 pointer-events-auto"
      >
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <span className="text-3xl">🐾</span>
          </motion.div>
          <span className="font-fredoka text-2xl font-black tracking-widest text-[var(--color-bruniverse-dark)] uppercase">
            Bruniverse
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'Services', 'Pricing'].map((item) => (
            <motion.a 
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} 
              whileHover={{ y: -3, color: "var(--color-bruniverse-blue)" }}
              className="font-fredoka font-bold text-lg uppercase tracking-wide text-[var(--color-bruniverse-dark)] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-bruniverse-dark)] transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <Link to="/survey">
            <motion.span 
              whileHover={{ y: -3, color: "var(--color-bruniverse-blue)" }}
              className="font-fredoka font-bold text-lg uppercase tracking-wide text-[var(--color-bruniverse-dark)] transition-colors relative group"
            >
              Survey
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-bruniverse-dark)] transition-all group-hover:w-full"></span>
            </motion.span>
          </Link>
          
          {user ? (
            <Link to="/profile">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95, rotate: 2 }}
                className="bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase"
              >
                Profile
              </motion.button>
            </Link>
          ) : (
            <div className="flex gap-4">
              <Link to="/register">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95, rotate: 2 }}
                  className="bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase"
                >
                  Join Us
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}
                  className="bg-white text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase"
                >
                  Login
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};
