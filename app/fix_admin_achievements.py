import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminAchievements.jsx', 'r') as f:
    content = f.read()

# Make the component use state
hook_imports = "import { useState } from 'react';\nimport { Award, PlusCircle, Trash2, Link, Upload } from 'lucide-react';"
content = re.sub(r"import { Award, PlusCircle, Trash2 } from 'lucide-react';", hook_imports, content)

state_declaration = """export default function AdminAchievements() {
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
"""
content = re.sub(r"export default function AdminAchievements\(\) {", state_declaration, content)

# Change map variables
content = content.replace("achievements.map((item, index) => (", "achvList.map((item, index) => (")
content = content.replace('onClick={addExperience}', 'onClick={addAchievement}')
# Wait, the button onClick wasn't added yet, let me fix the add button
content = content.replace('<button className="inline-flex items-center', '<button onClick={addAchievement} className="inline-flex items-center')

# Replace the card render
old_card = """          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
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
          </div>"""

new_card = """          <div key={index} className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
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
          </div>"""

content = content.replace(old_card, new_card)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminAchievements.jsx', 'w') as f:
    f.write(content)

