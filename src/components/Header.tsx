import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-serif">I & D</Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-neutral-500 transition-colors duration-300 ${
                location.pathname === '/' ? 'font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-neutral-500 transition-colors duration-300 ${
                location.pathname === '/products' ? 'font-medium' : ''
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-neutral-500 transition-colors duration-300 ${
                location.pathname === '/about' ? 'font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-neutral-500 transition-colors duration-300 ${
                location.pathname === '/contact' ? 'font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-6">
            <button className="hover:text-neutral-500 transition-colors duration-300">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="hover:text-neutral-500 transition-colors duration-300 relative">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:text-neutral-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link 
              to="/" 
              className="block hover:text-neutral-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block hover:text-neutral-500 transition-colors duration-300"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="block hover:text-neutral-500 transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block hover:text-neutral-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;