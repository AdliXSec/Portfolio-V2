import { Code2, PlusCircle, Trash2 } from 'lucide-react';
import { techCategories as techStack } from '../../data/techstack';

export default function AdminTechStack() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Tech Stack & Tools</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola daftar bahasa pemrograman, framework, dan perangkat keras yang Anda kuasai.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Kategori</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {techStack.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm relative group">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <button className="px-3 py-1 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
              <button className="p-1 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]"><Trash2 className="w-4 h-4" /></button>
            </div>
            
            <div className="mb-4 pr-24">
              <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nama Kategori</label>
              <input type="text" defaultValue={category.category} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
            </div>
            
            <div>
              <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Item (Pisahkan dengan koma)</label>
              <textarea rows="4" defaultValue={category.items.join(', ')} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
            </div>
            
            <div className="mt-4">
              <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Icon (Nama Icon Lucide)</label>
              <input type="text" defaultValue={category.icon} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
