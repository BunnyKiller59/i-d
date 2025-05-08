import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
            <p className="text-neutral-600 mb-6">
              Founded in 2020, I and D was born from a passion for timeless design and sustainable luxury. Our founders, Isabel and David, combined their expertise in fashion and craftsmanship to create pieces that transcend seasonal trends.
            </p>
            <p className="text-neutral-600 mb-8">
              We work with skilled artisans around the world, using only the finest materials sourced with respect for both people and planet. Each I and D piece represents our commitment to exceptional quality and conscious luxury.
            </p>
            <Link 
              to="/about" 
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-neutral-100">
              <img 
                src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-square bg-neutral-100 relative top-8">
              <img 
                src="https://images.pexels.com/photos/7679684/pexels-photo-7679684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Materials" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;