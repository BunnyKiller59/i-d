import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  // Get 3 featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Featured Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <Link key={product.id} to={`/products/${product.id}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-neutral-600">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;