import { Award, PlusCircle, Trash2 } from 'lucide-react';
import { achievements } from '../../data/achievements';

export default function AdminAchievements() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Sertifikasi & Prestasi</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola penghargaan, kemenangan CTF, sertifikat keamanan, dan rekam jejak publik Anda.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Item</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {achievements.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <button className="px-3 py-1.5 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
              <button className="p-1.5 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]"><Trash2 className="w-4 h-4" /></button>
            </div>
            
            <div className="w-full md:w-1/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Prestasi / Sertifikasi</label>
                <input type="text" defaultValue={item.title} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori Tipe</label>
                <select defaultValue={item.type} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]">
                  <option value="competition">Kompetisi (Competition)</option>
                  <option value="certification">Sertifikasi Profesional</option>
                  <option value="recognition">Penghargaan Publik (Recognition)</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Deskripsi Lengkap</label>
                <textarea rows="3" defaultValue={item.desc} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tahun</label>
                  <input type="text" defaultValue={item.year} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
                <div className="w-1/2">
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Lokasi / Penyelenggara</label>
                  <input type="text" defaultValue={item.organization} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
