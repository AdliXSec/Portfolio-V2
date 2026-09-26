import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProfile.jsx', 'r') as f:
    content = f.read()

# Fix stats
old_stats = """{Object.entries(profile.stats).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">{key}</label>
                  <input type="text" defaultValue={value} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              ))}"""
new_stats = """{profile.stats.map((stat, i) => (
                <div key={i}>
                  <label className="block text-[11px] font-bold text-[#685E55] uppercase mb-1">{stat.label}</label>
                  <input type="text" defaultValue={stat.value} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                </div>
              ))}"""
content = content.replace(old_stats, new_stats)

# Fix extendedPhilosophy
old_ext = """{profile.extendedBios.map((p, i) => (
                  <div key={i}>
                    <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Paragraf {i+1}</label>
                    <textarea rows="3" defaultValue={p} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}"""
new_ext = """{profile.extendedPhilosophy.map((p, i) => (
                  <div key={i}>
                    <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Paragraf Filosofi {i+1}</label>
                    <textarea rows="4" defaultValue={p} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}
                <div>
                  <label className="block text-[11px] font-bold text-[#865305] uppercase mb-1">Extended Bio Lengkap</label>
                  <textarea rows="4" defaultValue={profile.extendedBio} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                </div>"""
content = content.replace(old_ext, new_ext)

# Fix domains
old_domain = """{profile.domains.map((domain, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5]">
                    <input type="text" defaultValue={domain.title} className="w-full px-2 py-1 mb-2 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    <textarea rows="2" defaultValue={domain.desc} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#685E55] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}"""
new_domain = """{profile.domains.map((domain, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5] flex gap-2">
                    <input type="text" defaultValue={domain.icon} className="w-12 px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[16px] text-center focus:outline-none focus:border-[#C88238]" title="Emoji Icon" />
                    <input type="text" defaultValue={domain.label} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                  </div>
                ))}"""
content = content.replace(old_domain, new_domain)

# Fix methodologyPillars
old_pillar = """{profile.methodologyPillars.map((pillar, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-3 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5]">
                    <div className="w-full sm:w-1/3">
                      <input type="text" defaultValue={pillar.title} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <textarea rows="2" defaultValue={pillar.desc} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[12px] text-[#685E55] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                    </div>
                  </div>
                ))}"""
new_pillar = """{profile.methodologyPillars.map((pillar, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD5]">
                    <textarea rows="2" defaultValue={pillar} className="w-full px-2 py-1 bg-white border border-[#E8DFD5] rounded text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                  </div>
                ))}"""
content = content.replace(old_pillar, new_pillar)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProfile.jsx', 'w') as f:
    f.write(content)
