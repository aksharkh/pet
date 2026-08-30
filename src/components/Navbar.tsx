import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Survey', href: '/survey', type: 'link' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="neo-glass bg-white rounded-2xl md:rounded-full px-4 md:px-6 py-3 flex items-center justify-between w-full max-w-7xl pointer-events-auto shadow-2xl"
      >
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <span className="text-2xl md:text-3xl">🐾</span>
          </motion.div>
          <span className="font-fredoka text-xl md:text-2xl font-black tracking-widest text-[var(--color-bruniverse-dark)] uppercase">
            Bruniverse
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
          {navLinks.map((item) => (
            item.type === 'link' ? (
              <Link key={item.name} to={item.href}>
                <motion.span 
                  whileHover={{ y: -3, color: "var(--color-bruniverse-blue)" }}
                  className="font-fredoka font-bold text-lg uppercase tracking-wide text-[var(--color-bruniverse-dark)] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-bruniverse-dark)] transition-all group-hover:w-full"></span>
                </motion.span>
              </Link>
            ) : (
              <motion.a 
                key={item.name}
                href={item.href} 
                whileHover={{ y: -3, color: "var(--color-bruniverse-blue)" }}
                className="font-fredoka font-bold text-lg uppercase tracking-wide text-[var(--color-bruniverse-dark)] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-bruniverse-dark)] transition-all group-hover:w-full"></span>
              </motion.a>
            )
          ))}
          
          {user ? (
            <Link to="/profile">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95, rotate: 2 }}
                className="bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase font-bold"
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
                  className="bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase font-bold"
                >
                  Join Us
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}
                  className="bg-white text-[var(--color-bruniverse-dark)] px-6 py-2 neo-btn uppercase font-bold"
                >
                  Login
                </motion.button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-3xl text-[var(--color-bruniverse-dark)] hover:bg-gray-100 rounded-xl transition-colors"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white neo-border rounded-3xl p-6 shadow-2xl flex flex-col gap-6 lg:hidden pointer-events-auto"
          >
            {navLinks.map((item) => (
              item.type === 'link' ? (
                <Link 
                  key={item.name} 
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-fredoka font-black text-2xl uppercase text-[var(--color-bruniverse-dark)] hover:text-[var(--color-bruniverse-blue)]"
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-fredoka font-black text-2xl uppercase text-[var(--color-bruniverse-dark)] hover:text-[var(--color-bruniverse-blue)]"
                >
                  {item.name}
                </a>
              )
            ))}
            
            <div className="h-1 bg-[var(--color-bruniverse-dark)] opacity-10"></div>
            
            {user ? (
              <Link 
                to="/profile" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <button className="w-full bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] py-4 neo-btn uppercase font-black text-xl">
                  Profile Dashboard
                </button>
              </Link>
            ) : (
              <div className="flex flex-col gap-4">
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] py-4 neo-btn uppercase font-black text-xl">
                    Join the Club
                  </button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-white text-[var(--color-bruniverse-dark)] py-4 neo-btn uppercase font-black text-xl">
                    Member Login
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
