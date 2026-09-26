import { MessageSquare, ArrowRight, Trash2, MailOpen, Mail } from 'lucide-react';

export default function AdminMessages() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Pesan Masuk</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola dan balas pesan, feedback, serta tawaran dari pengunjung website.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E8DFD5] rounded-xl shadow-sm p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#FAF4EE] text-[#C88238] flex items-center justify-center mb-4">
          <MessageSquare className="w-8 h-8" />
        </div>
        <h2 className="text-[18px] font-bold text-[#2C2520]">Halaman Pesan Sedang Dalam Pengembangan</h2>
        <p className="text-[14px] text-[#685E55] mt-2 max-w-md">
          Modul ini akan diaktifkan setelah sistem backend selesai. Anda akan dapat melihat dan membalas pesan secara realtime di sini.
        </p>
      </div>
    </div>
  );
}
