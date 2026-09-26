import { useState } from 'react';
import { Globe, User, Mail, MapPin, Save, Shield, Key, Terminal, AlignLeft, Hash, BarChart3, Crosshair, PlusCircle, Trash2, PenTool } from 'lucide-react';
import { profile } from '../../data/profile';

export default function AdminProfile() {
  // Local state for dynamic lists
  const [socials, setSocials] = useState(profile.socials || []);
  const [stats, setStats] = useState(profile.stats || []);
  const [extendedPhilosophy, setExtendedPhilosophy] = useState(profile.extendedPhilosophy || []);
  const [domains, setDomains] = useState(profile.domains || []);
  const [methodologyPillars, setMethodologyPillars] = useState(profile.methodologyPillars || []);
  const [philosophyInstruments, setPhilosophyInstruments] = useState(profile.philosophyInstruments || []);

  // Handlers for Socials
  const addSocial = () => setSocials([...socials, { platform: '', url: '', icon: '' }]);
  const removeSocial = (idx) => setSocials(socials.filter((_, i) => i !== idx));

  // Handlers for Stats
  const addStat = () => setStats([...stats, { label: '', value: '' }]);
  const removeStat = (idx) => setStats(stats.filter((_, i) => i !== idx));

  // Handlers for Extended Philosophy
  const addExtendedPhilosophy = () => setExtendedPhilosophy([...extendedPhilosophy, ""]);
  const removeExtendedPhilosophy = (idx) => setExtendedPhilosophy(extendedPhilosophy.filter((_, i) => i !== idx));

  // Handlers for Domains
  const addDomain = () => setDomains([...domains, { label: '', icon: '' }]);
  const removeDomain = (idx) => setDomains(domains.filter((_, i) => i !== idx));

  // Handlers for Methodology Pillars
  const addPillar = () => setMethodologyPillars([...methodologyPillars, ""]);
  const removePillar = (idx) => setMethodologyPillars(methodologyPillars.filter((_, i) => i !== idx));

  // Handlers for Philosophy Instruments
  const addInstrument = () => setPhilosophyInstruments([...philosophyInstruments, ""]);
  const removeInstrument = (idx) => setPhilosophyInstruments(philosophyInstruments.filter((_, i) => i !== idx));

  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Profil & Biodata</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Atur informasi pribadi, bio, sosial media, dan metodologi kerja Anda secara lengkap.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all self-start md:self-center">
          <Save className="w-4 h-4" />
          <span>Simpan Perubahan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Image, Basic Info, Socials */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FAF4EE] shadow-sm mb-4">
              <img src={profile.imageUrl} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#FAF4EE] border border-[#E8DFD5] text-[#2C2520] text-[12px] font-bold hover:bg-[#F2EAE1] transition-colors w-full mb-6">
              Ubah Foto Profil
            </button>
            
            <div className="w-full space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="text" defaultValue={profile.name} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Email Kontak</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="email" defaultValue={profile.email} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kunci PGP (Fingerprint)</label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="text" defaultValue={profile.pgp} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] font-mono focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Lokasi</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#837466] w-4 h-4" />
                  <input type="text" defaultValue={profile.location} className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-bold text-[#2C2520] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C88238]" /> Media Sosial & Tautan
              </h2>
            </div>
            
            <div className="space-y-4">
              {socials.map((social, index) => (
                <div key={index} className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E8DFD5] relative group">
                  <button onClick={() => removeSocial(index)} className="absolute top-2 right-2 p-1 text-[#D32F2F] hover:bg-[#FFF0F0] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="mb-2 pr-6">
                    <label className="block text-[10px] font-bold text-[#837466] uppercase mb-1">Platform</label>
                    <input type="text" defaultValue={social.platform} placeholder="Cth: LinkedIn" className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#837466] uppercase mb-1">URL / Link</label>
                    <input type="text" defaultValue={social.url} placeholder="https://..." className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                </div>
              ))}
              <button onClick={addSocial} className="w-full py-2 flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-lg hover:bg-[#FAF4EE] transition-colors">
                <PlusCircle className="w-4 h-4" /> Tambah Sosmed
              </button>

              <div className="pt-4 mt-4 border-t border-[#F0EAE1]">
                <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">GitHub Username (Untuk Kalender)</label>
                <input type="text" defaultValue={profile.githubUsername} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-bold text-[#2C2520] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#C88238]" /> Statistik Portofolio
              </h2>
            </div>
            <div className="space-y-3">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 relative group">
                  <div className="w-full grid grid-cols-[1fr_2fr] gap-2">
                    <input type="text" defaultValue={stat.value} placeholder="Cth: C3SA" className="w-full px-2 py-1.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-md text-[12px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    <input type="text" defaultValue={stat.label} placeholder="Cth: Certified Analyst" className="w-full px-2 py-1.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-md text-[12px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                  <button onClick={() => removeStat(i)} className="p-1.5 text-[#D32F2F] hover:bg-[#FFF0F0] rounded shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button onClick={addStat} className="w-full py-1.5 flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-md hover:bg-[#FAF4EE] transition-colors mt-2">
                <PlusCircle className="w-3.5 h-3.5" /> Tambah Stat
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Roles, Bios, Philosophy, Extended */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm space-y-5">
            <div className="border-b border-[#F0EAE1] pb-4 mb-2">
              <h2 className="text-[16px] font-bold text-[#2C2520] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C88238]" />
                Peran & Headline Utama
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-[#2C2520] mb-1.5">Jabatan Utama (Title)</label>
                <input type="text" defaultValue={profile.title} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#2C2520] mb-1.5">Sub-judul (Subtitle)</label>
                <input type="text" defaultValue={profile.subtitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#2C2520] mb-1.5">Biografi Singkat (Bio - Tampil di Hero)</label>
              <textarea rows="3" defaultValue={profile.bio} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Filosofi Kerja (Axiom Memo)</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#2C2520] mb-1.5">Kutipan Filosofi Utama</label>
                  <input type="text" defaultValue={profile.philosophy} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] font-serif italic focus:outline-none focus:border-[#C88238]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#2C2520] mb-1.5">Deskripsi Filosofi (Pendek)</label>
                  <textarea rows="2" defaultValue={profile.philosophyShortBody} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                </div>
              </div>
              
              {/* Philosophy Instruments (Dynamic) */}
              <div className="mt-4">
                <label className="block text-[12px] font-bold text-[#2C2520] mb-2">Instrumen & Tools (Pillars di Memo)</label>
                <div className="flex flex-wrap gap-2">
                  {philosophyInstruments.map((instrument, i) => (
                    <div key={i} className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-3 pr-1 py-1">
                      <input type="text" defaultValue={instrument} className="bg-transparent text-[12px] font-bold text-[#2C2520] focus:outline-none w-28" />
                      <button onClick={() => removeInstrument(i)} className="p-1 rounded-full text-[#D32F2F] hover:bg-[#FFF0F0]"><Trash2 className="w-3 h-3" /></button>
                    </div>
                  ))}
                  <button onClick={addInstrument} className="px-3 py-1 flex items-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-full text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                    <PlusCircle className="w-3 h-3" /> Tambah
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <AlignLeft className="w-5 h-5 text-[#C88238]" />
                Extended Bios (Modal Profil)
              </h2>
              <div className="space-y-3">
                {extendedPhilosophy.map((p, i) => (
                  <div key={i} className="relative group">
                    <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Paragraf Filosofi {i+1}</label>
                    <textarea rows="3" defaultValue={p} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none pr-10"></textarea>
                    <button onClick={() => removeExtendedPhilosophy(i)} className="absolute right-2 top-6 p-1.5 text-[#D32F2F] hover:bg-[#FFF0F0] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button onClick={addExtendedPhilosophy} className="w-full py-2 flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-lg hover:bg-[#FAF4EE] transition-colors">
                  <PlusCircle className="w-4 h-4" /> Tambah Paragraf
                </button>

                <div className="pt-3">
                  <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Extended Bio Utama</label>
                  <textarea rows="3" defaultValue={profile.extendedBio} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                </div>
              </div>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-[#C88238]" />
                Area Domain & Keahlian
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domains.map((domain, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5] flex items-center gap-2 relative group">
                    <input type="text" defaultValue={domain.icon} placeholder="🛡️" className="w-12 px-2 py-2 bg-white border border-[#E8DFD5] rounded text-[16px] text-center focus:outline-none focus:border-[#C88238]" title="Emoji Icon" />
                    <input type="text" defaultValue={domain.label} placeholder="Domain Keahlian" className="w-full px-2 py-2 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    <button onClick={() => removeDomain(i)} className="absolute -top-2 -right-2 p-1 bg-white text-[#D32F2F] hover:bg-[#FFF0F0] border border-[#E8DFD5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button onClick={addDomain} className="h-[46px] w-full flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-lg hover:bg-[#FAF4EE] transition-colors">
                  <PlusCircle className="w-4 h-4" /> Tambah Domain
                </button>
              </div>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#C88238]" />
                Metodologi (Pillars)
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {methodologyPillars.map((pillar, i) => (
                  <div key={i} className="relative group">
                    <textarea rows="2" defaultValue={pillar} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none pr-10"></textarea>
                    <button onClick={() => removePillar(i)} className="absolute right-2 top-2 p-1.5 text-[#D32F2F] hover:bg-[#FFF0F0] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button onClick={addPillar} className="w-full py-2 flex items-center justify-center gap-1 text-[12px] font-bold text-[#C88238] border border-dashed border-[#C88238] rounded-lg hover:bg-[#FAF4EE] transition-colors">
                  <PlusCircle className="w-4 h-4" /> Tambah Pillar Metodologi
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
