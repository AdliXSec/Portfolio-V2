import re

admin_dir = '/home/leexy/portfolio/app/src/pages/admin'

def fix_page(filename, preview_jsx):
    """Remove existing preview, then insert right after the FIRST header card closing."""
    path = f'{admin_dir}/{filename}'
    with open(path, 'r') as f:
        content = f.read()
    
    # Step 1: Extract the preview block (remove it from wherever it is)
    pattern = r'\n\s*\{/\* Live Preview \*/\}\n.*?</LivePreviewWrapper>'
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    # Step 2: Find the correct insertion point
    # The header card always ends with "Simpan Perubahan" or "Tambah" button
    # followed by </button>\n        </div>\n      </div>
    # We want to insert right after that </div>
    
    # Find the header card: it's the first <div> after return (
    return_idx = content.find('return (')
    # Find "Simpan Perubahan" or the first button section
    simpan_idx = content.find('Simpan Perubahan', return_idx)
    if simpan_idx == -1:
        simpan_idx = content.find('Simpan', return_idx)
    
    # From simpan, find the closing </div> of the header card
    # Pattern: </button>\n        </div>\n      </div>
    # We need the line that has "      </div>" which closes the header card
    search_from = simpan_idx
    
    # Find </button> first
    btn_close = content.find('</button>', search_from)
    # Then find the next two </div> (button wrapper, then header card)
    div1 = content.find('</div>', btn_close)
    div2 = content.find('</div>', div1 + 6)
    
    # Insert after div2 + '</div>'
    insert_at = div2 + len('</div>')
    
    content = content[:insert_at] + '\n\n' + preview_jsx + '\n' + content[insert_at:]
    
    with open(path, 'w') as f:
        f.write(content)
    print(f'✅ {filename} fixed')


# ========== AdminProfile.jsx ==========
fix_page('AdminProfile.jsx', """      {/* Live Preview */}
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
      </LivePreviewWrapper>""")

# ========== AdminContact.jsx ==========
fix_page('AdminContact.jsx', """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Kontak & Layanan">
        {({ onOpenModal }) => (
          <div className="w-full max-w-4xl">
            <ContactSection onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>""")

# ========== AdminTechStack.jsx ==========
fix_page('AdminTechStack.jsx', """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Tech Stack">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <TechStackSectionPublic id="node-tech-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>""")

# ========== AdminExperience.jsx ==========
fix_page('AdminExperience.jsx', """      {/* Live Preview */}
      <LivePreviewWrapper title="Preview Node Pengalaman Kerja">
        {({ onOpenModal }) => (
          <div className="max-w-lg w-full">
            <ExperienceCardPublic id="node-experience-preview" onOpenModal={onOpenModal} />
          </div>
        )}
      </LivePreviewWrapper>""")

print('\n🎉 All 4 pages fixed!')
