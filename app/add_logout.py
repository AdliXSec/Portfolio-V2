import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'r') as f:
    content = f.read()

# Add LogOut to imports
if 'LogOut' not in content:
    content = content.replace(
        "import { ChevronLeft, ChevronRight, Save,",
        "import { LogOut, ChevronLeft, ChevronRight, Save,"
    )

# Replace the old collapse toggle with the new footer containing Logout
old_footer = """
        {/* Collapse Toggle */}
        <div className="p-4 border-t border-[#E8DFD5] hidden lg:flex justify-end">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
"""

new_footer = """
        {/* Sidebar Footer (Logout & Collapse) */}
        <div className={`p-4 border-t border-[#E8DFD5] flex items-center ${isCollapsed ? 'justify-center flex-col-reverse gap-3' : 'justify-between'}`}>
          <button 
            onClick={() => alert('Fitur Logout akan berfungsi setelah backend terpasang!')}
            className={`flex items-center gap-2 text-[#D32F2F] hover:bg-[#FFF0F0] rounded-lg transition-colors ${isCollapsed ? 'p-2' : 'px-3 py-2 flex-1'}`}
            title="Keluar (Logout)"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className={`font-bold text-[13px] whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'block opacity-100'}`}>Log Out</span>
          </button>

          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`w-9 h-9 rounded-lg hidden lg:flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors shrink-0`}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
"""
content = content.replace(old_footer.strip(), new_footer.strip())

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'w') as f:
    f.write(content)
