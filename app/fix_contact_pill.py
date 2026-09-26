import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminContact.jsx', 'r') as f:
    content = f.read()

old_block = """                  <textarea 
                    rows="2" 
                    value={service} 
                    onChange={(e) => updateService(i, e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none pr-10"
                    placeholder="Nama layanan (contoh: Red Teaming)"
                  ></textarea>
                  <button onClick={() => removeService(i)} className="absolute right-2 top-2 p-1.5 text-[#D32F2F] hover:bg-[#FFF0F0] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4" />
                  </button>"""

new_block = """                  <div className="flex items-center w-full bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-4 pr-1 py-1">
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
                  </div>"""

content = content.replace(old_block, new_block)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminContact.jsx', 'w') as f:
    f.write(content)

