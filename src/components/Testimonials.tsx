
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    pet: 'Luna',
    text: 'Bruniverse treats are the only thing Luna will eat now! The monthly box is like a mini-Christmas.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rotate: '-rotate-2',
    color: 'bg-[var(--color-bruniverse-blue)]'
  },
  {
    id: 2,
    name: 'David K.',
    pet: 'Milo',
    text: 'The quality of the grooming products is outstanding. Milo actually enjoys bath time now.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rotate: 'rotate-3',
    color: 'bg-[var(--color-bruniverse-peach)]'
  },
  {
    id: 3,
    name: 'Priya R.',
    pet: 'Kiwi',
    text: 'I struggled to find good toys for Kiwi locally. The curated bird bundle keeps her entertained!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    rotate: '-rotate-1',
    color: 'bg-[var(--color-bruniverse-green)]'
  },
  {
    id: 4,
    name: 'Tom H.',
    pet: 'Buster',
    text: 'Best subscription ever. Buster knows when the Bruniverse box arrives and goes crazy!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
    rotate: 'rotate-2',
    color: 'bg-[var(--color-bruniverse-yellow)]'
  }
];

export const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[var(--color-bruniverse-green)] overflow-visible relative">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl lg:text-7xl font-fredoka font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase tracking-tight leading-none">
              Loved by Pets,<br/> <span className="text-white drop-shadow-[3px_3px_0_var(--color-bruniverse-dark)]" style={{ WebkitTextStroke: '2px var(--color-bruniverse-dark)' }}>Trusted by Owners</span>
            </h2>
          </motion.div>
          
          <div className="hidden md:flex gap-4">
             <motion.button 
               whileTap={{ scale: 0.9 }}
               onClick={() => {
                 if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
               }}
               className="w-14 h-14 neo-border rounded-full flex items-center justify-center bg-white text-2xl neo-shadow cursor-pointer hover:bg-[var(--color-bruniverse-yellow)] transition-colors"
             >
               ←
             </motion.button>
             <div className="w-14 h-14 neo-border rounded-full flex items-center justify-center bg-[var(--color-bruniverse-yellow)] text-2xl neo-shadow animate-pulse cursor-grab">→</div>
          </div>
        </div>

        <motion.div 
          ref={carouselRef} 
          className="cursor-grab overflow-hidden py-10" 
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            dragElastic={0.2}
            dragMomentum={true}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            className="flex gap-8 lg:gap-12 pl-4"
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className={`min-w-[320px] md:min-w-[400px] neo-card p-8 ${testimonial.color} ${testimonial.rotate} flex-shrink-0 pointer-events-none select-none`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full neo-border bg-white" />
                    <div className="absolute -bottom-2 -right-2 bg-white neo-border rounded-full p-1 text-sm">
                      🐾
                    </div>
                  </div>
                  <div>
                    <h4 className="font-fredoka font-black text-2xl text-[var(--color-bruniverse-dark)]">{testimonial.name}</h4>
                    <p className="font-outfit text-sm text-[var(--color-bruniverse-dark)] font-bold uppercase tracking-wider bg-white px-2 py-1 neo-border inline-block mt-1">Pet: {testimonial.pet}</p>
                  </div>
                </div>
                <p className="font-outfit text-xl font-bold text-[var(--color-bruniverse-dark)] leading-snug">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Torn edge bottom divider connecting to Footer (Dark) */}
      <div className="wave-divider" style={{ bottom: '-4px', zIndex: 5 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px]">
          <path d="M0,120 V50 Q60,30 120,60 T240,40 T360,70 T480,50 T600,80 T720,40 T840,70 T960,50 T1080,80 T1200,60 V120 Z" className="fill-[var(--color-bruniverse-dark)]"></path>
        </svg>
      </div>
    </section>
  );
};
