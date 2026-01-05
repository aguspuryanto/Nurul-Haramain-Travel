
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Kaaba Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 bg-emerald-600/30 border border-emerald-500/30 rounded-full text-sm font-semibold tracking-wider uppercase animate-fade-in">
            Travel Umroh & Hajj Terpercaya
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Kembali ke Baitullah dengan <span className="text-emerald-400">Penuh Ketenangan</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Wujudkan impian ibadah Umroh Anda bersama pembimbing berpengalaman, fasilitas premium, dan pelayanan sepenuh hati. Amanah, nyaman, dan berkesan.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#paket" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 shadow-xl"
            >
              Lihat Paket Umroh
            </a>
            <a 
              href="#booking" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
