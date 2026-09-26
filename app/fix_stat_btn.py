import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'r') as f:
    content = f.read()

# Target header block to remove the old button
old_header = """              <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3 mb-2">
                <h2 className="text-[16px] font-bold text-[#2C2520]">Statistik & Metrik</h2>
                <button onClick={addStat} className="text-[#C88238] hover:text-[#B86F28]"><PlusCircle className="w-4 h-4" /></button>
              </div>"""

new_header = """              <h2 className="text-[16px] font-bold text-[#2C2520] border-b border-[#F0EAE1] pb-3 mb-2">Statistik & Metrik</h2>"""

content = content.replace(old_header, new_header)

# Target the map block to add the new button at the bottom
old_map = """                {statsEntries.length === 0 && <div className="text-[12px] text-[#837466] italic text-center py-2">Belum ada metrik.</div>}
              </div>"""

new_map = """                {statsEntries.length === 0 && <div className="text-[12px] text-[#837466] italic text-center py-2">Belum ada metrik.</div>}
                <button onClick={addStat} className="w-full py-1.5 mt-2 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                  <PlusCircle className="w-4 h-4" /> Tambah Metrik
                </button>
              </div>"""

content = content.replace(old_map, new_map)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'w') as f:
    f.write(content)

