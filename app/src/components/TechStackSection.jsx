import { techCategories } from '../data/techstack';
import { Code2, Shield, Database, Cpu, Terminal, Search } from 'lucide-react';
import { useEffect, useRef } from 'react';

const iconMap = { Code2, Shield, Database, Cpu };

export default function TechStackSection({ id, onOpenModal }) {

  return (
    <article id={id} 
      
      className="evidence-card rotate-[1.9deg] relative z-30 rounded-2xl bg-[#15171c] p-6 sm:p-7 shadow-[0_24px_50px_rgba(0,0,0,0.75)] border border-outline-variant/40"
      onClick={() => onOpenModal && onOpenModal('tech')}
    >
      <div className="pushpin -top-3 right-10" />
      <div className="tape-strip absolute -top-3 left-8 w-20 h-6 rotate-[-5deg]" />

      <div className="absolute -top-3.5 right-20 px-3 py-0.5 rounded-t-md bg-[#233143] border-t border-x border-[#39485a] font-mono text-[10px] text-tertiary uppercase tracking-widest font-bold flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
        INDEX // INSTRUMENTATION
      </div>

      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-outline-variant/30 pr-16">
        <Terminal className="w-5 h-5 text-tertiary" />
        <h3 className="font-body text-[17px] font-bold text-on-surface tracking-tight uppercase">
          Tech Stack & Capabilities
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        {techCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Code2;
          return (
            <div key={cat.category} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-tertiary">
                <Icon className="w-4 h-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold">
                  {cat.category}
                </span>
                <div className="flex-1 h-px bg-outline-variant/20" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-[11px] font-mono bg-surface-container-low text-on-surface-variant border border-outline-variant/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
