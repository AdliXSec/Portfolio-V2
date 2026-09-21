import { useEffect, useState } from 'react';
import { X, ShieldCheck, Download } from 'lucide-react';
import { generateCaseData } from "../data/modalData";

export default function DossierModal({ isOpen, onClose, modalKey, onDownloadCV }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const caseData = generateCaseData((url) => setSelectedImage(url));
  const data = caseData[modalKey] || caseData.principal;
  const [stampVisible, setStampVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      // Trigger the stamp shortly after modal opens
      const timer = setTimeout(() => setStampVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setStampVisible(false);
      setSelectedImage(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => { 
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          handleClose();
        }
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, selectedImage]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 350); // wait for out animation
  };

  if (!isOpen && !closing) return null;

  return (
    <>
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 ${closing ? 'bg-black/0 backdrop-blur-none opacity-0 pointer-events-none' : 'bg-black/80 backdrop-blur-md opacity-100'}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#14161b] border-2 border-outline-variant/60 shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-on-surface p-6 sm:p-8 transform-gpu ${closing ? 'scale-95 opacity-0 transition-all duration-300 pointer-events-none' : 'modal-folder-open'}`}>
        
        {/* Ink Stamp Overlay */}
        {stampVisible && (
          <div className="pointer-events-none absolute top-4 right-4 sm:top-10 sm:right-10 z-50 mix-blend-screen stamp-animate opacity-0">
            <div className="border-2 sm:border-2 border-error/90 text-error font-mono font-bold text-xl sm:text-2xl tracking-widest p-1.5 sm:p-2 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.4)]">
              DECLASSIFIED
            </div>
          </div>
        )}

        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-red-500  shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-primary">{data.ref}</span>
          </div>
          <button
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface border border-outline-variant/40 font-mono text-[12px] transition-colors btn-press"
            onClick={handleClose}
          >
            <X className="w-4 h-4" />
            <span>Close (Esc)</span>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary font-mono text-[11px] font-bold border border-secondary/30">
              {data.tag}
            </div>
            <h2 className="font-headline text-[26px] sm:text-[30px] font-bold text-on-surface leading-snug">
              {data.title}
            </h2>
            <p className="font-headline text-[17px] text-primary italic leading-snug pb-2 border-b border-outline-variant/30">
              {data.quote}
            </p>
          </div>
          {data.body}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-outline flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>{data.ref}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-bright border border-outline-variant/40 font-mono text-[12px] text-on-surface transition-colors btn-press"
              onClick={onDownloadCV}
            >
              <Download className="w-4 h-4 inline mr-1.5" />
              Download File
            </button>
            <button
              className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-mono text-[12px] font-bold tracking-wider uppercase transition-colors btn-press"
              onClick={handleClose}
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Expanded view" className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl border-2 border-outline-variant/30" />
        </div>
      )}
    </>
  );
}
