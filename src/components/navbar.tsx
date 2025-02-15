import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-pink-600" : "text-gray-600 hover:text-pink-600";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="w-8 h-8 text-pink-600" />
            <span className="text-xl font-bold">Hair Care Services</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}