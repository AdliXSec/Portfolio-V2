import { useState } from 'react';
import { Briefcase, PlusCircle, Calendar, MapPin, Building2, Trash2 } from 'lucide-react';
import { experiences as initialExperiences, experienceModal } from '../../data/experience';

function ExperienceCard({ exp, onRemove, onUpdate }) {
  const [tags, setTags] = useState(exp.tags || []);

  const addTag = () => setTags([...tags, '']);
  const updateTag = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
    onUpdate({ ...exp, tags: newTags });
  };
  const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onUpdate({ ...exp, tags: newTags });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col md:flex-row gap-6 relative group">
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button className="px-3 py-1.5 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
        <button onClick={onRemove} className="p-1.5 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]">
          <Trash2 className="w-4 h-4" />
        </button>
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
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <div key={i} className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-3 pr-1 py-1">
                <input 
                  type="text" 
                  value={tag} 
                  onChange={(e) => updateTag(i, e.target.value)}
                  className="bg-transparent text-[12px] font-bold text-[#2C2520] focus:outline-none min-w-[60px]" 
                  placeholder="Nama Tag"
                />
                <button onClick={() => removeTag(i)} className="p-1 rounded-full text-[#D32F2F] hover:bg-[#FFF0F0]">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button onClick={addTag} className="px-3 py-1 flex items-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-full text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
              <PlusCircle className="w-3 h-3" /> Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminExperience() {

  const [experiences, setExperiences] = useState(initialExperiences || []);

  const addExperience = () => {
    setExperiences([...experiences, {
      role: '', company: '', period: '', location: '', color: 'primary', description: '', tags: []
    }]);
  };

  const removeExperience = (idx) => {
    setExperiences(experiences.filter((_, i) => i !== idx));
  };

  const updateExperience = (idx, updatedExp) => {
    const newExps = [...experiences];
    newExps[idx] = updatedExp;
    setExperiences(newExps);
  };

  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Pengalaman Kerja</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola rekam jejak karir dan pengalaman profesional Anda.
          </p>
        </div>
        <button onClick={addExperience} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Pengalaman</span>
        </button>
      </div>

            {/* Modal Header Configuration */}
      <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm mb-2">
        <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Header Modal (Tampil saat node diklik)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi (Ref)</label>
            <input type="text" defaultValue={experienceModal.ref} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori / Tag</label>
            <input type="text" defaultValue={experienceModal.tag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Modal (Title)</label>
            <input type="text" defaultValue={experienceModal.title} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan (Quote)</label>
            <input type="text" defaultValue={experienceModal.quote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index} 
            exp={exp} 
            onRemove={() => removeExperience(index)}
            onUpdate={(updatedExp) => updateExperience(index, updatedExp)}
          />
        ))}
      </div>
    </div>
  );
}
