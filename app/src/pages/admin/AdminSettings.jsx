import { useState, useEffect } from 'react';
import { Shield, Globe, Key, Lock, Save, Database, HardDrive, Cpu, AlertTriangle } from 'lucide-react';

export default function AdminSettings() {
  // Gunakan localStorage untuk simulasi konfigurasi sebelum ada DB
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [defaultPreview, setDefaultPreview] = useState(() => {
    return localStorage.getItem('default_live_preview') === 'false' ? false : true;
  });

  const handleTogglePreview = () => {
    const newVal = !defaultPreview;
    setDefaultPreview(newVal);
    localStorage.setItem('default_live_preview', newVal.toString());
  };

  return (
    <div className="py-2 sm:py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#2C2520] tracking-tight">Pengaturan Sistem</h1>
          <p className="text-[13px] sm:text-[14px] text-[#685E55] mt-1">
            Konfigurasi aplikasi, keamanan, dan preferensi website secara global.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all self-start md:self-center">
          <Save className="w-4 h-4" />
          <span>Simpan Konfigurasi</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* General Settings */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-[#F0EAE1] pb-3">
            <Globe className="w-5 h-5 text-[#C88238]" />
            <h2 className="text-[16px] font-bold text-[#2C2520]">Pengaturan Global</h2>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nama Website (Title Tag)</label>
            <input type="text" defaultValue="Naufal Syahruradli | Portfolio" className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Meta Description (SEO)</label>
            <textarea rows="3" defaultValue="Security Researcher & Backend Developer Portfolio. Discover adversary emulation engagements and secure infrastructure design." className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg border border-[#E8DFD5]">
            <div>
              <h3 className="text-[13px] font-bold text-[#2C2520]">Maintenance Mode</h3>
              <p className="text-[11px] text-[#685E55] mt-0.5">Website publik akan menampilkan halaman perbaikan.</p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" id="toggle_maintenance" checked={maintenanceMode} onChange={() => setMaintenanceMode(!maintenanceMode)} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#FAF4EE] appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" />
              <label htmlFor="toggle_maintenance" className="toggle-label block overflow-hidden h-5 rounded-full bg-[#E8DFD5] cursor-pointer"></label>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg border border-[#E8DFD5]">
            <div>
              <h3 className="text-[13px] font-bold text-[#2C2520]">Tampilkan Live Preview (Default)</h3>
              <p className="text-[11px] text-[#685E55] mt-0.5">Otomatis membuka jendela live preview di setiap halaman konten.</p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" id="toggle_preview" checked={defaultPreview} onChange={handleTogglePreview} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#FAF4EE] appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" />
              <label htmlFor="toggle_preview" className="toggle-label block overflow-hidden h-5 rounded-full bg-[#E8DFD5] cursor-pointer"></label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8DFD5] shadow-sm flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-[#F0EAE1] pb-3">
            <Shield className="w-5 h-5 text-[#C88238]" />
            <h2 className="text-[16px] font-bold text-[#2C2520]">Keamanan & Autentikasi</h2>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Ganti Password Admin</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#837466] absolute left-3 top-2.5" />
              <input type="password" placeholder="Masukkan password baru" className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Konfirmasi Password Baru</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#837466] absolute left-3 top-2.5" />
              <input type="password" placeholder="Ulangi password baru" className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
            </div>
          </div>

          <div className="mt-2">
            <button className="px-4 py-2 bg-[#FAF4EE] hover:bg-[#F2EAE1] text-[#2C2520] text-[12px] font-bold rounded-lg border border-[#E8DFD5] transition-colors flex items-center gap-2">
              <Key className="w-4 h-4" /> Generate New API Key
            </button>
            <p className="text-[11px] text-[#837466] mt-2">API Key saat ini: <code className="bg-[#FAF7F2] px-1 py-0.5 rounded border border-[#E8DFD5]">pk_live_8f9...3a2</code></p>
          </div>
        </div>

        {/* System Information */}
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
            <Database className="w-5 h-5 text-[#C88238]" />
            <h2 className="text-[16px] font-bold text-[#2C2520]">Status Infrastruktur & Database</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-green-100 text-green-700 rounded-lg shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#2C2520]">PostgreSQL Connection</h4>
                <p className="text-[11px] text-[#685E55] mt-1">Status: <span className="text-green-600 font-bold">Connected (0.8ms ping)</span></p>
                <p className="text-[11px] text-[#685E55]">DB: portfolio_db_prod</p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#2C2520]">Storage Usage</h4>
                <p className="text-[11px] text-[#685E55] mt-1">Images & Assets: 45 MB</p>
                <div className="w-full h-1.5 bg-[#E8DFD5] rounded-full mt-2">
                  <div className="h-full bg-blue-500 rounded-full w-[15%]"></div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FFF8F8] border border-[#FFCDD2] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-red-100 text-red-700 rounded-lg shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-red-900">Backup Status</h4>
                <p className="text-[11px] text-red-700 mt-1">No automated backup detected in the last 7 days.</p>
                <button className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200">Configure Backup</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
