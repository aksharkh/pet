
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 bg-[var(--color-bruniverse-blue)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-3/5 z-20"
          >
            <div className="relative">
              {/* Decorative element behind text */}
              <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 w-24 h-24 bg-[var(--color-bruniverse-yellow)] neo-border rounded-full flex items-center justify-center text-4xl neo-shadow z-[-1]"
              >
                ✨
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl lg:text-[100px] font-fredoka font-black text-[var(--color-bruniverse-dark)] leading-[1.1] md:leading-[0.9] uppercase tracking-tighter mb-6 relative">
                Pet Care <br />
                <span className="text-white drop-shadow-[4px_4px_0_var(--color-bruniverse-dark)]" style={{ WebkitTextStroke: '1.5px var(--color-bruniverse-dark)' }}>
                  Done Right
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl font-outfit mb-10 text-[var(--color-bruniverse-dark)] font-medium max-w-lg border-l-4 border-[var(--color-bruniverse-dark)] pl-6">
              Support for every furry, feathered, and finned friend. We bring the joy of premium pet care to your doorstep.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing" 
                className="bg-[var(--color-bruniverse-yellow)] text-[var(--color-bruniverse-dark)] px-8 py-4 neo-btn text-xl"
              >
                Explore Plans
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services" 
                className="bg-white text-[var(--color-bruniverse-dark)] px-8 py-4 neo-btn text-xl"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="w-full lg:w-2/5 relative"
          >
            {/* Main animated cluster */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[var(--color-bruniverse-green)] blob-morph"></div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
              >
                <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Tail with wagging animation */}
                  <motion.path 
                    animate={{ rotate: [-10, 15, -10] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "40px", originY: "130px" }}
                    d="M45 135 C20 120 15 90 30 80 C40 80 45 110 50 125 Z" 
                    fill="var(--color-bruniverse-purple)" 
                    stroke="var(--color-bruniverse-dark)" 
                    strokeWidth="5" 
                    strokeLinejoin="round" 
                  />
                  {/* Back Leg */}
                  <rect x="55" y="145" width="24" height="35" rx="12" fill="var(--color-bruniverse-dark)" stroke="var(--color-bruniverse-dark)" strokeWidth="5" />
                  {/* Body */}
                  <rect x="50" y="80" width="110" height="75" rx="35" fill="var(--color-bruniverse-yellow)" stroke="var(--color-bruniverse-dark)" strokeWidth="5" />
                  {/* Front Legs */}
                  <rect x="75" y="145" width="24" height="40" rx="12" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="5" />
                  <rect x="125" y="145" width="24" height="40" rx="12" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="5" />
                  {/* Collar */}
                  <path d="M125 90 C135 90 145 105 140 115" stroke="red" strokeWidth="10" strokeLinecap="round" />
                  {/* Collar Tag */}
                  <circle cx="140" cy="115" r="8" fill="gold" stroke="var(--color-bruniverse-dark)" strokeWidth="3" />
                  {/* Head */}
                  <circle cx="140" cy="65" r="45" fill="var(--color-bruniverse-blue)" stroke="var(--color-bruniverse-dark)" strokeWidth="5" />
                  {/* Left Ear with floppy bounce */}
                  <motion.path 
                    animate={{ rotate: [-5, 8, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "105px", originY: "35px" }}
                    d="M105 35 C85 45 80 80 95 90 C105 90 115 70 115 50 Z" 
                    fill="var(--color-bruniverse-dark)" 
                    stroke="var(--color-bruniverse-dark)" 
                    strokeWidth="5" 
                    strokeLinejoin="round" 
                  />
                  {/* Right Ear */}
                  <motion.path 
                    animate={{ rotate: [5, -8, 5] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ originX: "175px", originY: "35px" }}
                    d="M175 35 C195 45 200 80 185 90 C175 90 165 70 165 50 Z" 
                    fill="var(--color-bruniverse-dark)" 
                    stroke="var(--color-bruniverse-dark)" 
                    strokeWidth="5" 
                    strokeLinejoin="round" 
                  />
                  {/* Eyes with blinking animation */}
                  <motion.g
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originY: "60px" }}
                  >
                    <circle cx="130" cy="60" r="7" fill="var(--color-bruniverse-dark)" />
                    <circle cx="160" cy="60" r="7" fill="var(--color-bruniverse-dark)" />
                    <circle cx="127" cy="57" r="2.5" fill="#fff" />
                    <circle cx="157" cy="57" r="2.5" fill="#fff" />
                  </motion.g>
                  {/* Cute Cheeks */}
                  <circle cx="118" cy="72" r="5" fill="var(--color-bruniverse-peach)" opacity="0.8" />
                  <circle cx="172" cy="72" r="5" fill="var(--color-bruniverse-peach)" opacity="0.8" />
                  {/* Snout & Mouth */}
                  <ellipse cx="145" cy="75" rx="14" ry="10" fill="#fff" stroke="var(--color-bruniverse-dark)" strokeWidth="4" />
                  <polygon points="145,72 140,66 150,66" fill="var(--color-bruniverse-dark)" />
                  <path d="M140 76 Q145 80 145 76 Q145 80 150 76" stroke="var(--color-bruniverse-dark)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-white neo-border rounded-full flex items-center justify-center neo-shadow z-20"
              >
                <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Ears */}
                  <path d="M15 40 L25 15 L45 35 Z" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M85 40 L75 15 L55 35 Z" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" strokeLinejoin="round" />
                  {/* Inner Ears */}
                  <path d="M22 38 L27 22 L39 34 Z" fill="#fff" />
                  <path d="M78 38 L73 22 L61 34 Z" fill="#fff" />
                  {/* Head */}
                  <circle cx="50" cy="55" r="35" fill="var(--color-bruniverse-yellow)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" />
                  {/* Eyes */}
                  <circle cx="38" cy="50" r="5" fill="var(--color-bruniverse-dark)" />
                  <circle cx="62" cy="50" r="5" fill="var(--color-bruniverse-dark)" />
                  <circle cx="36" cy="48" r="1.5" fill="#fff" />
                  <circle cx="60" cy="48" r="1.5" fill="#fff" />
                  {/* Cheeks */}
                  <circle cx="30" cy="58" r="4" fill="var(--color-bruniverse-peach)" opacity="0.6" />
                  <circle cx="70" cy="58" r="4" fill="var(--color-bruniverse-peach)" opacity="0.6" />
                  {/* Nose & Mouth */}
                  <polygon points="50,58 46,54 54,54" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="2" />
                  <path d="M46 62 Q50 65 50 62 Q50 65 54 62" stroke="var(--color-bruniverse-dark)" strokeWidth="3" strokeLinecap="round" />
                  {/* Whiskers */}
                  <path d="M20 54 L5 52 M20 58 L3 58 M20 62 L5 64" stroke="var(--color-bruniverse-dark)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M80 54 L95 52 M80 58 L97 58 M80 62 L95 64" stroke="var(--color-bruniverse-dark)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -left-16 w-24 h-24 bg-[var(--color-bruniverse-peach)] neo-border rounded-xl flex items-center justify-center neo-shadow z-20 rotate-12"
              >
                <span className="text-4xl">🎾</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy bottom divider - Torn paper style */}
      <div className="wave-divider">
        <svg className="rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill shape-stroke"></path>
        </svg>
      </div>
      
      {/* Decorative overlapping dog bursting through the wave */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          default: { duration: 1, delay: 0.8, type: "spring" }
        }}
        className="absolute bottom-[-10px] left-[10%] w-48 lg:w-64 z-30 drop-shadow-xl"
      >
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tail */}
          <path d="M20 70 Q5 55 15 45 Q25 45 25 60 Z" fill="var(--color-bruniverse-yellow)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" strokeLinejoin="round" />
          {/* Body */}
          <rect x="25" y="55" width="70" height="45" rx="20" fill="var(--color-bruniverse-peach)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" />
          {/* Legs */}
          <rect x="35" y="95" width="12" height="20" rx="6" fill="var(--color-bruniverse-dark)" />
          <rect x="75" y="95" width="12" height="20" rx="6" fill="var(--color-bruniverse-dark)" />
          {/* Head */}
          <circle cx="85" cy="45" r="28" fill="var(--color-bruniverse-yellow)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" />
          {/* Ears */}
          <path d="M62 35 Q50 45 55 60 Q65 65 72 50 Z" fill="var(--color-bruniverse-dark)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" strokeLinejoin="round" />
          <path d="M108 35 Q120 45 115 60 Q105 65 98 50 Z" fill="var(--color-bruniverse-dark)" stroke="var(--color-bruniverse-dark)" strokeWidth="4" strokeLinejoin="round" />
          {/* Eyes */}
          <circle cx="80" cy="40" r="4.5" fill="var(--color-bruniverse-dark)" />
          <circle cx="98" cy="40" r="4.5" fill="var(--color-bruniverse-dark)" />
          <circle cx="78" cy="38" r="1.5" fill="#fff" />
          <circle cx="96" cy="38" r="1.5" fill="#fff" />
          {/* Nose */}
          <circle cx="90" cy="48" r="4" fill="var(--color-bruniverse-dark)" />
          {/* Tongue/Mouth */}
          <path d="M84 52 Q90 56 96 52" stroke="var(--color-bruniverse-dark)" strokeWidth="3" strokeLinecap="round" />
          <path d="M88 54 Q90 62 92 54" fill="red" stroke="var(--color-bruniverse-dark)" strokeWidth="2" />
        </svg>
      </motion.div>
    </section>
  );
};
