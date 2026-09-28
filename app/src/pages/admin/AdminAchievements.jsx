import { useState } from 'react';
import { Award, PlusCircle, Trash2, Link, Upload } from 'lucide-react';
import { achievements, achievementsModal } from '../../data/achievements';
import LivePreviewWrapper from './LivePreviewWrapper';
import AchievementsSection from '../../components/AchievementsSection';


export default function AdminAchievements() {
  const [achvList, setAchvList] = useState(achievements || []);

  const addAchievement = () => {
    setAchvList([...achvList, { title: '', type: 'competition', year: '', organization: '', image: '' }]);
  };
  const removeAchievement = (idx) => {
    setAchvList(achvList.filter((_, i) => i !== idx));
  };
  const updateAchievement = (idx, updated) => {
    const newList = [...achvList];
    newList[idx] = updated;
    setAchvList(newList);
  };


  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Sertifikasi & Prestasi</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola penghargaan, kemenangan CTF, sertifikat keamanan, dan rekam jejak publik Anda.
          </p>
        </div>
        <button onClick={addAchievement} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Item</span>
        </button>
      </div>

      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Sertifikasi & Prestasi">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <AchievementsSection id="node-achievements-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>

            {/* Modal Header Configuration */}
      <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm mb-2">
        <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Header Modal (Tampil saat node diklik)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi (Ref)</label>
            <input type="text" defaultValue={achievementsModal.ref} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori / Tag</label>
            <input type="text" defaultValue={achievementsModal.tag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Modal (Title)</label>
            <input type="text" defaultValue={achievementsModal.title} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan (Quote)</label>
            <input type="text" defaultValue={achievementsModal.quote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {achvList.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <button className="px-3 py-1.5 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
              <button onClick={() => removeAchievement(index)} className="p-1.5 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]"><Trash2 className="w-4 h-4" /></button>
            </div>
            
            <div className="w-full md:w-1/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Prestasi / Sertifikasi</label>
                <input type="text" value={item.title} onChange={(e) => updateAchievement(index, {...item, title: e.target.value})} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori Tipe</label>
                <select value={item.type} onChange={(e) => updateAchievement(index, {...item, type: e.target.value})} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]">
                  <option value="competition">Kompetisi (Competition)</option>
                  <option value="certification">Sertifikasi Profesional</option>
                  <option value="recognition">Penghargaan Publik (Recognition)</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tahun</label>
                  <input type="text" value={item.year} onChange={(e) => updateAchievement(index, {...item, year: e.target.value})} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
                <div className="w-1/2">
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Penyelenggara</label>
                  <input type="text" value={item.organization} onChange={(e) => updateAchievement(index, {...item, organization: e.target.value})} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Foto / Sertifikat / Bukti</label>
                <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg p-2 gap-3 mb-2">
                  {item.image ? (
                    <img src={item.image} alt="preview" className="w-12 h-12 rounded object-cover shrink-0 border border-[#E8DFD5]" />
                  ) : (
                    <div className="w-12 h-12 rounded bg-[#E8DFD5] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#837466]" />
                    </div>
                  )}
                  <input 
                    type="text" 
                    value={item.image?.startsWith('data:image') ? 'Base64 Encoded Image Data...' : (item.image || '')} 
                    onChange={(e) => updateAchievement(index, {...item, image: e.target.value})}
                    disabled={item.image?.startsWith('data:image')}
                    className={`w-full bg-transparent text-[13px] focus:outline-none ${item.image?.startsWith('data:image') ? 'text-[#837466] italic' : 'text-[#2C2520]'}`} 
                    placeholder="Masukkan URL Foto (https://...)"
                  />
                  {item.image && (
                    <button onClick={() => updateAchievement(index, {...item, image: ''})} className="p-1.5 rounded text-[#D32F2F] hover:bg-[#FFF0F0] shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <label className="w-full py-2 flex items-center justify-center gap-2 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors cursor-pointer">
                    <Upload className="w-4 h-4" /> Upload File Foto Baru
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          updateAchievement(index, {...item, image: reader.result});
                        };
                        reader.readAsDataURL(file);
                      }
                    }} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
