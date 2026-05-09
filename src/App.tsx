import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PetCategories } from './components/PetCategories';
import { PricingSubscription } from './components/PricingSubscription';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Survey } from './pages/Survey';

const Landing = () => (
  <main className="min-h-screen">
    <Navbar />
    <Hero />
    <MarqueeDivider />
    <PetCategories />
    <PricingSubscription />
    <Testimonials />
    <Footer />
  </main>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
