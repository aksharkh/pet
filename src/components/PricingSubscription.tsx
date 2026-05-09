import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Declare Razorpay on window for TS
declare global {
  interface Window {
    Razorpay: unknown;
  }
}

const plans = [
  {
    id: 'basic',
    name: 'Basic Treats',
    price: '₹499',
    interval: 'mo',
    color: 'bg-[var(--color-bruniverse-green)]',
    rotate: '-rotate-2',
    features: ['1 Premium Treat', '1 Basic Toy', 'Health Tips'],
  },
  {
    id: 'premium',
    name: 'Full Joy Box',
    price: '₹1499',
    interval: 'mo',
    color: 'bg-[var(--color-bruniverse-blue)]',
    rotate: 'rotate-0',
    features: ['3 Premium Treats', '2 Durable Toys', 'Personalized Accessories', 'Free Shipping'],
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'Wellness Plan',
    price: '₹2999',
    interval: 'mo',
    color: 'bg-[var(--color-bruniverse-peach)]',
    rotate: 'rotate-2',
    features: ['Everything in Full Joy', 'Monthly Vet Call', 'Grooming Kit'],
  }
];

export const PricingSubscription = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    setLoadingPlan(planId);
    
    const mockOptions = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY',
      amount: planId === 'basic' ? 49900 : planId === 'premium' ? 149900 : 299900,
      currency: 'INR',
      name: 'Bruniverse',
      description: 'Monthly Pet Subscription',
      image: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Buddy&backgroundColor=a7edfc',
      handler: function (response: Record<string, unknown>) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Pet Parent',
        email: 'petparent@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Bruniverse Corporate Office'
      },
      theme: {
        color: '#a7edfc'
      }
    };
    
    try {
      const rzp = new (window as unknown as { Razorpay: new (options: unknown) => { on: (event: string, callback: (res: Record<string, unknown>) => void) => void, open: () => void } }).Razorpay(mockOptions);
      rzp.on('payment.failed', function (response: Record<string, unknown>){
        const errDesc = response.error ? (response.error as Record<string, unknown>).description : 'Unknown error';
        alert(`Payment failed: ${errDesc}`);
      });
      rzp.open();
    } catch (e) {
      console.error("Razorpay SDK not loaded", e);
      alert("Payment system currently unavailable. Please check your connection.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="py-32 bg-[var(--color-bruniverse-yellow)] relative overflow-visible -mt-1">
      {/* Background patterns - moved down to avoid divider overlap */}
      <div className="absolute inset-0 opacity-10 mt-20" style={{ backgroundImage: 'radial-gradient(var(--color-bruniverse-dark) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-fredoka font-black text-[var(--color-bruniverse-dark)] mb-6 uppercase tracking-tight"
          >
            Because Your Pet <br/> <span className="bg-white px-6 py-2 neo-border inline-block rotate-2 mt-4 text-[var(--color-bruniverse-blue)]">Deserves the Best</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -10, rotate: 0, zIndex: 30 }}
              className={`neo-card p-8 relative ${plan.color} ${plan.rotate} transition-transform duration-300 z-10`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--color-bruniverse-dark)] text-white px-6 py-2 neo-border rounded-full font-fredoka font-bold text-sm uppercase tracking-wider rotate-3 z-20 whitespace-nowrap">
                  🌟 Most Popular
                </div>
              )}
              <h3 className="font-fredoka text-3xl font-black text-[var(--color-bruniverse-dark)] mb-2 uppercase">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b-4 border-[var(--color-bruniverse-dark)]">
                <span className="text-5xl font-black text-[var(--color-bruniverse-dark)]">{plan.price}</span>
                <span className="text-[var(--color-bruniverse-dark)] font-fredoka font-bold text-xl">/{plan.interval}</span>
              </div>
              
              <ul className="space-y-4 mb-10 min-h-[160px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-outfit text-[var(--color-bruniverse-dark)] font-bold text-lg">
                    <FaCheckCircle className="text-[var(--color-bruniverse-dark)] flex-shrink-0 mt-1 text-xl bg-white rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSubscribe(plan.id)}
                disabled={loadingPlan === plan.id}
                className={`w-full py-4 text-xl tracking-wide neo-btn ${plan.popular ? 'bg-[var(--color-bruniverse-dark)] text-white hover:bg-white hover:text-[var(--color-bruniverse-dark)]' : 'bg-white text-[var(--color-bruniverse-dark)] hover:bg-[var(--color-bruniverse-dark)] hover:text-white'}`}
              >
                {loadingPlan === plan.id ? 'Loading...' : 'Subscribe Now'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zigzag bottom divider connecting to Testimonials (Green) */}
      <div className="wave-divider" style={{ bottom: '-4px', zIndex: 5 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,120 L0,0 L60,60 L120,0 L180,60 L240,0 L300,60 L360,0 L420,60 L480,0 L540,60 L600,0 L660,60 L720,0 L780,60 L840,0 L900,60 L960,0 L1020,60 L1080,0 L1140,60 L1200,0 L1200,120 Z" className="fill-[var(--color-bruniverse-green)] stroke-[var(--color-bruniverse-dark)] stroke-[4px]"></path>
        </svg>
      </div>
    </section>
  );
};
