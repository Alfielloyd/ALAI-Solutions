import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              < className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ALAI Solutions</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            <Link to="/product" className="text-gray-700 hover:text-indigo-600">Product</Link>
            <Link to="/auth" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
            <Link to="/product" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Product</Link>
            <Link to="/auth" className="block px-3 py-2 bg-indigo-600 text-white rounded-md">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
}