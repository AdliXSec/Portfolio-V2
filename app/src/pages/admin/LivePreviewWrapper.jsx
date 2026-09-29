import { useState } from 'react';
import { Monitor, Eye, EyeOff } from 'lucide-react';
import DossierModal from '../../components/DossierModal';

export default function LivePreviewWrapper({ children, title = 'Live Preview' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState('principal');
  const [showPreview, setShowPreview] = useState(() => {
    // Ambil default state dari pengaturan simulasi (localstorage)
    const stored = localStorage.getItem('default_live_preview');
    return stored === 'false' ? false : true;
  });

  const onOpenModal = (key) => {
    setModalKey(key);
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-white border border-[#E8DFD5] rounded-xl shadow-sm overflow-hidden transition-all">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 sm:px-6 py-4 bg-[#FAF7F2]">
          <div className="w-8 h-8 shrink-0 rounded-lg bg-[#C88238]/10 flex items-center justify-center">
            <Monitor className="w-4 h-4 text-[#C88238]" />
          </div>
          <div>
            <h3 className="text-[14px] font-bold text-[#2C2520]">{title}</h3>
            <p className="text-[11px] text-[#685E55] hidden sm:block">Tampilan node seperti di halaman utama. Klik untuk membuka popup modal.</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold transition-colors ${showPreview ? 'bg-white border-[#E8DFD5] text-[#2C2520] hover:bg-[#FAF4EE]' : 'bg-[#FAF4EE] border-[#E8DFD5] text-[#685E55] hover:bg-white'}`}
            >
              {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{showPreview ? 'Sembunyikan' : 'Tampilkan'}</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-green-700">LIVE</span>
            </div>
          </div>
        </div>

        {/* Preview Area — Dark Detective Board */}
        <div className={`grid transition-all duration-300 ease-in-out ${showPreview ? 'grid-rows-[1fr] opacity-100 border-t border-[#2C2520]' : 'grid-rows-[0fr] opacity-0 border-t-0'}`}>
          <div className="overflow-hidden">
            <div className="cork-texture relative p-4 sm:p-6 md:p-10 min-h-[320px] max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#C88238]/50 scrollbar-track-transparent">
              <div className="flex flex-wrap gap-8 items-start justify-center" style={{ transformOrigin: 'top center' }}>
                {typeof children === 'function' ? children({ onOpenModal }) : children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared DossierModal */}
      <DossierModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalKey={modalKey}
      />
    </>
  );
}
