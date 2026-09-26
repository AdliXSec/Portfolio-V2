import { User, Mail, MapPin, Save, Shield, Key, Terminal, AlignLeft, Hash, BarChart3, Crosshair } from 'lucide-react';
import { profile } from '../../data/profile';

export default function AdminProfile() {
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
            <h2 className="text-[14px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#C88238]" /> Media Sosial & Tautan
            </h2>
            <div className="space-y-3">
              {profile.socials.map((social, index) => (
                <div key={index}>
                  <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">{social.platform}</label>
                  <input type="text" defaultValue={social.url} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              ))}
              <div className="pt-2">
                <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">GitHub Username (Untuk Kalender)</label>
                <input type="text" defaultValue={profile.githubUsername} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
            <h2 className="text-[14px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#C88238]" /> Statistik Portofolio
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(profile.stats).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">{key}</label>
                  <input type="text" defaultValue={value} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              ))}
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
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <AlignLeft className="w-5 h-5 text-[#C88238]" />
                Extended Bios (Modal Profil)
              </h2>
              <div className="space-y-3">
                {profile.extendedBios.map((p, i) => (
                  <div key={i}>
                    <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Paragraf {i+1}</label>
                    <textarea rows="3" defaultValue={p} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-[#C88238]" />
                Area Domain & Keahlian
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.domains.map((domain, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5]">
                    <input type="text" defaultValue={domain.title} className="w-full px-2 py-1 mb-2 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    <textarea rows="2" defaultValue={domain.desc} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#685E55] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#F0EAE1] pt-5 mt-5">
              <h2 className="text-[16px] font-bold text-[#2C2520] mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#C88238]" />
                Metodologi (Pillars)
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {profile.methodologyPillars.map((pillar, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-3 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5]">
                    <div className="w-full sm:w-1/3">
                      <input type="text" defaultValue={pillar.title} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <textarea rows="2" defaultValue={pillar.desc} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#685E55] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
