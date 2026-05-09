import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bruniverse-dark)] text-white pt-24 pb-8 relative overflow-hidden">
      
      {/* Animated peeking dog */}
      <motion.img 
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpqZWVvOHBkZm8xMW1wZmd4bmIwcXVyaDNnbW84ZXo2cTFkZmwwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"
        alt="Peeking Cat"
        className="absolute top-0 right-10 w-32 md:w-48 z-10 opacity-80"
        style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(180deg) saturate(300%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h3 className="font-fredoka text-4xl font-black text-[var(--color-bruniverse-blue)] mb-6 uppercase tracking-widest">
              Ready to Spoil<br/>Your Pet?
            </h3>
            <p className="font-outfit text-xl mb-8 font-bold border-l-4 border-[var(--color-bruniverse-blue)] pl-4">
              Join the Bruniverse family. Premium care, delivered with love and a little bit of chaos.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -5, rotate: -10 }} href="#" className="w-14 h-14 bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] flex items-center justify-center text-3xl neo-border neo-shadow rounded-full">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ y: -5, rotate: 10 }} href="#" className="w-14 h-14 bg-[var(--color-bruniverse-green)] text-[var(--color-bruniverse-dark)] flex items-center justify-center text-3xl neo-border neo-shadow rounded-full">
                <FaWhatsapp />
              </motion.a>
              <motion.a whileHover={{ y: -5, rotate: -10 }} href="#" className="w-14 h-14 bg-[var(--color-bruniverse-peach)] text-[var(--color-bruniverse-dark)] flex items-center justify-center text-3xl neo-border neo-shadow rounded-full">
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-fredoka text-2xl font-black mb-6 uppercase tracking-wider border-b-4 border-gray-600 pb-2 inline-block">Explore</h4>
            <ul className="space-y-4 font-outfit text-xl font-bold">
              <li><Link to="/" className="hover:text-[var(--color-bruniverse-blue)] transition-colors hover:pl-2">Home</Link></li>
              <li><a href="#services" className="hover:text-[var(--color-bruniverse-green)] transition-colors hover:pl-2">Services</a></li>
              <li><Link to="/survey" className="hover:text-[var(--color-bruniverse-peach)] transition-colors hover:pl-2">Pet Survey</Link></li>
              <li><Link to="/register" className="hover:text-[var(--color-bruniverse-yellow)] transition-colors hover:pl-2">Join Community</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-fredoka text-2xl font-black mb-6 uppercase tracking-wider border-b-4 border-gray-600 pb-2 inline-block">Newsletter</h4>
            <p className="font-outfit text-lg font-bold mb-6">Get 10% off your first premium box!</p>
            <form className="flex shadow-[4px_4px_0_0_#a7edfc]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-[var(--color-bruniverse-dark)] px-4 py-4 w-full font-outfit font-bold border-y-4 border-l-4 border-[var(--color-bruniverse-dark)] focus:outline-none"
              />
              <motion.button 
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="bg-[var(--color-bruniverse-blue)] text-[var(--color-bruniverse-dark)] px-6 py-4 font-black uppercase text-xl border-4 border-[var(--color-bruniverse-dark)]"
              >
                Go
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Massive Typography Footer Line */}
        <div className="border-t-4 border-gray-800 pt-8 mt-12 overflow-hidden flex flex-col items-center">
          <h1 className="text-[12vw] font-fredoka font-black leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            BRUNIVERSE
          </h1>
          <div className="flex justify-between w-full mt-4 text-sm font-outfit font-bold uppercase tracking-widest text-gray-500">
            <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
            <span>Designed with ❤️ for Pets</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
