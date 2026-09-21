import { experiences } from '../data/experience';
import { FolderOpen, Search } from 'lucide-react';

export default function ExperienceCard({ id, onOpenModal }) {
  return (
    <article id={id}
      className="evidence-card rotate-[2.5deg] relative z-30 rounded-2xl bg-[#eadecb] text-[#1c1d20] p-6 sm:p-7 shadow-[0_24px_50px_rgba(0,0,0,0.75)] border border-[#d2c3ac] "
      onClick={() => onOpenModal('timeline')}
    >
      <div className="pushpin -top-3 left-10" />
      <div className="absolute -top-3.5 right-8 px-4 py-0.5 rounded-t-md bg-[#d8c8b0] border-t border-x border-[#c4b196] font-mono text-[10px] text-[#4d4029] uppercase tracking-widest font-bold flex items-center gap-1.5">
        <span>DOSSIER FILE // RECORD 02</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#006650]" />
      </div>

      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#cfbfa8]">
        <div className="flex items-center gap-2">
          <FolderOpen className="w-5 h-5 text-[#633d09]" />
          <h3 className="font-body text-[17px] font-bold text-[#23201a] tracking-tight uppercase">
            Service Record &amp; Timeline
          </h3>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#dacbbe] text-[#554a36] font-mono text-[10px] font-bold">VERIFIED OPS</span>
      </div>

      <div className="relative pl-5 space-y-4 text-left">
        <div className="absolute left-1.5 top-2.5 bottom-2.5 w-[2px] bg-[#b3a189]" />
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full ring-2 ring-[#eadecb] ${exp.color === 'secondary' ? 'bg-[#006650]' : exp.color === 'primary' ? 'bg-[#633d09]' : 'bg-[#7a6d59]'
              }`} />
            <div className="flex items-baseline justify-between">
              <span className={`font-mono text-[11px] font-bold ${exp.color === 'secondary' ? 'text-[#006650]' : exp.color === 'primary' ? 'text-[#633d09]' : 'text-[#554b38]'
                }`}>{exp.period}</span>
              <span className="text-[10px] font-mono text-[#6c614c]">{exp.location}</span>
            </div>
            <div className="font-body text-[15px] font-bold text-[#1a1c20] leading-snug">{exp.role}</div>
            <div className="font-headline text-[13px] text-[#5b513e] italic">{exp.company}</div>
            <p className="font-body text-[12px] text-[#494132] mt-1 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#cfbfa8] flex items-center justify-between text-[11px] font-mono text-[#633d09]">
        <span className="font-medium">Complete dossier records indexed</span>
        <span className="font-bold hover:underline inline-flex items-center gap-1">
          CLICK TO EXPAND DOSSIER {'>'}
        </span>
      </div>
    </article>
  );
}
