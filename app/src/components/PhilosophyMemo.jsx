import { profile } from '../data/profile';
import { StickyNote, Search } from 'lucide-react';

export default function PhilosophyMemo({ id, onOpenModal }) {
  return (
    <article id={id}
      className="evidence-card rotate-[-2.8deg] relative z-20 rounded-xl bg-[#f7f2e7] text-[#1c1d20] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.68)] border border-[#ded4c3] "
      onClick={() => onOpenModal('philosophy')}
    >
      <div className="pushpin -top-3 left-1/2 -translate-x-1/2" />
      <div className="tape-strip absolute -top-3 right-6 w-16 h-6 rotate-[15deg]" />

      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#ded4c3]/90 pr-24">
        <span className="font-mono text-[11px] tracking-wider uppercase text-[#633d09] font-bold flex items-center gap-1.5">
          <StickyNote className="w-4 h-4" />
          EXHIBIT // AXIOM MEMO
        </span>
        <span className="font-mono text-[10px] text-[#827863]">REF: PHIL-01</span>
      </div>

      <blockquote className="font-headline text-[20px] leading-snug italic text-[#1a1c20] mb-4">
        {profile.philosophy}
      </blockquote>

      <p className="font-body text-[13px] text-[#4d463c] leading-relaxed mb-4">
        {profile.philosophyShortBody}
      </p>

      <div className="pt-2 border-t border-[#ded4c3]/80">
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#786e5b] mb-2 font-semibold">
          Specialized Instrumentation:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {profile.philosophyInstruments.map((tool) => (
            <span key={tool} className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#eae2d0] text-[#2c2d30] font-medium border border-[#ded4c3]">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-2.5 flex items-center justify-between text-[11px] font-mono text-[#633d09]">
        <span className="font-semibold italic font-headline">Original handwritten field briefing</span>
        <span className="text-primary font-bold hover:underline flex items-center gap-0.5">Click to read full dossier →</span>
      </div>
    </article>
  );
}
