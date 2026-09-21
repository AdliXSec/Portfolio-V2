import { achievements } from '../data/achievements';
import { Trophy, Award, ShieldCheck, BadgeCheck, Star, Medal, Search } from 'lucide-react';

const iconMap = { Trophy, Award, ShieldCheck, BadgeCheck, Star, Medal };

export default function AchievementsSection({ id, onOpenModal }) {
  const grouped = {
    competition: achievements.filter((a) => a.type === 'competition'),
    certification: achievements.filter((a) => a.type === 'certification'),
    recognition: achievements.filter((a) => a.type === 'recognition'),
  };

  return (
    <article id={id} 
      className="evidence-card rotate-[1.2deg] relative z-25 rounded-xl bg-[#fcf8e3] text-[#3c3822] p-6 sm:p-7 shadow-[0_20px_45px_rgba(0,0,0,0.8)] border border-[#ded3be]"
      onClick={() => onOpenModal && onOpenModal('achievements')}
    >
      <div className="pushpin -top-3 left-1/2 -translate-x-1/2" />
      <div className="tape-strip absolute -top-3 right-8 w-16 h-6 rotate-[12deg]" />
      <div className="tape-strip absolute bottom-4 -left-4 w-12 h-5 rotate-[85deg]" />

      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ded3be]/80 pr-24">
        <div className="flex items-center gap-2 text-[#554b38]">
          <ShieldCheck className="w-5 h-5 text-[#8c7435]" />
          <h3 className="font-headline text-[19px] font-bold tracking-tight uppercase">
            Commendations
          </h3>
        </div>
        <span className="font-mono text-[10px] text-[#8c7435] font-bold border border-[#8c7435]/40 px-2 py-0.5 rounded">
          VERIFIED
        </span>
      </div>

      <div className="space-y-5">
        {/* Competitions */}
        {grouped.competition.length > 0 && (
          <div>
            <div className="font-mono text-[10px] text-[#8c7435] uppercase tracking-widest font-bold mb-2">
              COMPETITION VICTORIES
            </div>
            <div className="space-y-2">
              {grouped.competition.map((item, i) => {
                const Icon = iconMap[item.icon] || Trophy;
                return (
                  <div key={i} className="flex gap-2.5 bg-[#f4ecd2] p-2.5 rounded-lg border border-[#e8dcb8]">
                    <div className="mt-0.5 text-[#8c7435]"><Icon className="w-4 h-4" /></div>
                    <div className="flex-1">
                      <div className="font-body text-[13px] font-bold leading-tight">{item.title}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-mono text-[10px] text-[#6c614c]">{item.organization}</span>
                        <span className="font-mono text-[10px] font-bold bg-[#e8dcb8] px-1.5 py-0.5 rounded text-[#554b38]">{item.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Certifications */}
        {grouped.certification.length > 0 && (
          <div>
            <div className="font-mono text-[10px] text-[#8c7435] uppercase tracking-widest font-bold mb-2">
              PROFESSIONAL CERTIFICATIONS
            </div>
            <div className="space-y-2">
              {grouped.certification.map((item, i) => {
                const Icon = iconMap[item.icon] || BadgeCheck;
                return (
                  <div key={i} className="flex gap-2.5 bg-[#f4ecd2] p-2.5 rounded-lg border border-[#e8dcb8]">
                    <div className="mt-0.5 text-[#006650]"><Icon className="w-4 h-4" /></div>
                    <div className="flex-1">
                      <div className="font-body text-[13px] font-bold leading-tight">{item.title.split(' — ')[0]}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-mono text-[10px] text-[#6c614c]">{item.organization}</span>
                        <span className="font-mono text-[10px] font-bold bg-[#e8dcb8] px-1.5 py-0.5 rounded text-[#554b38]">{item.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recognitions */}
        {grouped.recognition.length > 0 && (
          <div>
            <div className="font-mono text-[10px] text-[#8c7435] uppercase tracking-widest font-bold mb-2">
              PUBLIC RECOGNITION
            </div>
            <div className="space-y-2">
              {grouped.recognition.map((item, i) => {
                const Icon = iconMap[item.icon] || Star;
                return (
                  <div key={i} className="flex gap-2.5 bg-[#f4ecd2] p-2.5 rounded-lg border border-[#e8dcb8]">
                    <div className="mt-0.5 text-[#d32f2f]"><Icon className="w-4 h-4" /></div>
                    <div className="flex-1">
                      <div className="font-body text-[13px] font-bold leading-tight">{item.title}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-mono text-[10px] text-[#6c614c]">{item.organization}</span>
                        <span className="font-mono text-[10px] font-bold bg-[#e8dcb8] px-1.5 py-0.5 rounded text-[#554b38]">{item.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-[#ded3be] text-center">
        <span className="font-mono text-[10px] text-[#6c614c] font-bold tracking-widest uppercase">
          /// OFFICIAL RECORD ///
        </span>
      </div>
    </article>
  );
}
