
import { Package, FAQItem, Facility, Testimonial, BookingSubmission } from './types';

export const INITIAL_PACKAGES: Package[] = [
  {
    id: '1',
    name: 'Umroh Reguler Hemat',
    price: '28.500.000',
    duration: '9 Hari',
    image: 'https://images.unsplash.com/photo-1565552645632-d7c5f76a16cc?auto=format&fit=crop&q=80&w=800',
    features: ['Pesawat Ekonomi', 'Hotel Bintang 3', 'Makan 3x Sehari', 'Handling & Perlengkapan', 'Ziarah Mekkah & Madinah'],
    isPopular: false
  },
  {
    id: '2',
    name: 'Umroh VIP Premium',
    price: '35.900.000',
    duration: '12 Hari',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    features: ['Pesawat Business Class', 'Hotel Bintang 5 Depan Masjid', 'Buffet Menu Internasional', 'Kereta Cepat Haramain', 'Exclusive Lounge'],
    isPopular: true
  },
  {
    id: '3',
    name: 'Umroh Plus Turki',
    price: '42.000.000',
    duration: '15 Hari',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    features: ['City Tour Istanbul', 'Menginap di Cappadocia', 'Visa Umroh & Turki', 'Penerbangan Full Service', 'Guide Berpengalaman'],
    isPopular: false
  }
];

export const MOCK_BOOKINGS: BookingSubmission[] = [
  {
    id: 'B001',
    name: 'Budi Santoso',
    whatsapp: '081234567890',
    packageId: '2',
    packageName: 'Umroh VIP Premium',
    message: 'Tanya jadwal keberangkatan Oktober',
    date: '2024-05-20',
    status: 'Pending'
  },
  {
    id: 'B002',
    name: 'Siti Rahma',
    whatsapp: '085712341234',
    packageId: '1',
    packageName: 'Umroh Reguler Hemat',
    message: 'Daftar untuk 2 orang',
    date: '2024-05-19',
    status: 'Dihubungi'
  },
  {
    id: 'B003',
    name: 'Andi Wijaya',
    whatsapp: '081199887766',
    packageId: '3',
    packageName: 'Umroh Plus Turki',
    message: 'Cek ketersediaan visa Turki',
    date: '2024-05-18',
    status: 'Terdaftar'
  }
];

export const FACILITIES: Facility[] = [
  {
    title: 'Pembimbing Berpengalaman',
    description: 'Dibimbing oleh Ustadz ahli sunnah yang kompeten dan berpengalaman bertahun-tahun.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Hotel Dekat Masjid',
    description: 'Kenyamanan ibadah dengan jarak hotel yang sangat dekat dari Masjidil Haram & Nabawi.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Makanan Khas Indonesia',
    description: 'Penyajian makanan menu Indonesia 3x sehari agar kondisi fisik tetap prima.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Perlengkapan Eksklusif',
    description: 'Dapatkan koper, tas paspor, kain ihram/mukena, dan seragam batik premium.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Kapan waktu terbaik untuk mendaftar?',
    answer: 'Kami menyarankan pendaftaran dilakukan minimal 3 bulan sebelum jadwal keberangkatan untuk memastikan ketersediaan kuota dan pengurusan dokumen.'
  },
  {
    question: 'Apa saja dokumen yang diperlukan?',
    answer: 'Dokumen utama meliputi Paspor (minimal 2 kata nama), Kartu Kuning Meningitis, FC KTP & KK, serta pas foto terbaru.'
  },
  {
    question: 'Apakah harga sudah termasuk asuransi?',
    answer: 'Ya, seluruh paket kami sudah termasuk asuransi perjalanan dan perlindungan COVID-19 sesuai regulasi terbaru.'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran bisa dilakukan dengan DP minimal Rp 5.000.000 dan pelunasan paling lambat 1 bulan sebelum keberangkatan.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Bp. Ahmad Fauzi & Keluarga',
    quote: 'Pelayanan sangat luar biasa, hotel benar-benar di depan Masjidil Haram. Pembimbing sabar dan mengedukasi.',
    image: 'https://images.unsplash.com/photo-1582213726892-277173bd3dc5?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ibu Siti Aminah',
    quote: 'Alhamdulillah, Umroh pertama saya terasa sangat tenang. Makanan Indonesianya enak-enak, serasa di rumah.',
    image: 'https://images.unsplash.com/photo-1627662236973-4fda83581207?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: 't3',
    name: 'Bp. Hendra Kusuma',
    quote: 'Sangat profesional. Dari pendaftaran sampai pulang semua diurus dengan rapi. Sangat merekomendasikan Nurul Haramain.',
    image: 'https://images.unsplash.com/photo-1605664041952-4a2855d9363b?auto=format&fit=crop&q=80&w=800',
    rating: 5
  }
];
