import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Timeless Elegance',
    subtitle: 'Spring/Summer 2025 Collection',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Sustainable Luxury',
    subtitle: 'Consciously Crafted Pieces',
    cta: 'Discover More'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Artisanal Excellence',
    subtitle: 'Handcrafted with Passion',
    cta: 'Explore Collection'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-4xl">
              <h2 className="text-xl mb-2 font-light tracking-widest uppercase">{slide.subtitle}</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">{slide.title}</h1>
              <Link 
                to="/products"
                className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 group"
              >
                <span className="flex items-center">
                  {slide.cta} 
                  <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;