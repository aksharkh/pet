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
    </section>
  );
};
