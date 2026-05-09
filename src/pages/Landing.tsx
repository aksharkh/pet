
import { Hero } from '../components/Hero';
import { PetCategories } from '../components/PetCategories';
import { PricingSubscription } from '../components/PricingSubscription';
import { Testimonials } from '../components/Testimonials';

export const Landing = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <PetCategories />
      {/* Services Section Placeholder - from Design 2 */}
      <section id="services" className="py-24 bg-[var(--color-bruniverse-green)] bg-opacity-30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-bruniverse-dark)] mb-6">
                All-In-One Care for Your Pet's Needs
              </h2>
              <p className="text-lg font-outfit text-gray-700 mb-8">
                From medical care to wellness plans, we ensure your best friend gets the premium treatment they deserve.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">+</div>
                  <div>
                    <h4 className="font-fredoka font-bold text-[var(--color-bruniverse-dark)]">Veterinary Care</h4>
                    <p className="text-sm font-outfit text-gray-500">Comprehensive health checkups</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">✂️</div>
                  <div>
                    <h4 className="font-fredoka font-bold text-[var(--color-bruniverse-dark)]">Grooming</h4>
                    <p className="text-sm font-outfit text-gray-500">Spa days for your furry friends</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">🎾</div>
                  <div>
                    <h4 className="font-fredoka font-bold text-[var(--color-bruniverse-dark)]">Pet Daycare</h4>
                    <p className="text-sm font-outfit text-gray-500">Safe and fun environment</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-[var(--color-bruniverse-blue)] opacity-20 blob-shape-1 animate-[spin_20s_linear_infinite]"></div>
              <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Luna&backgroundColor=transparent" alt="Vet Care" className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      
      <PricingSubscription />
      <Testimonials />
    </div>
  );
};
