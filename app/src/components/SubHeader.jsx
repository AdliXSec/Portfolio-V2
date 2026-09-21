import { Search, GitBranch, FilterX } from 'lucide-react';

export default function SubHeader({ yarnActive, onToggleYarn, onResetBoard }) {
  return (
    <div className="w-full max-w-[1440px] px-6 sm:px-8 pt-5 pb-3 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/20">
      <div className="flex items-center gap-3.5">
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#241313] border border-error/30">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d32f2f] shadow-[0_0_8px_rgba(211,47,47,0.8)] animate-pulse" />
          <span className="font-mono text-[11px] text-on-error-container font-semibold tracking-wider uppercase">
            INVESTIGATION BOARD // DOSSIER NO. 904
          </span>
        </div>
        <span className="hidden md:inline font-headline text-[14px] text-on-surface-variant italic">
          Principal Case: Systemic Kernel Probing &amp; Infrastructure Adversary Emulation
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 text-[11px] font-mono text-primary">
          <Search className="w-3.5 h-3.5" />
          <span>Click any document to inspect Dossier [Zoom 🔍]</span>
        </div>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all font-mono text-[11px] border border-outline-variant/30 btn-press"
          onClick={onToggleYarn}
        >
          <GitBranch className="w-4 h-4 text-[#ff897d]" />
          <span>{yarnActive ? 'Hide Crimson Threads' : 'Show Crimson Threads'}</span>
        </button>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all font-mono text-[11px] border border-outline-variant/30 btn-press"
          onClick={onResetBoard}
        >
          <FilterX className="w-4 h-4" />
          <span className="hidden sm:inline">Reset Board Focus</span>
        </button>
      </div>
    </div>
  );
}
