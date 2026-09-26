import re

def insert_modal_header(file_path, state_vars, inputs_html):
    with open(file_path, 'r') as f:
        content = f.read()

    # insert state vars right after export default function...
    content = re.sub(r'(export default function.*?{)', f'\\1\n{state_vars}', content, count=1)

    # insert HTML inputs right before the first grid/list (after the main header)
    # usually there's <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> or similar
    # we'll look for `<div className="flex flex-col gap-4">` or `grid`
    
    if "AdminProfile" in file_path:
        target = '<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">'
        content = content.replace(target, inputs_html + '\n\n      ' + target)
    elif "AdminExperience" in file_path:
        target = '<div className="flex flex-col gap-4">'
        content = content.replace(target, inputs_html + '\n\n      ' + target)
    elif "AdminTechStack" in file_path:
        target = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">'
        content = content.replace(target, inputs_html + '\n\n      ' + target)
    elif "AdminAchievements" in file_path:
        target = '<div className="flex flex-col gap-4">'
        content = content.replace(target, inputs_html + '\n\n      ' + target)
    elif "AdminContact" in file_path:
        target = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">'
        # AdminContact already has dispatch detail modal info inside the grid.
        # But for modalRef, we can add it there. Let's handle AdminContact manually or inject it inside the Dispatch Modal block.
        # Let's replace the first input in Dispatch Detail Modal Info
        target2 = '<div>\n            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tag Layanan</label>'
        replacement = '<div>\n            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi Header (Ref)</label>\n            <input type="text" defaultValue={initialContactData.modalRef} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] mb-3" />\n          </div>\n          ' + target2
        content = content.replace(target2, replacement)
    
    with open(file_path, 'w') as f:
        f.write(content)

# 1. AdminProfile
profile_html = """      {/* Modal Header Configuration */}
      <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm mb-2">
        <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Header Modal (Tampil saat node diklik)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi (Ref)</label>
            <input type="text" defaultValue={modalRef} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori / Tag</label>
            <input type="text" defaultValue={modalTag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Modal (Title)</label>
            <input type="text" defaultValue={modalTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan (Quote)</label>
            <input type="text" defaultValue={modalQuote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>
      </div>"""
insert_modal_header(
    '/home/leexy/portfolio/app/src/pages/admin/AdminProfile.jsx',
    "  const [modalRef] = useState(profile.modalConfig?.ref || '');\n  const [modalTag] = useState(profile.modalConfig?.tag || '');\n  const [modalTitle] = useState(profile.modalConfig?.title || '');\n  const [modalQuote] = useState(profile.modalConfig?.quote || '');\n",
    profile_html
)

# 2. AdminExperience
with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'r') as f:
    exp_c = f.read()
if "experienceModal" not in exp_c:
    exp_c = exp_c.replace("import { experiences as initialExperiences } from '../../data/experience';", "import { experiences as initialExperiences, experienceModal } from '../../data/experience';")
    with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'w') as f:
        f.write(exp_c)

exp_html = profile_html.replace('modalRef', 'experienceModal.ref').replace('modalTag', 'experienceModal.tag').replace('modalTitle', 'experienceModal.title').replace('modalQuote', 'experienceModal.quote')
insert_modal_header('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', "", exp_html)

# 3. AdminTechStack
with open('/home/leexy/portfolio/app/src/pages/admin/AdminTechStack.jsx', 'r') as f:
    tech_c = f.read()
if "techstackModal" not in tech_c:
    tech_c = tech_c.replace("import { techCategories as initialTechStack } from '../../data/techstack';", "import { techCategories as initialTechStack, techstackModal } from '../../data/techstack';")
    with open('/home/leexy/portfolio/app/src/pages/admin/AdminTechStack.jsx', 'w') as f:
        f.write(tech_c)

tech_html = profile_html.replace('modalRef', 'techstackModal.ref').replace('modalTag', 'techstackModal.tag').replace('modalTitle', 'techstackModal.title').replace('modalQuote', 'techstackModal.quote')
insert_modal_header('/home/leexy/portfolio/app/src/pages/admin/AdminTechStack.jsx', "", tech_html)

# 4. AdminAchievements
with open('/home/leexy/portfolio/app/src/pages/admin/AdminAchievements.jsx', 'r') as f:
    achv_c = f.read()
if "achievementsModal" not in achv_c:
    achv_c = achv_c.replace("import { achievements } from '../../data/achievements';", "import { achievements, achievementsModal } from '../../data/achievements';")
    with open('/home/leexy/portfolio/app/src/pages/admin/AdminAchievements.jsx', 'w') as f:
        f.write(achv_c)

achv_html = profile_html.replace('modalRef', 'achievementsModal.ref').replace('modalTag', 'achievementsModal.tag').replace('modalTitle', 'achievementsModal.title').replace('modalQuote', 'achievementsModal.quote')
insert_modal_header('/home/leexy/portfolio/app/src/pages/admin/AdminAchievements.jsx', "", achv_html)

# 5. AdminContact
insert_modal_header('/home/leexy/portfolio/app/src/pages/admin/AdminContact.jsx', "", "")

