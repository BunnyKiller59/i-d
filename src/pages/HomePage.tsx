import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import BrandStory from '../components/BrandStory';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
      <div className="bg-neutral-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center font-serif">Shop the Latest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 flex flex-col items-center justify-center aspect-square">
              <h3 className="text-2xl mb-4 font-serif">Women's Collection</h3>
              <p className="text-neutral-600 mb-8 text-center">Discover our carefully curated selection of women's luxury items</p>
              <Link to="/products" className="border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                Explore
              </Link>
            </div>
            <div className="bg-white p-8 flex flex-col items-center justify-center aspect-square">
              <h3 className="text-2xl mb-4 font-serif">Men's Collection</h3>
              <p className="text-neutral-600 mb-8 text-center">Elevate your wardrobe with our premium men's pieces</p>
              <Link to="/products" className="border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default HomePage;