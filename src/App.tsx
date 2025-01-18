import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import ProductPage from './pages/ProductPage';
import ProductInfo from './pages/ProductInfo';
import ProductWaitlist from './pages/ProductWaitlist';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />  {/* ScrollToTop is correctly placed here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductInfo />} />
            <Route path="/waitlist" element={<ProductWaitlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


