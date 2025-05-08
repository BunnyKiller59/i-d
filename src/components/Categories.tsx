import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Clothing',
    image: 'https://images.pexels.com/photos/5709667/pexels-photo-5709667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Timeless pieces crafted from premium materials'
  },
  {
    id: 2,
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Elevate your style with our curated accessories'
  },
  {
    id: 3,
    name: 'Home',
    image: 'https://images.pexels.com/photos/6207809/pexels-photo-6207809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Bring luxury into your living space'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link key={category.id} to="/products" className="block group">
              <div className="relative aspect-square overflow-hidden mb-4">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-serif">{category.name}</h3>
                </div>
              </div>
              
              <p className="text-neutral-600 text-center">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;