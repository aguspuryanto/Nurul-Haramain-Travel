
import React, { useState } from 'react';
import { Package } from '../types';

interface Props {
  packages: Package[];
  onAdd: (pkg: Package) => void;
  onDelete: (id: string) => void;
  onUpdate: (pkg: Package) => void;
}

const PackageManager: React.FC<Props> = ({ packages, onAdd, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPkg, setCurrentPkg] = useState<Partial<Package>>({});

  const handleSave = () => {
    if (currentPkg.id) {
      onUpdate(currentPkg as Package);
    } else {
      onAdd({ 
        ...currentPkg, 
        id: Math.random().toString(36).substr(2, 9),
        features: currentPkg.features || ['Pesawat Full Service', 'Hotel Berbintang']
      } as Package);
    }
    setIsEditing(false);
    setCurrentPkg({});
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Pengelola Paket Umroh</h2>
        <button 
          onClick={() => { setIsEditing(true); setCurrentPkg({}); }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah Paket</span>
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl animate-scale-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{currentPkg.id ? 'Edit Paket' : 'Tambah Paket Baru'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Nama Paket</label>
                <input 
                  type="text" 
                  value={currentPkg.name || ''}
                  onChange={(e) => setCurrentPkg({...currentPkg, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Harga (Angka saja)</label>
                <input 
                  type="text" 
                  value={currentPkg.price || ''}
                  onChange={(e) => setCurrentPkg({...currentPkg, price: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Durasi</label>
                <input 
                  type="text" 
                  value={currentPkg.duration || ''}
                  onChange={(e) => setCurrentPkg({...currentPkg, duration: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                  placeholder="Misal: 9 Hari"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">URL Gambar</label>
                <input 
                  type="text" 
                  value={currentPkg.image || ''}
                  onChange={(e) => setCurrentPkg({...currentPkg, image: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setIsEditing(false)} className="px-6 py-2 text-gray-500 font-bold hover:underline">Batal</button>
              <button 
                onClick={handleSave}
                className="bg-emerald-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-emerald-700 transition-all"
              >
                Simpan Paket
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 group relative">
            <div className="h-40 w-full overflow-hidden rounded-2xl mb-4">
              <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">{pkg.name}</h4>
            <p className="text-emerald-600 font-bold mb-4">Rp {pkg.price}</p>
            <div className="flex space-x-2">
              <button 
                onClick={() => { setCurrentPkg(pkg); setIsEditing(true); }}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl font-bold text-sm transition-all"
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete(pkg.id)}
                className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-xl font-bold text-sm transition-all"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageManager;
