
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
              
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-fredoka font-black text-[var(--color-bruniverse-dark)] leading-[0.9] uppercase tracking-tighter mb-6 relative">
                Pet Care <br />
                <span className="text-white drop-shadow-[4px_4px_0_var(--color-bruniverse-dark)]" style={{ WebkitTextStroke: '2px var(--color-bruniverse-dark)' }}>
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
              
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3h0Y3JjZ2JtazUxcWR2dnhyZTVxeHhoMDIwaDJiNmQzb3Q1NjB4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QvBoMEcQ7DQXK/giphy.gif" 
                alt="Animated Dog" 
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-10" 
              />

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-white neo-border rounded-full flex items-center justify-center neo-shadow z-20"
              >
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGxycjUzZm9nMWlzNXE1ejV1MHRydTBqNnhjdzhsYWp5aHZxbTZ6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MdAnzFvJ6T0O9dD9Jg/giphy.gif" alt="Cat" className="w-20 h-20 object-contain" />
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
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill shape-stroke"></path>
        </svg>
      </div>
      
      {/* Decorative overlapping dog bursting through the wave */}
      <motion.img 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdzbmlkZHhkZHJ6ZjgyODhjOWYzaTVnODlyNTVtcXBqbzUyNzhkeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8gTY3I3V6056BsszF1/giphy.gif"
        alt="Happy dog jumping"
        className="absolute bottom-[-20px] left-[10%] w-48 lg:w-64 z-30 drop-shadow-xl"
      />
    </section>
  );
};
