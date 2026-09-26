import { Eye, Download, MessageSquare, Briefcase, ArrowUp, TrendingUp, TrendingDown, Calendar, Plus, ArrowRight, ChevronRight, Lightbulb } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col w-full py-6">
      {/* Top Greeting & Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-[28px] font-bold text-[#2C2520] tracking-tight">Halo, Naufal!</h1>
            <span className="text-[28px] select-none">👋</span>
          </div>
          <p className="text-[14px] text-[#685E55] mt-0.5">Berikut ringkasan performa portofolio Anda bulan ini.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-[#FFFFFF] border border-[#E8DFD5] text-[#2C2520] text-[13px] font-medium hover:bg-[#FAF4EE] transition-all shadow-sm">
            <Calendar className="w-4 h-4 text-[#685E55]" />
            <span>Maret 2025</span>
          </button>
          <button className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm hover:shadow active:scale-95 transition-all">
            <Plus className="w-5 h-5" />
            <span>Tambah Proyek Baru</span>
          </button>
        </div>
      </div>

      {/* 4 Key Stat Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Stat 1 */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-[#D6C3B3] transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] text-[#685E55] font-medium">Total Pengunjung</span>
            <div className="w-9 h-9 rounded-lg bg-[#FAF4EE] text-[#C88238] flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#2C2520] tracking-tight leading-none mb-2">12.450</div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF5EE] text-[#227236] text-[11px] font-semibold">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>+12% dari bulan lalu</span>
            </div>
          </div>
        </div>
        
        {/* Stat 2 */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-[#D6C3B3] transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] text-[#685E55] font-medium">CV Diunduh</span>
            <div className="w-9 h-9 rounded-lg bg-[#FAF4EE] text-[#C88238] flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#2C2520] tracking-tight leading-none mb-2">
              340 <span className="text-[15px] font-normal text-[#685E55]">kali</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF5EE] text-[#227236] text-[11px] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+8% peningkatan</span>
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-[#D6C3B3] transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] text-[#685E55] font-medium">Pesan Masuk</span>
            <div className="w-9 h-9 rounded-lg bg-[#FAF4EE] text-[#C88238] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#2C2520] tracking-tight leading-none mb-2">18</div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF4EE] text-[#685E55] text-[11px] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Stabil</span>
            </div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-[#D6C3B3] transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] text-[#685E55] font-medium">Proyek Aktif</span>
            <div className="w-9 h-9 rounded-lg bg-[#FAF4EE] text-[#C88238] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#2C2520] tracking-tight leading-none mb-2">4</div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF4EE] text-[#685E55] text-[11px] font-semibold">
              <span>Sesuai target</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Table and Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Projects Table */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-6 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-bold text-[#2C2520]">Proyek Teratas</h2>
                <p className="text-[13px] text-[#685E55]">Berdasarkan jumlah tayangan bulan ini</p>
              </div>
              <button className="text-[13px] font-semibold text-[#C88238] hover:text-[#B86F28] transition-colors">
                Lihat Semua Proyek
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#F0EAE1]">
                    <th className="pb-3 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider">Nama Proyek</th>
                    <th className="pb-3 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-center">Kategori</th>
                    <th className="pb-3 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Tayangan</th>
                    <th className="pb-3 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EAE1]">
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="hover:bg-[#FAF4EE]/60 transition-colors">
                      <td className="py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-[#FAF4EE] border border-[#E8DFD5]"></div>
                          <div>
                            <div className="text-[14px] text-[#2C2520] font-semibold">Cyber Security Platform</div>
                            <div className="text-[12px] text-[#685E55]">Full-stack implementation</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF4EE] border border-[#E8DFD5] text-[11px] font-medium text-[#685E55]">Backend</span>
                      </td>
                      <td className="py-3.5 text-right">
                        <span className="text-[14px] font-bold text-[#2C2520]">4,520</span>
                        <span className="text-[11px] text-[#685E55] block">kali</span>
                      </td>
                      <td className="py-3.5 text-right">
                        <button className="px-3 py-1.5 rounded-lg bg-[#FAF4EE] hover:bg-[#F2EAE1] text-[#2C2520] border border-[#E8DFD5] text-[12px] font-medium transition-colors">
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

        {/* Right Column - Inquiries & Tips */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Recent Inquiries */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD5] rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-[18px] font-bold text-[#2C2520]">Pesan Masuk Terbaru</h2>
                <p className="text-[13px] text-[#685E55]">Dari calon klien</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#C88238]"></span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-3.5 rounded-lg bg-[#FAF4EE] border border-[#E8DFD5]/70 hover:border-[#D6C3B3] transition-colors">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <div>
                    <span className="text-[13px] text-[#2C2520] font-bold">Dimas Pratama</span>
                    <span className="text-[11px] text-[#685E55] block">PT Cyber Nusantara</span>
                  </div>
                  <span className="text-[11px] text-[#C88238] font-semibold">2 jam lalu</span>
                </div>
                <p className="text-[13px] text-[#2C2520] line-clamp-2 mb-2 leading-relaxed">
                  "Halo Naufal, kami tertarik dengan jasa pentesting Anda. Apakah bisa meeting besok?"
                </p>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-1 text-[12px] text-[#C88238] font-bold hover:underline">
                    <span>Balas Pesan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              
              <div className="p-3.5 rounded-lg border border-transparent hover:bg-[#FAF4EE]/70 transition-colors">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <div>
                    <span className="text-[13px] text-[#2C2520] font-bold">Budi Santoso</span>
                    <span className="text-[11px] text-[#685E55] block">budi@techin.id</span>
                  </div>
                  <span className="text-[11px] text-[#685E55]">Kemarin</span>
                </div>
                <p className="text-[13px] text-[#685E55] line-clamp-2 mb-2 leading-relaxed">
                  "Terima kasih atas respons cepatnya Mas. Proposal kerjasama sudah kami terima."
                </p>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-1 text-[12px] text-[#685E55] hover:text-[#2C2520] transition-colors">
                    <span>Lihat Detail</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 py-2 rounded-lg bg-[#FAF4EE] border border-[#E8DFD5] text-[#2C2520] text-[13px] font-semibold hover:bg-[#F2EAE1] transition-colors text-center">
              Buka Kotak Masuk (18)
            </button>
          </div>

          {/* Quick Tip */}
          <div className="bg-gradient-to-br from-[#FAF4EE] to-[#F2EAE1] border border-[#E8DFD5] rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C88238] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#865305] uppercase tracking-wider">Tips Cepat Admin</span>
                <p className="text-[13px] text-[#2C2520] mt-1 leading-relaxed">
                  Selalu update <strong className="text-[#2C2520]">status sertifikasi</strong> terbaru Anda untuk menarik <span className="text-[#C88238] font-bold">40% lebih banyak klik</span> dari recruiter.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
