import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'r') as f:
    content = f.read()

# Add Eye to imports
if "Eye" not in content:
    content = content.replace("from 'lucide-react';", "Eye, from 'lucide-react';")
    content = content.replace("Eye, from", "Eye,")

# Add th for Views
old_th = """                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Kategori / Topik</th>"""

new_th = """                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-center">Views</th>
                <th className="px-6 py-4 text-[12px] font-semibold text-[#685E55] uppercase tracking-wider text-right">Kategori / Topik</th>"""
content = content.replace(old_th, new_th)

# Add td for Views
old_td = """                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">"""

new_td = """                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[#685E55]">
                      <Eye className="w-4 h-4" />
                      <span className="text-[13px] font-semibold">{proj.viewCount !== undefined ? proj.viewCount : 0}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">"""
content = content.replace(old_td, new_td)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'w') as f:
    f.write(content)
