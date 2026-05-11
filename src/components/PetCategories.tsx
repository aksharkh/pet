import { FaDog, FaCat, FaDove, FaFish } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Dogs & Puppies', icon: FaDog, color: 'bg-[var(--color-bruniverse-purple)]', rotate: '-rotate-2' },
  { id: 2, name: 'Cats & Kittens', icon: FaCat, color: 'bg-[var(--color-bruniverse-peach)]', rotate: 'rotate-3' },
  { id: 3, name: 'Birds & Parrots', icon: FaDove, color: 'bg-[var(--color-bruniverse-blue)]', rotate: '-rotate-1' },
  { id: 4, name: 'Fish & Aquatics', icon: FaFish, color: 'bg-[var(--color-bruniverse-green)]', rotate: 'rotate-2' },
];

export const PetCategories = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative scattered elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-50 rotate-45">🦴</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-50 -rotate-12">🐟</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-fredoka font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase tracking-tight"
        >
          Browse by <span className="bg-[var(--color-bruniverse-yellow)] px-4 py-1 neo-border inline-block -rotate-2 ml-2">Pet Type</span>
        </motion.h2>
        <p className="text-xl font-outfit text-[var(--color-bruniverse-dark)] font-medium mb-16 max-w-2xl mx-auto border-b-4 border-[var(--color-bruniverse-dark)] pb-6">
          Explore our curated collections designed specifically for your furry, feathered, or finned family members.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={cat.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", bounce: 0.5 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className={`w-32 h-32 md:w-48 md:h-48 ${cat.color} ${cat.rotate} flex items-center justify-center mb-8 neo-shadow transition-all duration-300 blob-morph group-hover:border-[6px] relative`}
                >
                  <Icon className="text-6xl md:text-7xl text-[var(--color-bruniverse-dark)]" />
                  
                  {/* Small decorative spark */}
                  <div className="absolute -top-4 -right-4 bg-white neo-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    ✨
                  </div>
                </motion.div>
                <h3 className="font-fredoka text-2xl font-black uppercase text-[var(--color-bruniverse-dark)] bg-white px-4 py-2 neo-border group-hover:bg-[var(--color-bruniverse-yellow)] transition-colors">
                  {cat.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Wavy bottom divider connecting to Pricing (Yellow) */}
      <div className="wave-divider" style={{ bottom: '-10px', zIndex: 10 }}>
        <svg className="w-full h-[150px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fef5c4" opacity="0.3"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#fef5c4" opacity="0.6"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#fef5c4"></path>
        </svg>
      </div>
    </section>
  );
};
