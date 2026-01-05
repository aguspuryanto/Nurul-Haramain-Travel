
import React from 'react';
import { Package } from '../types';

interface Props {
  pkg: Package;
}

const PackageCard: React.FC<Props> = ({ pkg }) => {
  return (
    <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${pkg.isPopular ? 'border-emerald-500' : 'border-transparent'}`}>
      {pkg.isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Best Seller
        </div>
      )}
      
      <div className="h-56 relative overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
          <span className="text-white text-sm font-medium">{pkg.duration}</span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.name}</h3>
        <div className="mb-6">
          <span className="text-gray-400 text-sm">Mulai dari</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-emerald-600 font-bold text-sm">Rp</span>
            <span className="text-3xl font-black text-emerald-600">{pkg.price}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a 
          href="#booking" 
          className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
            pkg.isPopular 
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Pilih Paket
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
