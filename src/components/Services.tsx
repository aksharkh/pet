import { motion } from 'framer-motion';

const servicesList = [
  {
    title: 'Veterinary Care',
    desc: 'Comprehensive health checkups & 24/7 emergency support with our certified premium partners.',
    icon: '🏥',
    color: 'var(--color-bruniverse-blue)'
  },
  {
    title: 'Professional Grooming',
    desc: 'Bespoke spa days, nail clipping, and fancy haircuts for your furry companions.',
    icon: '✂️',
    color: 'var(--color-bruniverse-peach)'
  },
  {
    title: 'Pet Daycare & Play',
    desc: 'Safe, fun, and extremely dynamic environment to keep your pet social and active.',
    icon: '🎾',
    color: 'var(--color-bruniverse-yellow)'
  },
  {
    title: 'Nutrition & Diet Plans',
    desc: 'Personalized premium food formulation curated specifically for your pet\'s health.',
    icon: '🍖',
    color: 'var(--color-bruniverse-purple)'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden border-t-4 border-[var(--color-bruniverse-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="bg-[var(--color-bruniverse-green)] text-[var(--color-bruniverse-dark)] font-black px-6 py-2 rounded-full border-4 border-[var(--color-bruniverse-dark)] uppercase tracking-wider text-sm inline-block shadow-[4px_4px_0_0_#1a1a1a] mb-6">
            Our Offerings
          </span>
          <h2 className="text-5xl md:text-6xl font-fredoka font-black text-[var(--color-bruniverse-dark)] uppercase tracking-tight leading-none mb-6">
            All-In-One Care For Your Best Friend
          </h2>
          <p className="text-xl font-outfit font-bold text-gray-600 max-w-3xl mx-auto border-l-4 border-[var(--color-bruniverse-blue)] pl-4">
            From top-tier medical assistance to fun spa days, we ensure every aspect of your pet's happiness and health is fully pampered.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="neo-card p-8 flex flex-col md:flex-row gap-6 items-start"
              style={{ backgroundColor: service.color }}
            >
              <div className="text-5xl bg-white neo-border p-4 rounded-2xl neo-shadow shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-fredoka text-3xl font-black text-[var(--color-bruniverse-dark)] mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="font-outfit text-lg font-bold text-[var(--color-bruniverse-dark)] opacity-90 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
