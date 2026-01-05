
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import BookingForm from './components/BookingForm';
import ChatBot from './components/ChatBot';
import { PACKAGES, FACILITIES, FAQS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-black text-emerald-600 mb-1">10k+</p>
            <p className="text-sm text-gray-500 font-medium">Jamaah Puas</p>
          </div>
          <div className="text-center border-l border-gray-100">
            <p className="text-4xl font-black text-emerald-600 mb-1">15+</p>
            <p className="text-sm text-gray-500 font-medium">Tahun Pengalaman</p>
          </div>
          <div className="text-center border-l border-gray-100">
            <p className="text-4xl font-black text-emerald-600 mb-1">98%</p>
            <p className="text-sm text-gray-500 font-medium">Tingkat Rekomendasi</p>
          </div>
          <div className="text-center border-l border-gray-100">
            <p className="text-4xl font-black text-emerald-600 mb-1">24/7</p>
            <p className="text-sm text-gray-500 font-medium">Pendampingan</p>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section id="paket" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Pilihan Paket Umroh Terbaik</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tersedia berbagai pilihan paket yang dapat disesuaikan dengan kebutuhan dan kenyamanan ibadah Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="fasilitas" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:max-w-xl mb-10 md:mb-0">
              <h2 className="text-4xl font-serif mb-6">Fasilitas Eksklusif & <span className="text-emerald-400">Terbaik</span></h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Kami berkomitmen memberikan pelayanan VVIP untuk setiap jamaah agar fokus sepenuhnya pada kekhusyukan ibadah di tanah suci.
              </p>
            </div>
            <a href="#booking" className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all">
              Hubungi Konsultan
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACILITIES.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Galeri Kebahagiaan Jamaah</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Momen-momen berkesan para tamu Allah yang telah mempercayakan perjalanan spiritualnya bersama kami.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/400/500?random=1" className="w-full h-64 object-cover rounded-3xl" alt="Gallery" />
              <img src="https://picsum.photos/400/300?random=2" className="w-full h-40 object-cover rounded-3xl" alt="Gallery" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/400/300?random=3" className="w-full h-40 object-cover rounded-3xl" alt="Gallery" />
              <img src="https://picsum.photos/400/500?random=4" className="w-full h-64 object-cover rounded-3xl" alt="Gallery" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/400/600?random=5" className="w-full h-72 object-cover rounded-3xl" alt="Gallery" />
              <img src="https://picsum.photos/400/250?random=6" className="w-full h-32 object-cover rounded-3xl" alt="Gallery" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/400/300?random=7" className="w-full h-40 object-cover rounded-3xl" alt="Gallery" />
              <img src="https://picsum.photos/400/400?random=8" className="w-full h-56 object-cover rounded-3xl" alt="Gallery" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking & FAQ Section */}
      <section id="booking" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <BookingForm />
            </div>
            
            <div id="faq">
              <h2 className="text-4xl font-serif mb-8">Pertanyaan Umum</h2>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details key={idx} className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all border border-gray-100">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-800 hover:text-emerald-600 transition-colors">
                      <span>{faq.question}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center space-x-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900">Butuh Bantuan Segera?</h4>
                  <p className="text-emerald-700/70 text-sm mb-2">CS kami siap melayani Anda 24/7 melalui WhatsApp.</p>
                  <a href="#" className="text-emerald-700 font-black text-lg hover:underline">+62 812 3456 7890</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold text-emerald-800">Nurul Haramain</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Menjadi partner terbaik dalam perjalanan spiritual Anda menuju Baitullah dengan pelayanan yang amanah dan terpercaya.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Tautan Cepat</h5>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#home" className="hover:text-emerald-600">Home</a></li>
                <li><a href="#paket" className="hover:text-emerald-600">Paket Umroh</a></li>
                <li><a href="#fasilitas" className="hover:text-emerald-600">Fasilitas</a></li>
                <li><a href="#galeri" className="hover:text-emerald-600">Galeri</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Legalitas</h5>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Izin Kemenag No. 123/2023</li>
                <li>Sertifikasi PPIU</li>
                <li>Syarat & Ketentuan</li>
                <li>Kebijakan Privasi</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Ikuti Kami</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.124 1.384-.666.665-1.077 1.334-1.384 2.124-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.124.665.666 1.334 1.077 2.124 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.124-1.384.666-.665 1.077-1.334 1.384-2.124.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.124-.665-.666-1.334-1.077-2.124-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Nurul Haramain Travel. Seluruh Hak Cipta Dilindungi.</p>
            <p className="mt-4 md:mt-0">Dibuat dengan penuh dedikasi untuk Jamaah Indonesia.</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;
