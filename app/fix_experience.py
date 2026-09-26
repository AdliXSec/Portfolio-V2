import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'r') as f:
    content = f.read()

# Fix year -> period
content = content.replace('defaultValue={exp.year}', 'defaultValue={exp.period}')

# Fix exp.details.join -> remove the field or make it safe
old_details = """              <div>
                <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Detail Pencapaian (Modal - Pisahkan dengan koma)</label>
                <textarea rows="3" defaultValue={exp.details.join('\\n')} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
                <p className="text-[11px] text-[#837466] mt-1">Setiap baris baru akan menjadi poin (bullet list) di modal.</p>
              </div>"""

content = content.replace(old_details, '')

# Or if we want to keep tags safe
content = content.replace("defaultValue={exp.tags.join(', ')}", "defaultValue={exp.tags ? exp.tags.join(', ') : ''}")

# Fix key={exp.id} -> experience items don't have id, they have index or we use something else
content = content.replace('key={exp.id}', 'key={index}')
content = content.replace('experience.map((exp) => (', 'experience.map((exp, index) => (')

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'w') as f:
    f.write(content)
