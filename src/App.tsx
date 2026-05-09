import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PetCategories } from './components/PetCategories';
import { PricingSubscription } from './components/PricingSubscription';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Registration } from './pages/Registration';
import { Survey } from './pages/Survey';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';

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
        <Route path="/register" element={<Registration />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
