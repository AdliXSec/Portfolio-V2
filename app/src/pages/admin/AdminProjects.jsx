import { useState } from 'react';
import { Search, PlusCircle, Filter, FileText, CheckCircle2, XCircle, ArrowLeft, Save, Trash2, Link, Upload, Code2 } from 'lucide-react';
import { projects } from '../../data/projects';

export default function AdminProjects() {
  const [projectList, setProjectList] = useState(projects.map(p => ({...p, status: 'Tayang'})));
  const [editingProject, setEditingProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleStatus = (idx) => {
    const newList = [...projectList];
    newList[idx].status = newList[idx].status === 'Tayang' ? 'Draft' : 'Tayang';
    setProjectList(newList);
  };

  const openNewForm = () => {
    setEditingProject({
      id: '',
      caseNumber: '',
      label: '',
      codename: '',
      title: '',
      description: '',
      color: 'primary',
      techStack: [],
      stats: {},
      github: '',
      image: '',
      target: '',
      stickyNote: '',
      codeSnippet: { filename: '', code: '' }
    });
    setIsEditing(true);
  };

  const openEditForm = (proj, idx) => {
    setEditingProject({ ...proj, originalIndex: idx });
    setIsEditing(true);
  };

  const closeForm = () => {
    setIsEditing(false);
    setEditingProject(null);
  };

  const handleSave = () => {
    const newList = [...projectList];
    const { originalIndex, ...projectData } = editingProject;
    
    if (originalIndex !== undefined) {
      newList[originalIndex] = projectData;
    } else {
      projectData.status = 'Tayang'; // default
      newList.push(projectData);
    }
    
    setProjectList(newList);
    closeForm();
  };

  const handleFieldChange = (field, value) => {
    setEditingProject({ ...editingProject, [field]: value });
  };

  const handleTechStackChange = (idx, value) => {
    const newStack = [...(editingProject.techStack || [])];
    newStack[idx] = value;
    handleFieldChange('techStack', newStack);
  };

  const addTechStack = () => {
    handleFieldChange('techStack', [...(editingProject.techStack || []), '']);
  };

  const removeTechStack = (idx) => {
    const newStack = [...(editingProject.techStack || [])];
    newStack.splice(idx, 1);
    handleFieldChange('techStack', newStack);
  };

  const handleStatChange = (oldKey, newKey, value) => {
    const newStats = { ...(editingProject.stats || {}) };
    if (oldKey !== newKey) {
      delete newStats[oldKey];
    }
    newStats[newKey] = value;
    handleFieldChange('stats', newStats);
  };

  const addStat = () => {
    const newStats = { ...(editingProject.stats || {}) };
    newStats['NewStat' + Date.now().toString().slice(-4)] = '';
    handleFieldChange('stats', newStats);
  };

  const removeStat = (key) => {
    const newStats = { ...(editingProject.stats || {}) };
    delete newStats[key];
    handleFieldChange('stats', newStats);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => handleFieldChange('image', reader.result);
      reader.readAsDataURL(file);
    }
  };

  if (isEditing && editingProject) {
    const statsEntries = Object.entries(editingProject.stats || {});
    return (
      <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={closeForm} className="p-2 rounded-full hover:bg-[#FAF4EE] text-[#685E55] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-[20px] font-bold text-[#2C2520] tracking-tight">{editingProject.originalIndex !== undefined ? 'Edit Proyek' : 'Tambah Proyek Baru'}</h1>
              <p className="text-[13px] text-[#685E55] mt-0.5">Lengkapi form berikut untuk mempublikasikan studi kasus Anda.</p>
            </div>
          </div>
          <button onClick={handleSave} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
            <Save className="w-4 h-4" />
            <span>Simpan Proyek</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kolom Kiri - Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Informasi Utama</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">ID (Unik, huruf kecil)</label>
                  <input type="text" value={editingProject.id} onChange={(e) => handleFieldChange('id', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: sentinel" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nomor Kasus (Case Number)</label>
                  <input type="text" value={editingProject.caseNumber} onChange={(e) => handleFieldChange('caseNumber', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: 01" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Codename (Header Modal)</label>
                  <input type="text" value={editingProject.codename} onChange={(e) => handleFieldChange('codename', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: PROJECT OBSIDIAN" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Label Kategori</label>
                  <input type="text" value={editingProject.label} onChange={(e) => handleFieldChange('label', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: KERNEL HARNESS" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Proyek</label>
                <input type="text" value={editingProject.title} onChange={(e) => handleFieldChange('title', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Deskripsi / Abstrak</label>
                <textarea rows="4" value={editingProject.description} onChange={(e) => handleFieldChange('description', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Media & Tautan Tambahan</h2>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Foto Sampul (Cover Image)</label>
                <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg p-2 gap-3 mb-2">
                  {editingProject.image ? (
                    <img src={editingProject.image} alt="preview" className="w-12 h-12 rounded object-cover shrink-0 border border-[#E8DFD5]" />
                  ) : (
                    <div className="w-12 h-12 rounded bg-[#E8DFD5] flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-[#837466]" /></div>
                  )}
                  <input type="text" value={editingProject.image?.startsWith('data:image') ? 'Base64 Encoded Image Data...' : (editingProject.image || '')} onChange={(e) => handleFieldChange('image', e.target.value)} disabled={editingProject.image?.startsWith('data:image')} className={`w-full bg-transparent text-[13px] focus:outline-none ${editingProject.image?.startsWith('data:image') ? 'text-[#837466] italic' : 'text-[#2C2520]'}`} placeholder="Masukkan URL Foto (https://...)" />
                  {editingProject.image && (
                    <button onClick={() => handleFieldChange('image', '')} className="p-1.5 rounded text-[#D32F2F] hover:bg-[#FFF0F0] shrink-0"><Trash2 className="w-4 h-4" /></button>
                  )}
                </div>
                <label className="w-full py-2 flex items-center justify-center gap-2 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors cursor-pointer">
                  <Upload className="w-4 h-4" /> Upload File Foto Baru
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>
              <div className="pt-4">
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tautan GitHub (Opsional)</label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="text" value={editingProject.github || ''} onChange={(e) => handleFieldChange('github', e.target.value)} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="https://github.com/..." />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2 flex items-center gap-2"><Code2 className="w-4 h-4" /> Code Snippet (Opsional)</h2>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nama File</label>
                <input type="text" value={editingProject.codeSnippet?.filename || ''} onChange={(e) => handleFieldChange('codeSnippet', {...editingProject.codeSnippet, filename: e.target.value})} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: kprobe.c" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kode Sumber</label>
                <textarea rows="5" value={editingProject.codeSnippet?.code || ''} onChange={(e) => handleFieldChange('codeSnippet', {...editingProject.codeSnippet, code: e.target.value})} className="w-full px-3 py-2 bg-[#233143] border border-[#39485A] rounded-lg text-[12px] font-mono text-[#A4C2E6] focus:outline-none focus:border-[#C88238] resize-none" placeholder="Tulis kode di sini..."></textarea>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Tech Stack, Stats, Notes */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Karakteristik</h2>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Warna Tema (Aksen)</label>
                <select value={editingProject.color} onChange={(e) => handleFieldChange('color', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]">
                  <option value="primary">Oranye (Primary)</option>
                  <option value="secondary">Hijau (Secondary)</option>
                  <option value="tertiary">Biru (Tertiary)</option>
                  <option value="error">Merah (Error)</option>
                </select>
              </div>
              <div className="pt-2">
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tech Stack (Alat/Bahasa)</label>
                <div className="flex flex-wrap gap-2">
                  {(editingProject.techStack || []).map((t, idx) => (
                    <div key={idx} className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-3 pr-1 py-1">
                      <input type="text" value={t} onChange={(e) => handleTechStackChange(idx, e.target.value)} className="bg-transparent text-[12px] font-bold text-[#2C2520] focus:outline-none min-w-[50px] w-auto max-w-[80px]" placeholder="Stack" />
                      <button onClick={() => removeTechStack(idx)} className="p-1 rounded-full text-[#D32F2F] hover:bg-[#FFF0F0] shrink-0"><Trash2 className="w-3 h-3" /></button>
                    </div>
                  ))}
                  <button onClick={addTechStack} className="px-3 py-1 flex items-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-full text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors"><PlusCircle className="w-3 h-3" /> Tambah</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Statistik & Metrik</h2>
              <div className="space-y-3">
                {statsEntries.map(([key, val]) => (
                  <div key={key} className="flex items-center gap-2 relative group">
                    <div className="w-full grid grid-cols-2 gap-2">
                      <input type="text" value={key} onChange={(e) => handleStatChange(key, e.target.value, val)} className="w-full px-2 py-1.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-md text-[11px] uppercase font-bold text-[#685E55] focus:outline-none focus:border-[#C88238]" placeholder="Kunci (contoh: overhead)" />
                      <input type="text" value={val} onChange={(e) => handleStatChange(key, key, e.target.value)} className="w-full px-2 py-1.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-md text-[12px] text-[#2C2520] font-bold focus:outline-none focus:border-[#C88238]" placeholder="Nilai (contoh: <1.2%)" />
                    </div>
                    <button onClick={() => removeStat(key)} className="p-1.5 text-[#D32F2F] hover:bg-[#FFF0F0] rounded shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
                {statsEntries.length === 0 && <div className="text-[12px] text-[#837466] italic text-center py-2">Belum ada metrik.</div>}
                <button onClick={addStat} className="w-full py-1.5 mt-2 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                  <PlusCircle className="w-4 h-4" /> Tambah Metrik
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-4">
              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Ekstra (Opsional)</h2>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Target Serangan / Keterangan</label>
                <input type="text" value={editingProject.target || ''} onChange={(e) => handleFieldChange('target', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" placeholder="contoh: TARGET: MODBUS/TCP" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Sticky Note (Kutipan Khusus)</label>
                <textarea rows="3" value={editingProject.stickyNote || ''} onChange={(e) => handleFieldChange('stickyNote', e.target.value)} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none" placeholder="Tulis catatan..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- List View ---
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
          <button onClick={openNewForm} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
            <PlusCircle className="w-5 h-5" />
            <span>Tambah Proyek Baru</span>
          </button>
        </div>
      </div>

      {/* Filter & Utility Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div className="relative flex-1 min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-5 h-5" />
          <input type="text" placeholder="Cari judul proyek..." className="w-full pl-10 pr-4 py-2 text-[#2C2520] bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] focus:bg-white focus:border-[#C88238] focus:outline-none transition-colors" />
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
              {projectList.map((proj, idx) => (
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
                        <div className="text-[12px] text-[#685E55] mt-0.5">{proj.codename} • {proj.caseNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => toggleStatus(idx)}
                      className={`relative inline-flex items-center w-[90px] h-8 rounded-full border transition-all overflow-hidden ${
                        proj.status === 'Tayang' 
                          ? 'bg-[#EBF5EE] border-[#A7D7B5]' 
                          : 'bg-[#FAF4EE] border-[#E8DFD5]'
                      }`}
                    >
                      <span className={`absolute left-2 text-[10px] font-bold uppercase tracking-wider transition-opacity ${
                        proj.status === 'Tayang' ? 'opacity-100 text-[#227236]' : 'opacity-0'
                      }`}>Tayang</span>
                      <span className={`absolute right-3 text-[10px] font-bold uppercase tracking-wider transition-opacity ${
                        proj.status === 'Draft' ? 'opacity-100 text-[#837466]' : 'opacity-0'
                      }`}>Draft</span>
                      <div className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full shadow-sm transition-all duration-300 ${
                        proj.status === 'Tayang' ? 'left-[62px] bg-[#227236] text-white' : 'left-1 bg-[#685E55] text-white'
                      }`}>
                        {proj.status === 'Tayang' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col items-end gap-1">
                      {proj.techStack && proj.techStack.slice(0, 2).map((t, i) => (
                        <span key={i} className="inline-block px-2.5 py-0.5 rounded-md bg-[#FAF4EE] border border-[#E8DFD5] text-[11px] font-medium text-[#685E55]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => openEditForm(proj, idx)} className="px-4 py-2 rounded-lg bg-white hover:bg-[#F2EAE1] text-[#2C2520] border border-[#E8DFD5] text-[12px] font-bold transition-colors shadow-sm">
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
