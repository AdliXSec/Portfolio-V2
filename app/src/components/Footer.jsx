import { Fingerprint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-6">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-mono text-[12px]">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-primary" />
          <span className="text-on-surface font-semibold">CASE ARCHIVE 01:</span>
          <span>Naufal Syahruradli | Portfolio</span>
        </div>
        <div className="flex items-center gap-4 text-outline">
          <span>© 2025 ALL RIGHTS RESERVED</span>
          <span>•</span>
          <span className="text-secondary">SECURITY RESEARCHER &amp; ARCHITECT</span>
        </div>
      </div>
    </footer>
  );
}
