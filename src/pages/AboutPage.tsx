import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Our Story</h1>
        
        <div className="bg-neutral-100 aspect-video mb-12">
          <img 
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="I and D Store" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p>I and D was founded in 2020 with a simple yet powerful vision: to create timeless luxury pieces that transcend seasonal trends. Our founders, Isabel and David, met while studying fashion design in Milan and shared a passion for exceptional craftsmanship and sustainable practices.</p>
          
          <p>What began as a small collection of handcrafted accessories has evolved into a comprehensive luxury brand, offering a curated selection of clothing, accessories, and homeware. Despite our growth, we remain committed to our founding principles: quality over quantity, ethical production, and timeless design.</p>
          
          <p>Every I and D piece is a testament to our dedication to excellence. We work with skilled artisans from around the world, many of whom have been practicing their craft for generations. By partnering with these master craftspeople, we ensure that each item not only meets our exacting standards but also helps preserve traditional techniques that might otherwise be lost.</p>
          
          <p>Sustainability is woven into the fabric of our brand. We carefully select materials that are kind to the environment and built to last. We believe that true luxury is not just about aesthetics or prestige, but about consciousness and responsibility.</p>
          
          <p>We invite you to experience the world of I and D – where timeless elegance meets contemporary consciousness.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Vision</h2>
            <p className="text-neutral-600">To create a world where luxury and sustainability coexist harmoniously, where exceptional quality is accessible to those who value craftsmanship over conspicuous consumption.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
            <p className="text-neutral-600">To design and craft timeless pieces that enhance the lives of our customers while respecting our planet and supporting skilled artisans around the world.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-neutral-100">
            <img 
              src="https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-neutral-100">
            <img 
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Materials" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-neutral-100">
            <img 
              src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-neutral-100">
            <img 
              src="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Finished Product" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;