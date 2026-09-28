import re

admin_dir = '/home/leexy/portfolio/app/src/pages/admin'

def remove_preview(content):
    pattern = r'\s*\{/\* Live Preview \*/\}\s*<LivePreviewWrapper.*?</LivePreviewWrapper>'
    return re.sub(pattern, '', content, flags=re.DOTALL)

# ================= AdminProfile.jsx =================
path = f'{admin_dir}/AdminProfile.jsx'
with open(path, 'r') as f:
    content = f.read()

content = remove_preview(content)

# Insert after header card. The header card in AdminProfile ends with "Simpan Perubahan" button.
# Let's find "Simpan Perubahan", then the </button></div></div>
simpan_idx = content.find('Simpan Perubahan')
btn_close = content.find('</button>', simpan_idx)
div1 = content.find('</div>', btn_close)
div2 = content.find('</div>', div1 + 1)

insert_at = div2 + len('</div>')

preview_profile = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Profil & Filosofi">
        {({ onOpenModal }) => (
          <div className="disable-preview-hover flex flex-wrap gap-8 items-start justify-center w-full">
            <div className="max-w-md w-full shrink-0">
              <HeroSection id="node-hero-preview" onOpenModal={onOpenModal} onDownloadCV={() => {}} />
            </div>
            <div className="max-w-sm w-full shrink-0">
              <PhilosophyMemo id="node-philosophy-preview" onOpenModal={onOpenModal} />
            </div>
          </div>
        )}
      </LivePreviewWrapper>
"""
content = content[:insert_at] + preview_profile + content[insert_at:]
with open(path, 'w') as f:
    f.write(content)
print("✅ AdminProfile.jsx fixed")


# ================= AdminExperience.jsx =================
path = f'{admin_dir}/AdminExperience.jsx'
with open(path, 'r') as f:
    content = f.read()

content = remove_preview(content)

# The main page header has a "Tambah Pengalaman" button.
tambah_idx = content.find('Tambah Pengalaman')
if tambah_idx != -1:
    btn_close = content.find('</button>', tambah_idx)
    div1 = content.find('</div>', btn_close)
    div2 = content.find('</div>', div1 + 1)
    
    insert_at = div2 + len('</div>')
    
    preview_exp = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Pengalaman Kerja">
        {({ onOpenModal }) => (
          <div className="disable-preview-hover flex justify-center w-full">
            <div className="max-w-lg w-full">
              <ExperienceCardPublic id="node-experience-preview" onOpenModal={onOpenModal} />
            </div>
          </div>
        )}
      </LivePreviewWrapper>
"""
    content = content[:insert_at] + preview_exp + content[insert_at:]
    with open(path, 'w') as f:
        f.write(content)
    print("✅ AdminExperience.jsx fixed")


# ================= AdminTechStack.jsx =================
path = f'{admin_dir}/AdminTechStack.jsx'
with open(path, 'r') as f:
    content = f.read()

content = remove_preview(content)

tambah_idx = content.find('Tambah Kategori')
if tambah_idx != -1:
    btn_close = content.find('</button>', tambah_idx)
    div1 = content.find('</div>', btn_close)
    div2 = content.find('</div>', div1 + 1)
    
    insert_at = div2 + len('</div>')
    
    preview_tech = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Tech Stack">
        {({ onOpenModal }) => (
          <div className="disable-preview-hover flex justify-center w-full">
            <div className="max-w-lg w-full">
              <TechStackSectionPublic id="node-tech-preview" onOpenModal={onOpenModal} />
            </div>
          </div>
        )}
      </LivePreviewWrapper>
"""
    content = content[:insert_at] + preview_tech + content[insert_at:]
    with open(path, 'w') as f:
        f.write(content)
    print("✅ AdminTechStack.jsx fixed")


# ================= AdminContact.jsx =================
path = f'{admin_dir}/AdminContact.jsx'
with open(path, 'r') as f:
    content = f.read()

content = remove_preview(content)

simpan_idx = content.find('Simpan Perubahan')
btn_close = content.find('</button>', simpan_idx)
div1 = content.find('</div>', btn_close)
div2 = content.find('</div>', div1 + 1)

insert_at = div2 + len('</div>')

preview_contact = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Kontak & Layanan">
        {({ onOpenModal }) => (
          <div className="disable-preview-hover flex justify-center w-full">
            <div className="w-full max-w-4xl">
              <ContactSection onOpenModal={onOpenModal} />
            </div>
          </div>
        )}
      </LivePreviewWrapper>
"""
content = content[:insert_at] + preview_contact + content[insert_at:]
with open(path, 'w') as f:
    f.write(content)
print("✅ AdminContact.jsx fixed")


# ================= AdminAchievements.jsx =================
path = f'{admin_dir}/AdminAchievements.jsx'
with open(path, 'r') as f:
    content = f.read()

content = remove_preview(content)

tambah_idx = content.find('Tambah Item')
btn_close = content.find('</button>', tambah_idx)
div1 = content.find('</div>', btn_close)
div2 = content.find('</div>', div1 + 1)

insert_at = div2 + len('</div>')

preview_achv = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Sertifikasi & Prestasi">
        {({ onOpenModal }) => (
          <div className="disable-preview-hover flex justify-center w-full">
            <div className="max-w-lg w-full">
              <AchievementsSection id="node-achievements-preview" onOpenModal={onOpenModal} />
            </div>
          </div>
        )}
      </LivePreviewWrapper>
"""
content = content[:insert_at] + preview_achv + content[insert_at:]
with open(path, 'w') as f:
    f.write(content)
print("✅ AdminAchievements.jsx fixed")


# ================= AdminProjects.jsx =================
path = f'{admin_dir}/AdminProjects.jsx'
with open(path, 'r') as f:
    content = f.read()

content = content.replace(
    '<div className="flex flex-wrap gap-8 items-start justify-center w-full">',
    '<div className="disable-preview-hover flex flex-wrap gap-8 items-start justify-center w-full">'
)
with open(path, 'w') as f:
    f.write(content)
print("✅ AdminProjects.jsx fixed")

