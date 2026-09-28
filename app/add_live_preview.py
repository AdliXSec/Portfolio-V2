import os

admin_dir = '/home/leexy/portfolio/app/src/pages/admin'

# ========================================
# 1. AdminProfile.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminProfile.jsx')
with open(path, 'r') as f:
    content = f.read()

# Add imports
if 'LivePreviewWrapper' not in content:
    import_line = "import LivePreviewWrapper from './LivePreviewWrapper';\nimport HeroSection from '../../components/HeroSection';\nimport PhilosophyMemo from '../../components/PhilosophyMemo';\n"
    # Insert after the first import block
    first_import_end = content.index('\n\nexport')
    content = content[:first_import_end] + '\n' + import_line + content[first_import_end:]

# Add preview before final closing
preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Profil & Filosofi">
        {({ onOpenModal }) => (
          <>
            <div className="max-w-md w-full shrink-0">
              <HeroSection id="node-hero-preview" onOpenModal={onOpenModal} onDownloadCV={() => {}} />
            </div>
            <div className="max-w-sm w-full shrink-0">
              <PhilosophyMemo id="node-philosophy-preview" onOpenModal={onOpenModal} />
            </div>
          </>
        )}
      </LivePreviewWrapper>
"""
# Find the last closing pattern
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminProfile.jsx updated")

# ========================================
# 2. AdminExperience.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminExperience.jsx')
with open(path, 'r') as f:
    content = f.read()

if 'LivePreviewWrapper' not in content:
    first_import_end = content.index('\n\nexport')
    import_line = "import LivePreviewWrapper from './LivePreviewWrapper';\nimport ExperienceCard from '../../components/ExperienceCard';\n"
    content = content[:first_import_end] + '\n' + import_line + content[first_import_end:]

preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Pengalaman Kerja">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <ExperienceCard id="node-experience-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>
"""
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminExperience.jsx updated")

# ========================================
# 3. AdminTechStack.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminTechStack.jsx')
with open(path, 'r') as f:
    content = f.read()

if 'LivePreviewWrapper' not in content:
    first_import_end = content.index('\n\nexport')
    import_line = "import LivePreviewWrapper from './LivePreviewWrapper';\nimport TechStackSection from '../../components/TechStackSection';\n"
    content = content[:first_import_end] + '\n' + import_line + content[first_import_end:]

preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Tech Stack">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <TechStackSection id="node-tech-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>
"""
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminTechStack.jsx updated")

# ========================================
# 4. AdminAchievements.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminAchievements.jsx')
with open(path, 'r') as f:
    content = f.read()

if 'LivePreviewWrapper' not in content:
    first_import_end = content.index('\n\nexport')
    import_line = "import LivePreviewWrapper from './LivePreviewWrapper';\nimport AchievementsSection from '../../components/AchievementsSection';\n"
    content = content[:first_import_end] + '\n' + import_line + content[first_import_end:]

preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Sertifikasi & Prestasi">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <AchievementsSection id="node-achievements-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>
"""
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminAchievements.jsx updated")

# ========================================
# 5. AdminContact.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminContact.jsx')
with open(path, 'r') as f:
    content = f.read()

if 'LivePreviewWrapper' not in content:
    first_import_end = content.index('\n\nexport')
    import_line = "import LivePreviewWrapper from './LivePreviewWrapper';\nimport ContactSection from '../../components/ContactSection';\n"
    content = content[:first_import_end] + '\n' + import_line + content[first_import_end:]

preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Kontak & Layanan">
        {({ onOpenModal }) => (
          <div className="w-full max-w-4xl">
            <ContactSection onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>
"""
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminContact.jsx updated")

# ========================================
# 6. AdminProjects.jsx
# ========================================
path = os.path.join(admin_dir, 'AdminProjects.jsx')
with open(path, 'r') as f:
    content = f.read()

if 'LivePreviewWrapper' not in content:
    # Add imports - need to add after existing import line
    old_import = "import { projects } from '../../data/projects';"
    new_import = old_import + "\nimport LivePreviewWrapper from './LivePreviewWrapper';\nimport ProjectCard from '../../components/ProjectCard';"
    content = content.replace(old_import, new_import)

# For projects, add preview at the end of the LIST VIEW (second return)
# Find the last table closing div and add preview before the final container div
preview_block = """
      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Proyek">
        {({ onOpenModal }) => (
          <div className="flex flex-wrap gap-8 items-start justify-center w-full">
            {projectList.filter(p => p.status === 'Tayang').slice(0, 2).map((proj, idx) => (
              <div key={proj.id} className="max-w-sm w-full shrink-0">
                <ProjectCard project={proj} index={idx} onOpenModal={onOpenModal} />
              </div>
            ))}
          </div>
        )}
      </LivePreviewWrapper>
"""
# The list view's closing pattern - find the LAST closing in the file
closing = '    </div>\n  );\n}'
last_close_idx = content.rfind(closing)
if last_close_idx != -1:
    content = content[:last_close_idx] + preview_block + '\n' + closing + content[last_close_idx + len(closing):]

with open(path, 'w') as f:
    f.write(content)
print("✅ AdminProjects.jsx updated")

print("\n🎉 All 6 admin pages updated with Live Preview!")
