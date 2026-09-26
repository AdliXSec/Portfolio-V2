import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'r') as f:
    content = f.read()

# Make it use state
import_stmt = "import { useState } from 'react';\nimport { Search, PlusCircle, Filter, FileText, CheckCircle2, XCircle } from 'lucide-react';"
content = re.sub(r"import { Search, PlusCircle, Filter, FileText, CheckCircle2 } from 'lucide-react';", import_stmt, content)

state_declaration = """export default function AdminProjects() {
  const [projectList, setProjectList] = useState(projects.map(p => ({...p, status: 'Tayang'})));

  const toggleStatus = (idx) => {
    const newList = [...projectList];
    newList[idx].status = newList[idx].status === 'Tayang' ? 'Draft' : 'Tayang';
    setProjectList(newList);
  };
"""
content = re.sub(r"export default function AdminProjects\(\) {\n", state_declaration, content)

# Map over projectList instead of projects
content = content.replace("projects.map(proj => (", "projectList.map((proj, idx) => (")

# Replace the static status badge with a clickable switch/toggle
old_status = """                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EE] border border-[#A7D7B5] text-[#227236] text-[11px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Tayang</span>
                    </div>
                  </td>"""

new_status = """                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => toggleStatus(idx)}
                      className={`inline-flex items-center justify-between w-24 px-1 py-1 rounded-full border transition-colors ${
                        proj.status === 'Tayang' 
                          ? 'bg-[#EBF5EE] border-[#A7D7B5]' 
                          : 'bg-[#FFF0F0] border-[#FFCDD2]'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full shadow-sm transition-transform ${
                        proj.status === 'Tayang'
                          ? 'translate-x-16 bg-[#227236] text-white'
                          : 'translate-x-0 bg-[#D32F2F] text-white'
                      }`}>
                        {proj.status === 'Tayang' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`absolute ml-8 text-[10px] font-bold uppercase tracking-wider ${
                        proj.status === 'Tayang' ? 'text-[#227236]' : 'hidden'
                      }`}>Tayang</span>
                      <span className={`absolute ml-2 text-[10px] font-bold uppercase tracking-wider ${
                        proj.status === 'Draft' ? 'text-[#D32F2F]' : 'hidden'
                      }`}>Draft</span>
                    </button>
                  </td>"""

# Wait, `absolute` in a `button` which is not `relative`? 
# A standard switch is easier. Let me write a better custom toggle button.
better_new_status = """                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => toggleStatus(idx)}
                      className={`relative inline-flex items-center w-[90px] h-8 rounded-full border transition-all overflow-hidden ${
                        proj.status === 'Tayang' 
                          ? 'bg-[#EBF5EE] border-[#A7D7B5]' 
                          : 'bg-[#FAF4EE] border-[#E8DFD5]'
                      }`}
                    >
                      {/* Text Tayang (Left) */}
                      <span className={`absolute left-2 text-[10px] font-bold uppercase tracking-wider transition-opacity ${
                        proj.status === 'Tayang' ? 'opacity-100 text-[#227236]' : 'opacity-0'
                      }`}>Tayang</span>
                      
                      {/* Text Draft (Right) */}
                      <span className={`absolute right-3 text-[10px] font-bold uppercase tracking-wider transition-opacity ${
                        proj.status === 'Draft' ? 'opacity-100 text-[#837466]' : 'opacity-0'
                      }`}>Draft</span>

                      {/* The Toggle Knob */}
                      <div className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full shadow-sm transition-all duration-300 ${
                        proj.status === 'Tayang'
                          ? 'left-[62px] bg-[#227236] text-white'
                          : 'left-1 bg-[#685E55] text-white'
                      }`}>
                        {proj.status === 'Tayang' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  </td>"""

content = content.replace(old_status, better_new_status)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'w') as f:
    f.write(content)
