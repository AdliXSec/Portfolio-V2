import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LogOut, ChevronLeft, ChevronRight, Save, Loader2, CheckCircle2, Pin, LayoutDashboard, FolderOpen, MessageSquare, Settings, Globe, Bell, User, Briefcase, Code2, Award, Phone, Menu, X, Radio } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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


  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [path]);

  return (
    <div className="font-jakarta min-h-screen bg-[#FAF7F2] text-[#2C2520]">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#2C2520]/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-[#FFFFFF] border-r border-[#E8DFD5] flex flex-col justify-between overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0 w-64 z-105' : '-translate-x-full lg:translate-x-0 z-50'} ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}>
        <div className="flex flex-col pb-6">
          {/* Logo / Brand */}
          <div className={`h-16 flex items-center border-b border-[#F0EAE1] sticky top-0 bg-white z-10 transition-all duration-300 ${isCollapsed ? 'px-0 justify-center' : 'px-6 justify-between'}`}>
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-[#C88238] flex items-center justify-center text-white shadow-sm shrink-0">
                <Pin className="w-4 h-4" />
              </div>
              <span className={`font-bold text-[18px] text-[#2C2520] tracking-tight whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>CMS - Adli</span>
            </div>
            <button className="lg:hidden text-[#685E55] hover:text-[#2C2520]" onClick={() => setIsSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="px-4 py-4 flex flex-col gap-1.5">
            <span className={`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-2 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Utama</span>
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/dashboard') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Dashboard</span>
            </Link>

            <span className={`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Manajemen Konten</span>
            <Link
              to="/admin/profile"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/profile') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <User className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Profil & Biodata</span>
            </Link>
            <Link
              to="/admin/projects"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/projects') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <FolderOpen className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Proyek & Portofolio</span>
            </Link>
            <Link
              to="/admin/experience"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/experience') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Briefcase className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Pengalaman Kerja</span>
            </Link>
            <Link
              to="/admin/techstack"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/techstack') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Code2 className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Tech Stack</span>
            </Link>
            <Link
              to="/admin/achievements"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/achievements') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Award className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Sertifikasi & Prestasi</span>
            </Link>
            <Link
              to="/admin/contact"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/contact') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Phone className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Kontak & Layanan</span>
            </Link>

            <span className={`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Komunikasi</span>
            <Link
              to="/admin/messages"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/messages') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Pesan Masuk (Form)</span>
            </Link>
            <Link
              to="/admin/livechat"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/livechat') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Radio className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Live Chat Terminal</span>
            </Link>

            <span className={`px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Sistem</span>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''} px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/settings') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'}`}
            >
              <Settings className="w-5 h-5" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>Pengaturan</span>
            </Link>
          </nav>
        </div>

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
      </aside>


      {/* Main Content Wrapper */}
      <div className={`w-full flex flex-col min-h-screen transition-all duration-300 ease-in-out ${isCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        {/* Top Header Bar */}
        <header className="sticky top-0 h-16 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8DFD5] z-[100] flex items-center justify-between px-4 sm:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" target="_blank" className="inline-flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-lg text-[13px] font-bold text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-all border border-transparent hover:border-[#E8DFD5]">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Lihat Website</span>
            </Link>

            <button
              onClick={handleGlobalSave}
              disabled={isSaving}
              className={`inline-flex items-center gap-1.5 p-2 sm:px-4 sm:py-2 rounded-lg text-[13px] font-bold text-white transition-all shadow-sm ${saveSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-[#C88238] hover:bg-[#B86F28]'
                } disabled:opacity-70 disabled:cursor-wait`}
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : saveSuccess ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{isSaving ? 'Menyimpan...' : saveSuccess ? 'Tersimpan!' : 'Simpan Semua Perubahan'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors relative border border-transparent hover:border-[#E8DFD5]">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#C88238]"></span>
            </button>
            <div className="flex items-center gap-3 sm:pl-3 sm:border-l border-[#E8DFD5]">
              <div className="text-right hidden md:block">
                <div className="text-[13px] font-bold text-[#2C2520]">Admin User</div>
                <div className="text-[11px] text-[#685E55]">Administrator</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F2EAE1] border border-[#E8DFD5] text-[#865305] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Workspace */}
        <main className="flex-1 w-full bg-[#FAF7F2] p-4 sm:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
