with open('/home/leexy/portfolio/app/src/index.css', 'r') as f:
    content = f.read()

# Remove the previously appended CSS if it exists
if '/* Admin Live Preview Specific Overrides */' in content:
    content = content[:content.find('/* Admin Live Preview Specific Overrides */')]

new_css = """
/* Admin Live Preview Specific Overrides */
.disable-preview-hover .evidence-card {
  transition: none !important;
}

.disable-preview-hover .evidence-card:hover {
  z-index: auto !important;
}

/* Force Tailwind variables to ignore hover states inside the preview */
.disable-preview-hover *:hover {
  --tw-translate-y: 0 !important;
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
}
"""

content += new_css

with open('/home/leexy/portfolio/app/src/index.css', 'w') as f:
    f.write(content)
