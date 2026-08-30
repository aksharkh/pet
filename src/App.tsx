import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PetCategories } from './components/PetCategories';
import { PricingSubscription } from './components/PricingSubscription';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Services } from './components/Services';
import { Registration } from './pages/Registration';
import { Survey } from './pages/Survey';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { ResetPassword } from './pages/ResetPassword';

const Landing = () => (
  <main className="min-h-screen">
    <Navbar />
    <Hero />
    <MarqueeDivider />
    <PetCategories />
    <Services />
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
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
