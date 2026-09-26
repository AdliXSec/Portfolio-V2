import { Phone, Save, Briefcase, FileText } from 'lucide-react';
import { contactData } from '../../data/contact';

export default function AdminContact() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Kontak & Layanan</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Atur teks promosi layanan (Dispatch) dan form kontak pada portofolio Anda.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all self-start md:self-center">
          <Save className="w-4 h-4" />
          <span>Simpan Perubahan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Node (Card) Info */}
        <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
          <div className="border-b border-[#F0EAE1] pb-4 mb-2">
            <h2 className="text-[16px] font-bold text-[#2C2520] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C88238]" />
              Kartu Kontak (Bagian Bawah Web)
            </h2>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Label Kategori (Overline)</label>
            <input type="text" defaultValue={contactData.cardOverline} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Kartu</label>
            <input type="text" defaultValue={contactData.cardTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Deskripsi Singkat</label>
            <textarea rows="3" defaultValue={contactData.cardDescription} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Teks Tombol Aksi</label>
            <input type="text" defaultValue={contactData.cardButtonText} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>

        {/* Dispatch Detail Modal Info */}
        <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
          <div className="border-b border-[#F0EAE1] pb-4 mb-2">
            <h2 className="text-[16px] font-bold text-[#2C2520] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#C88238]" />
              Detail Penawaran Layanan (Modal Dispatch)
            </h2>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tag Layanan</label>
            <input type="text" defaultValue={contactData.modalTag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Penawaran Utama</label>
            <input type="text" defaultValue={contactData.modalTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan Penawaran (Quote)</label>
            <textarea rows="2" defaultValue={contactData.modalQuote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] font-serif italic focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Pengantar Layanan (Description)</label>
            <input type="text" defaultValue={contactData.modalDescription} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Daftar Layanan Tersedia (Pisahkan dengan baris baru)</label>
            <textarea rows="4" defaultValue={contactData.modalServices.join('\n')} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
