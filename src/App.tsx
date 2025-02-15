import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ServiceDetails } from './pages/ServiceDetails';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServiceDetails />} />
      </Routes>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Artificial Hair Care Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;