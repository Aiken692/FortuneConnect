import React from 'react';

const HeroSection = () => {
    return (
      <section 
      id="hero-section"
      className="text-red-800 text-center py-20" 
      style={{
          backgroundImage: 'url("https://fortune500klub.com/web/assets/img/portfolio/G85_0523.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
      }}
  >
      <h2 className="text-4xl font-bold mb-4">Welcome to FortuneConnect 500 Klub</h2>
      <p className="mb-6">Connecting businesses with opportunities.</p>
      <a href="#" className="bg-white text-red-800 px-6 py-2 rounded-full font-semibold hover:scale-110 ease-in duration-200">Get Started</a>
  </section>
      );
};

export default HeroSection;