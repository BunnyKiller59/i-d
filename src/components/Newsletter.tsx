import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would handle newsletter signup here
      console.log('Newsletter signup:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Our Community</h2>
        <p className="text-neutral-300 mb-8">
          Subscribe to receive exclusive updates, early access to new collections, and personalized style recommendations.
        </p>
        
        {subscribed ? (
          <div className="bg-neutral-800 p-6 rounded-sm">
            <p className="text-lg">Thank you for subscribing!</p>
            <p className="text-neutral-400 mt-2">You'll be the first to know about our latest collections and offers.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 bg-neutral-800 text-white border-b border-neutral-700 focus:border-white focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
        
        <p className="text-neutral-500 text-sm mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from I and D.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;