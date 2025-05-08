import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log(formData);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
          <p className="text-neutral-600 mb-8">We'd love to hear from you. Our customer service team is available to assist you with any questions or concerns.</p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 mr-4">
                <MapPin className="text-neutral-700" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Our Store</h3>
                <p className="text-neutral-600">123 Luxury Avenue, Fashion District<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 mr-4">
                <Phone className="text-neutral-700" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-neutral-600">+1 (212) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 mr-4">
                <Mail className="text-neutral-700" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-neutral-600">customercare@iandd.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <table className="w-full text-neutral-600">
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-2">Monday - Friday</td>
                  <td className="py-2 text-right">10:00 AM - 7:00 PM</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-2">Saturday</td>
                  <td className="py-2 text-right">11:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2 text-right">12:00 PM - 5:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300 bg-white"
              >
                <option value="">Select a subject</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Order Status">Order Status</option>
                <option value="Returns">Returns</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 hover:bg-neutral-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-16 h-96 bg-neutral-100">
        {/* In a real application, you would integrate a map here */}
        <div className="w-full h-full flex items-center justify-center text-neutral-500">
          Interactive map would be displayed here
        </div>
      </div>
    </div>
  );
};

export default ContactPage;