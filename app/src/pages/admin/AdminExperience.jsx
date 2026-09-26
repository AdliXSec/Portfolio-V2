import { Briefcase, PlusCircle, Calendar, MapPin, Building2, Trash2 } from 'lucide-react';
import { experiences as experience } from '../../data/experience';

export default function AdminExperience() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Pengalaman Kerja</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola rekam jejak karir dan pengalaman profesional Anda.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Pengalaman</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {experience.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <button className="px-3 py-1.5 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
              <button className="p-1.5 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]"><Trash2 className="w-4 h-4" /></button>
            </div>
            
            <div className="w-full md:w-1/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Peran / Jabatan</label>
                <input type="text" defaultValue={exp.role} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Perusahaan</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="text" defaultValue={exp.company} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tahun</label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                    <input type="text" defaultValue={exp.period} className="w-full pl-8 pr-2 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Lokasi</label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                    <input type="text" defaultValue={exp.location} className="w-full pl-8 pr-2 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Warna Aksen (Tema)</label>
                <select defaultValue={exp.color} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]">
                  <option value="error">Merah (Error)</option>
                  <option value="primary">Oranye (Primary)</option>
                  <option value="secondary">Hijau (Secondary)</option>
                  <option value="tertiary">Biru (Tertiary)</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Deskripsi Singkat (Card)</label>
                <textarea rows="2" defaultValue={exp.description} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tags / Skill</label>
                <input type="text" defaultValue={exp.tags ? exp.tags.join(', ') : ''} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="Misal: Python, AWS, eBPF" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
