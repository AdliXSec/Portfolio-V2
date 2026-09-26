import { Fingerprint } from 'lucide-react';
import { profile } from '../data/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-6">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-mono text-[12px]">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-primary" />
          <span className="text-on-surface font-semibold">CASE ARCHIVE 101:</span>
          <span>{profile.name}</span>
        </div>
        <div className="flex items-center gap-4 text-outline">
          <span>© {currentYear} ALL RIGHTS RESERVED</span>
          <span>•</span>
          <span className="text-secondary">{profile.title}</span>
        </div>
      </div>
    </footer>
  );
}
