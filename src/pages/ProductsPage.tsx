import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Collections</h1>
      
      <div className="flex items-center justify-between mb-8">
        <div className="hidden md:flex space-x-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`capitalize px-4 py-2 transition-colors duration-300 ${
                selectedCategory === category 
                  ? 'border-b-2 border-black font-medium' 
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="md:hidden">
          <button className="flex items-center space-x-2 px-4 py-2 border border-neutral-300 rounded-md">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
        
        <div className="flex space-x-4">
          <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Latest</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;