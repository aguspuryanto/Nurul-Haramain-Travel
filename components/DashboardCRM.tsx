
import React from 'react';
import { BookingSubmission, BookingStatus } from '../types';

interface Props {
  bookings: BookingSubmission[];
  onUpdateStatus: (id: string, status: BookingStatus) => void;
}

const DashboardCRM: React.FC<Props> = ({ bookings, onUpdateStatus }) => {
  const stats = {
    total: bookings.length,
    contacted: bookings.filter(b => b.status === 'Dihubungi').length,
    registered: bookings.filter(b => b.status === 'Terdaftar').length,
    cancelled: bookings.filter(b => b.status === 'Batal').length,
  };

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'Terdaftar': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Dihubungi': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Batal': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Manajemen Pendaftar (CRM)</h2>
        <p className="text-gray-500">Update terakhir: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Pendaftar', value: stats.total, icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-blue-50 text-blue-600' },
          { label: 'Dihubungi', value: stats.contacted, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', color: 'bg-amber-50 text-amber-600' },
          { label: 'Resmi Daftar', value: stats.registered, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Batal', value: stats.cancelled, icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-red-50 text-red-600' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{item.label}</p>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Pelanggan</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Paket</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400 italic">Belum ada pendaftar masuk.</td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800">{booking.name}</span>
                        <span className="text-sm text-gray-500">{booking.whatsapp}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      {booking.packageName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(booking.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <select 
                          className="bg-white border border-gray-200 rounded-lg text-xs p-1 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                          value={booking.status}
                          onChange={(e) => onUpdateStatus(booking.id, e.target.value as BookingStatus)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Dihubungi">Dihubungi</option>
                          <option value="Terdaftar">Terdaftar</option>
                          <option value="Batal">Batal</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCRM;
