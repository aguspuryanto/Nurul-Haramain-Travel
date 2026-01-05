
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Paket', href: '#paket' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
            Nurul Haramain
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Pesan Sekarang
          </a>
        </div>
        
        <button className="md:hidden text-emerald-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
