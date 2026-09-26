import { Search, PlusCircle, Filter, FileText, CheckCircle2 } from 'lucide-react';
import { projects } from '../../data/projects';

export default function AdminProjects() {
  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      {/* Top Action & Intro Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C88238] font-bold bg-[#FAF7F2] border border-[#E8DFD5] px-2 py-0.5 rounded">CMS Portofolio</span>
            <span className="text-[#837466]">•</span>
            <span className="text-[11px] text-[#685E55]">Terakhir sinkronisasi 5 menit lalu</span>
          </div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Manajemen Proyek Portofolio</h1>
          <p className="text-[14px] text-[#685E55] max-w-2xl">
            Kelola semua proyek, studi kasus, dan artikel yang tampil di website portofolio Anda secara praktis tanpa coding.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-center">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
            <PlusCircle className="w-5 h-5" />
            <span>Tambah Proyek Baru</span>
          </button>
        </div>
      </div>

      {/* Filter & Utility Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div className="relative flex-1 min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cari judul proyek..." 
            className="w-full pl-10 pr-4 py-2 text-[#2C2520] bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] focus:bg-white focus:border-[#C88238] focus:outline-none transition-colors"
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg px-3 py-1">
            <span className="text-[11px] text-[#685E55] pr-2">Kategori:</span>
            <select className="bg-transparent text-[#2C2520] text-[13px] font-semibold focus:outline-none cursor-pointer py-1">
              <option value="all">Semua Kategori</option>
              <option value="Security">Cyber Security</option>
              <option value="Web">Web Development</option>
            </select>
          </div>
          <div className="relative flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg px-3 py-1">
            <span className="text-[11px] text-[#685E55] pr-2">Status:</span>
            <select className="bg-transparent text-[#2C2520] text-[13px] font-semibold focus:outline-none cursor-pointer py-1">
              <option value="all">Semua Status</option>
              <option value="Tayang">Tayang</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid List */}
      <div className="bg-white border border-[#E8DFD5] rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFD5]">
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider">Judul & Detail</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Kategori / Topik</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EAE1]">
              {projects.map(proj => (
                <tr key={proj.id} className="hover:bg-[#FAF4EE]/60 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {proj.image ? (
                        <img src={proj.image} alt={proj.title} className="w-14 h-14 rounded-lg object-cover bg-[#FAF4EE] border border-[#E8DFD5]" />
                      ) : (
                        <div className="w-14 h-14 rounded-lg bg-[#FAF4EE] border border-[#E8DFD5] flex items-center justify-center text-[#685E55]">
                          <FileText className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <div className="text-[14px] text-[#2C2520] font-bold">{proj.title}</div>
                        <div className="text-[12px] text-[#685E55] mt-0.5">{proj.codename} • {proj.year}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EE] border border-[#A7D7B5] text-[#227236] text-[11px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Tayang</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col items-end gap-1">
                      {proj.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="inline-block px-2.5 py-0.5 rounded-md bg-[#FAF4EE] border border-[#E8DFD5] text-[11px] font-medium text-[#685E55]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 rounded-lg bg-white hover:bg-[#F2EAE1] text-[#2C2520] border border-[#E8DFD5] text-[12px] font-bold transition-colors shadow-sm">
                      Edit Proyek
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
