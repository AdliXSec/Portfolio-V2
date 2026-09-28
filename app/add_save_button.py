import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'r') as f:
    content = f.read()

# Update imports
content = content.replace(
    "import { Pin,", 
    "import { Save, Loader2, CheckCircle2, Pin,"
)

# Add state for saving animation
if 'const [isSaving, setIsSaving] = useState(false);' not in content:
    state_code = """  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleGlobalSave = () => {
    setIsSaving(true);
    setSaveSuccess(false);
    // Simulasi proses API save
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }, 1500);
  };
"""
    content = content.replace("  const [isSidebarOpen, setIsSidebarOpen] = useState(false);", state_code)

# Add the button next to "Lihat Website"
button_code = """
            <Link to="/" target="_blank" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-bold text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-all border border-transparent hover:border-[#E8DFD5]">
              <Globe className="w-4 h-4" />
              <span>Lihat Website</span>
            </Link>
            
            <button 
              onClick={handleGlobalSave}
              disabled={isSaving}
              className={`hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold text-white transition-all shadow-sm ${
                saveSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-[#C88238] hover:bg-[#B86F28]'
              } disabled:opacity-70 disabled:cursor-wait`}
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : saveSuccess ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{isSaving ? 'Menyimpan...' : saveSuccess ? 'Tersimpan!' : 'Simpan Semua Perubahan'}</span>
            </button>
"""

# Replace existing Lihat Website link
pattern = r'<Link to="/" target="_blank" className="hidden sm:inline-flex items-center gap-1 text-\[13px\] font-medium text-\[#685E55\] hover:text-\[#2C2520\] transition-colors">\s*<Globe className="w-4 h-4" />\s*<span>Lihat Website</span>\s*</Link>'
content = re.sub(pattern, button_code.strip(), content, flags=re.DOTALL)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLayout.jsx', 'w') as f:
    f.write(content)
