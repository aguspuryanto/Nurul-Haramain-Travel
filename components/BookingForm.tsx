
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center border-t-8 border-emerald-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Pendaftaran Berhasil!</h3>
        <p className="text-gray-600 mb-8">Terima kasih telah memilih Nurul Haramain. Tim konsultan kami akan menghubungi Anda melalui WhatsApp dalam waktu maksimal 1x24 jam.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-emerald-600 font-bold hover:underline"
        >
          Kirim form lain
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-t-8 border-emerald-600">
      <h2 className="text-3xl font-bold mb-2">Formulir Pendaftaran</h2>
      <p className="text-gray-500 mb-8">Silakan lengkapi data di bawah ini untuk konsultasi jadwal & kuota.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
            <input 
              required
              type="text" 
              placeholder="Sesuai KTP"
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Nomor WhatsApp</label>
            <input 
              required
              type="tel" 
              placeholder="0812-xxxx-xxxx"
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Paket yang Diminati</label>
          <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none cursor-pointer">
            <option>Umroh Reguler Hemat</option>
            <option>Umroh VIP Premium</option>
            <option>Umroh Plus Turki</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Pesan / Catatan Khusus</label>
          <textarea 
            rows={4}
            placeholder="Misal: Rencana berangkat untuk 4 orang..."
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-emerald-600/20 transform transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Mengirim...</span>
            </>
          ) : (
            <span>Kirim Pendaftaran</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
