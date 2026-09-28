import { useState } from 'react';
import { Monitor } from 'lucide-react';
import DossierModal from '../../components/DossierModal';

export default function LivePreviewWrapper({ children, title = 'Live Preview' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState('principal');

  const onOpenModal = (key) => {
    setModalKey(key);
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-white border border-[#E8DFD5] rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#E8DFD5] bg-[#FAF7F2]">
          <div className="w-8 h-8 rounded-lg bg-[#C88238]/10 flex items-center justify-center">
            <Monitor className="w-4 h-4 text-[#C88238]" />
          </div>
          <div>
            <h3 className="text-[14px] font-bold text-[#2C2520]">{title}</h3>
            <p className="text-[11px] text-[#685E55]">Tampilan node seperti di halaman utama. Klik untuk membuka popup modal.</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-green-700">LIVE</span>
          </div>
        </div>

        {/* Preview Area — Dark Detective Board */}
        <div className="cork-texture relative p-6 md:p-10 min-h-[320px] overflow-hidden">
          <div className="flex flex-wrap gap-8 items-start justify-center" style={{ transformOrigin: 'top center' }}>
            {typeof children === 'function' ? children({ onOpenModal }) : children}
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
