import { useState } from 'react';
import { Phone, Save, Briefcase, FileText, PlusCircle, Trash2 } from 'lucide-react';
import { contactData as initialContactData } from '../../data/contact';

export default function AdminContact() {
  const [services, setServices] = useState(initialContactData.modalServices || []);

  const addService = () => setServices([...services, '']);
  const updateService = (index, value) => {
    const newServices = [...services];
    newServices[index] = value;
    setServices(newServices);
  };
  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
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
            <input type="text" defaultValue={initialContactData.cardOverline} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Kartu</label>
            <input type="text" defaultValue={initialContactData.cardTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Deskripsi Singkat</label>
            <textarea rows="3" defaultValue={initialContactData.cardDescription} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Teks Tombol Aksi</label>
            <input type="text" defaultValue={initialContactData.cardButtonText} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
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
            <input type="text" defaultValue={initialContactData.modalTag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Penawaran Utama</label>
            <input type="text" defaultValue={initialContactData.modalTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan Penawaran (Quote)</label>
            <textarea rows="2" defaultValue={initialContactData.modalQuote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] font-serif italic focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Pengantar Layanan (Description)</label>
            <textarea rows="3" defaultValue={initialContactData.modalDescription} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div className="pt-2 border-t border-[#F0EAE1]">
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-2">Daftar Layanan Tersedia (Services)</label>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, i) => (
                <div key={i} className="relative group">
                  <div className="flex items-center w-full bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-4 pr-1 py-1">
                    <input 
                      type="text" 
                      value={service} 
                      onChange={(e) => updateService(i, e.target.value)}
                      className="w-full bg-transparent text-[12px] font-bold text-[#2C2520] focus:outline-none"
                      placeholder="Nama layanan (contoh: Red Teaming)"
                    />
                    <button onClick={() => removeService(i)} className="p-1.5 rounded-full text-[#D32F2F] hover:bg-[#FFF0F0] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button onClick={addService} className="w-full py-2 flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-full hover:bg-[#FAF4EE] transition-colors">
                <PlusCircle className="w-4 h-4" /> Tambah Layanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
