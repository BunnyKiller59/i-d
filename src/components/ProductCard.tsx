import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden mb-4">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
        </Link>
        
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-100">
          <Heart size={18} />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link 
            to={`/products/${product.id}`}
            className="block text-center hover:text-neutral-600 transition-colors duration-300"
          >
            Quick View
          </Link>
        </div>
      </div>
      
      <Link to={`/products/${product.id}`}>
        <h3 className="font-medium mb-1">{product.name}</h3>
      </Link>
      <p className="text-neutral-600">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;