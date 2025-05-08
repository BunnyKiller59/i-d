import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif text-white mb-6">I & D</h3>
            <p className="text-neutral-400 mb-6">Elevating everyday luxury through timeless design and exceptional craftsmanship.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-6 font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors duration-300">All Products</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors duration-300">Clothing</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors duration-300">Accessories</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors duration-300">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-6 font-medium">About</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-300">Our Story</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-300">Sustainability</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-300">Craftsmanship</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Store Locations</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-6 font-medium">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Contact Us</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">© {currentYear} I & D. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;