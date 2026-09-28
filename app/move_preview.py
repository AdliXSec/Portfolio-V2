import os

admin_dir = '/home/leexy/portfolio/app/src/pages/admin'

# ========================================
# Strategy: For each admin page,
# 1. Remove the preview from the BOTTOM
# 2. Insert it right AFTER the header section
# ========================================

def move_preview(filepath, preview_jsx):
    """Remove existing LivePreview from bottom, insert after header."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Step 1: Remove existing preview block from bottom
    # Find the {/* Live Preview */} block and remove it
    start_marker = '\n      {/* Live Preview */}'
    end_marker = '</LivePreviewWrapper>'
    
    start_idx = content.find(start_marker)
    if start_idx != -1:
        end_idx = content.find(end_marker, start_idx)
        if end_idx != -1:
            end_idx += len(end_marker)
            content = content[:start_idx] + content[end_idx:]

    # Step 2: Insert preview right after the first header card (the one with "Simpan")
    # The pattern is: the first </div> that closes the header card,
    # followed by content. We look for the closing of the header section.
    # Every admin page has this pattern for the header:
    #   <div className="flex flex-col md:flex-row ... bg-white p-6 rounded-xl ...">
    #     ...
    #   </div>
    # Then the next section starts.
    
    # Find the first major section break after the header
    # Strategy: find "Simpan" button, then find the closing </div> of that card
    simpan_idx = content.find('Simpan')
    if simpan_idx == -1:
        print(f"  ⚠️ Could not find 'Simpan' in {filepath}")
        return
    
    # From Simpan, find the next </div>\n\n or </div>\n      <div pattern
    # which marks the end of the header card
    # Look for the pattern: </div>\n      </div>\n\n (end of header wrapper)
    search_start = simpan_idx
    
    # Find closing sequence: we need the </div> that closes the button wrapper,
    # then the </div> that closes the header card
    # Pattern: </div>\n      </div>\n\n      {/* next section */}
    
    # Let's find "</div>\n      </div>\n" after Simpan
    close1 = content.find('</div>\n      </div>\n', search_start)
    if close1 == -1:
        close1 = content.find('</div>\n        </div>\n', search_start)
    
    if close1 != -1:
        # Find the end of this closing tag sequence
        insert_point = content.find('\n', close1 + len('</div>'))
        # Move past the second </div>
        next_close = content.find('</div>', close1 + 6)
        if next_close != -1:
            insert_point = next_close + len('</div>')
            content = content[:insert_point] + '\n\n' + preview_jsx + content[insert_point:]
    
    with open(filepath, 'w') as f:
        f.write(content)


# ========================================
# AdminProfile.jsx
# ========================================
preview = """      {/* Live Preview */}
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
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminProfile.jsx'), preview)
print("✅ AdminProfile.jsx — preview moved to top")

# ========================================
# AdminExperience.jsx
# ========================================
preview = """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Pengalaman Kerja">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <ExperienceCardPublic id="node-experience-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminExperience.jsx'), preview)
print("✅ AdminExperience.jsx — preview moved to top")

# ========================================
# AdminTechStack.jsx
# ========================================
preview = """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Tech Stack">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <TechStackSectionPublic id="node-tech-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminTechStack.jsx'), preview)
print("✅ AdminTechStack.jsx — preview moved to top")

# ========================================
# AdminAchievements.jsx
# ========================================
preview = """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Sertifikasi & Prestasi">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <AchievementsSection id="node-achievements-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminAchievements.jsx'), preview)
print("✅ AdminAchievements.jsx — preview moved to top")

# ========================================
# AdminContact.jsx
# ========================================
preview = """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Kontak & Layanan">
        {({ onOpenModal }) => (
          <div className="w-full max-w-4xl">
            <ContactSection onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminContact.jsx'), preview)
print("✅ AdminContact.jsx — preview moved to top")

# ========================================
# AdminProjects.jsx — show ALL projects (no slice)
# ========================================
preview = """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Proyek">
        {({ onOpenModal }) => (
          <div className="flex flex-wrap gap-8 items-start justify-center w-full">
            {projectList.filter(p => p.status === 'Tayang').map((proj, idx) => (
              <div key={proj.id} className="max-w-sm w-full shrink-0">
                <ProjectCard project={proj} index={idx} onOpenModal={onOpenModal} />
              </div>
            ))}
          </div>
        )}
      </LivePreviewWrapper>"""
move_preview(os.path.join(admin_dir, 'AdminProjects.jsx'), preview)
print("✅ AdminProjects.jsx — preview moved to top + showing ALL projects")

print("\n🎉 Done! All previews moved to top (below header).")
