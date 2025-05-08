import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif mb-8">Your Cart is Empty</h1>
        <p className="text-neutral-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/products" 
          className="inline-block bg-black text-white px-8 py-3 hover:bg-neutral-800 transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif mb-8 text-center">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-neutral-200 pb-4 mb-4 text-sm font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-center">Total</div>
          </div>
          
          {cart.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-neutral-200 py-6 items-center">
              <div className="md:col-span-6 flex items-center">
                <div className="w-24 h-24 bg-neutral-100 mr-4 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-neutral-500 mb-2">Size: {item.selectedSize}</p>
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-sm text-neutral-500 flex items-center hover:text-black transition-colors duration-300"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 md:text-center">
                <div className="md:hidden text-sm text-neutral-500 mb-1">Price:</div>
                ${item.price.toFixed(2)}
              </div>
              
              <div className="md:col-span-2 md:text-center">
                <div className="md:hidden text-sm text-neutral-500 mb-1">Quantity:</div>
                <div className="flex border border-neutral-300 w-24 md:mx-auto">
                  <button 
                    onClick={() => updateQuantity(item.id, item.selectedSize, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center border-r border-neutral-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, item.selectedSize, Math.max(1, parseInt(e.target.value)))}
                    className="w-8 h-8 text-center outline-none"
                  />
                  <button 
                    onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border-l border-neutral-300"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 md:text-center font-medium">
                <div className="md:hidden text-sm text-neutral-500 mb-1">Total:</div>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          
          <div className="flex justify-between mt-8">
            <Link 
              to="/products" 
              className="text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300 flex items-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-neutral-50 p-6">
            <h2 className="text-xl font-serif mb-6">Order Summary</h2>
            
            <div className="space-y-3 text-sm border-b border-neutral-200 pb-6 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between font-medium mb-8">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-black text-white py-3 mb-4 hover:bg-neutral-800 transition-colors duration-300">
              Proceed to Checkout
            </button>
            
            <div className="text-sm text-neutral-500 text-center">
              Taxes and shipping calculated at checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;