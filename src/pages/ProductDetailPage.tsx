import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronRight, Heart, Share2 } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, quantity, selectedSize });
    }
  };

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center text-sm mb-8 text-neutral-500">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={16} />
        <Link to="/products" className="hover:text-black">Products</Link>
        <ChevronRight size={16} />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-neutral-100 aspect-square flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-h-full object-contain" />
        </div>
        
        <div>
          <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
          <p className="text-neutral-600 mb-8">{product.description}</p>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-3">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-neutral-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && <p className="text-red-500 text-sm mt-2">Please select a size</p>}
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex border border-neutral-300 w-32">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center border-r border-neutral-300"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-12 h-10 text-center outline-none"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center border-l border-neutral-300"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`flex-1 py-3 ${
                !selectedSize 
                  ? 'bg-neutral-300 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-neutral-800'
              } transition-colors duration-300`}
            >
              Add to Cart
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-neutral-300 hover:border-black transition-colors duration-300">
              <Heart size={20} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-neutral-300 hover:border-black transition-colors duration-300">
              <Share2 size={20} />
            </button>
          </div>
          
          <div className="border-t border-neutral-200 pt-8">
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Materials</h3>
              <p className="text-neutral-600">Premium quality materials sourced from sustainable suppliers</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Shipping & Returns</h3>
              <p className="text-neutral-600">Free shipping on orders over $100. Returns accepted within 30 days.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {similarProducts.map(product => (
            <Link key={product.id} to={`/products/${product.id}`} className="group">
              <div className="bg-neutral-100 aspect-square mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-neutral-600">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;