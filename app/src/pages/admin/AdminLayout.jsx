import { Outlet, Link, useLocation } from 'react-router-dom';
import { Pin, LayoutDashboard, FolderOpen, MessageSquare, Settings, Globe, Bell, User, ArrowUpRight, Briefcase, Code2, Award, Phone } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="font-jakarta min-h-screen bg-[#FAF7F2] text-[#2C2520]">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#FFFFFF] border-r border-[#E8DFD5] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col pb-6">
          {/* Logo / Brand */}
          <div className="h-16 px-6 flex items-center gap-3 border-b border-[#F0EAE1] sticky top-0 bg-white z-10">
            <div className="w-8 h-8 rounded-lg bg-[#C88238] flex items-center justify-center text-white shadow-sm">
              <Pin className="w-4 h-4" />
            </div>
            <span className="font-bold text-[18px] text-[#2C2520] tracking-tight">CMS - Naufal Adli</span>
          </div>

          {/* Navigation Menu */}
          <nav className="px-4 py-4 flex flex-col gap-1.5">
            <span className="px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-2">Utama</span>
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/dashboard') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            <span className="px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4">Manajemen Konten</span>
            <Link
              to="/admin/profile"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/profile') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <User className="w-5 h-5" />
              <span>Profil & Biodata</span>
            </Link>
            <Link
              to="/admin/projects"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/projects') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <FolderOpen className="w-5 h-5" />
              <span>Proyek & Portofolio</span>
            </Link>
            <Link
              to="/admin/experience"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/experience') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Pengalaman Kerja</span>
            </Link>
            <Link
              to="/admin/techstack"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/techstack') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <Code2 className="w-5 h-5" />
              <span>Tech Stack</span>
            </Link>
            <Link
              to="/admin/achievements"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/achievements') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <Award className="w-5 h-5" />
              <span>Sertifikasi & Prestasi</span>
            </Link>
            <Link
              to="/admin/contact"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/contact') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <Phone className="w-5 h-5" />
              <span>Kontak & Layanan</span>
            </Link>

            <span className="px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4">Komunikasi</span>
            <Link
              to="/admin/messages"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/messages') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Pesan Masuk</span>
            </Link>

            <span className="px-4 text-[11px] font-bold text-[#837466] uppercase tracking-wider mb-1 mt-4">Sistem</span>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${path.includes('/settings') ? 'bg-[#FAF4EE] text-[#C88238]' : 'text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520]'
                }`}
            >
              <Settings className="w-5 h-5" />
              <span>Pengaturan</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="pl-64">
        {/* Top Header Bar */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8DFD5] z-40 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#685E55] hover:text-[#2C2520] transition-colors">
              <Globe className="w-4 h-4" />
              <span>Lihat Website</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-[#685E55] hover:bg-[#FAF4EE] hover:text-[#2C2520] transition-colors relative border border-transparent hover:border-[#E8DFD5]">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#C88238]"></span>
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-[#E8DFD5]">
              <div className="text-right hidden sm:block">
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
        <main className="w-full pt-16 min-h-screen bg-[#FAF7F2] px-6 pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
