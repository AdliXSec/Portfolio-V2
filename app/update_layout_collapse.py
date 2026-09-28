import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'r') as f:
    content = f.read()

# Add ChevronLeft/Right to imports
if 'ChevronLeft' not in content:
    content = content.replace(
        "import { Save,",
        "import { ChevronLeft, ChevronRight, Save,"
    )

# Add state
if 'const [isCollapsed, setIsCollapsed]' not in content:
    content = content.replace(
        "const [isSidebarOpen, setIsSidebarOpen] = useState(false);",
        "const [isSidebarOpen, setIsSidebarOpen] = useState(false);\n  const [isCollapsed, setIsCollapsed] = useState(false);"
    )

# Sidebar classes
sidebar_old = "fixed left-0 top-0 h-full w-64 bg-[#FFFFFF] border-r border-[#E8DFD5] z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}"
sidebar_new = "fixed left-0 top-0 h-full bg-[#FFFFFF] border-r border-[#E8DFD5] z-50 flex flex-col justify-between overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'} ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}"
content = content.replace(sidebar_old, sidebar_new)

# Logo / Brand
logo_old = """<div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C88238] flex items-center justify-center text-white shadow-sm shrink-0">
                <Pin className="w-4 h-4" />
              </div>
              <span className="font-bold text-[18px] text-[#2C2520] tracking-tight">CMS - Adli</span>
            </div>"""
# Note: I need to handle if shrink-0 is not there. The exact old text is:
logo_old_regex = r'<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-lg bg-\[#C88238\] flex items-center justify-center text-white shadow-sm( shrink-0)?">\s*<Pin className="w-4 h-4" />\s*</div>\s*<span className="font-bold text-\[18px\] text-\[#2C2520\] tracking-tight">CMS - Adli</span>\s*</div>'

logo_new = """<div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-[#C88238] flex items-center justify-center text-white shadow-sm shrink-0">
                <Pin className="w-4 h-4" />
              </div>
              <span className={`font-bold text-[18px] text-[#2C2520] tracking-tight whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>CMS - Adli</span>
            </div>"""
content = re.sub(logo_old_regex, logo_new, content)

# Desktop collapse toggle button inside the header bar (or sidebar).
# Let's put a toggle button at the bottom of the sidebar.
bottom_button = """
        {/* Collapse Toggle */}
        <div className="p-4 border-t border-[#E8DFD5] hidden lg:flex justify-end">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
      </aside>
"""
content = content.replace("      </aside>", bottom_button)

# Main Content Wrapper classes
main_old = '<div className="lg:pl-64 w-full flex flex-col min-h-screen">'
main_new = '<div className={`w-full flex flex-col min-h-screen transition-all duration-300 ease-in-out ${isCollapsed ? \'lg:pl-20\' : \'lg:pl-64\'}`}>'
content = content.replace(main_old, main_new)

# Update all link labels to hide on collapse
def fix_link(match):
    full_link = match.group(0)
    # The span inside link is: <span>Label</span>
    # Replace it with <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Label</span>
    span_match = re.search(r'<span>(.*?)</span>', full_link)
    if span_match:
        label = span_match.group(1)
        new_span = f'<span className={{`whitespace-nowrap transition-opacity duration-300 ${{isCollapsed ? \'opacity-0 hidden\' : \'opacity-100 block\'}}`}}>{label}</span>'
        full_link = full_link.replace(span_match.group(0), new_span)
        
    # also add group and tooltip-like behavior or just justify-center when collapsed
    # Add justify-center if collapsed so icon is centered
    full_link = full_link.replace('flex items-center gap-3', 'flex items-center gap-3 ${isCollapsed ? \'justify-center px-0\' : \'\'}')
    return full_link

# We find all <Link to="/admin/... </Link>
content = re.sub(r'<Link\s+to="/admin/.*?</Link>', fix_link, content, flags=re.DOTALL)

# Also fix the Category labels (Utama, Manajemen Konten, etc)
def fix_category(match):
    label = match.group(1)
    return f'<span className={{`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4 whitespace-nowrap transition-opacity duration-300 ${{isCollapsed ? \'opacity-0 hidden\' : \'opacity-100 block\'}}`}}>{label}</span>'

content = re.sub(r'<span className="px-4 text-\[11px\] font-bold text-\[#837466\] uppercase tracking-wider mb-1 mt-4">(.*?)</span>', fix_category, content)

# And the very first category which has mt-2 instead of mt-4
def fix_category2(match):
    label = match.group(1)
    return f'<span className={{`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-2 whitespace-nowrap transition-opacity duration-300 ${{isCollapsed ? \'opacity-0 hidden\' : \'opacity-100 block\'}}`}}>{label}</span>'
content = re.sub(r'<span className="px-4 text-\[11px\] font-bold text-\[#837466\] uppercase tracking-wider mb-1 mt-2">(.*?)</span>', fix_category2, content)

# Also the sidebar logo is padded px-6, we need it px-0 and justify-center when collapsed
logo_wrapper_old = r'<div className="h-16 px-6 flex items-center justify-between border-b border-\[#F0EAE1\] sticky top-0 bg-white z-10">'
logo_wrapper_new = r'<div className={`h-16 flex items-center border-b border-[#F0EAE1] sticky top-0 bg-white z-10 transition-all duration-300 ${isCollapsed ? \'px-0 justify-center\' : \'px-6 justify-between\'}`}>'
content = re.sub(logo_wrapper_old, logo_wrapper_new, content)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'w') as f:
    f.write(content)
