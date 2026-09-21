import { profile } from './profile';
import { experiences } from './experience';
import { techCategories } from './techstack';
import { achievements } from './achievements';
import { projects } from './projects';

export const generateCaseData = () => {
  const caseData = {
    principal: {
      ref: 'PRINCIPAL SUBJECT // CIPHER-01 [EXPANDED]',
      tag: 'SUBJECT BIOGRAPHY & CAPABILITIES',
      title: profile.name,
      quote: profile.subtitle,
      body: (
        <div className="space-y-5 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          <p>{profile.extendedBio}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 font-mono text-center">
            {profile.stats.map(s => (
              <div key={s.label} className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[22px] font-bold text-primary">{s.value}</div>
                <div className="text-[11px] text-outline">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="font-mono text-[12px] uppercase tracking-wider text-on-surface font-bold">Key Domains of Expertise:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] font-mono">
              {profile.domains.map(d => (
                <div key={d.label} className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center gap-2">
                  <span>{d.icon}</span><span>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    philosophy: {
      ref: 'EXHIBIT // AXIOM MEMO [REF: PHIL-01]',
      tag: 'CORE PHILOSOPHY & METHODOLOGY',
      title: 'Kernel-Level Adversary Modeling Axiom',
      quote: profile.philosophy,
      body: (
        <div className="space-y-4 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          {profile.extendedPhilosophy.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2 font-mono text-[12.5px]">
            <div className="text-primary font-bold">CORE METHODOLOGICAL PILLARS:</div>
            <ul className="list-disc pl-5 space-y-1 text-on-surface">
              {profile.methodologyPillars.map((pillar, i) => (
                <li key={i}>{pillar}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    timeline: {
      ref: 'DOSSIER FILE // RECORD 02 [CAREER TIMELINE]',
      tag: 'OPERATIONAL CAREER PROGRESSION',
      title: 'Service Record, Engagements & Impact',
      quote: 'Verified operational track record leading high-consequence offensive testing and resilient detection engineering.',
      body: (
        <div className="space-y-6">
          <div className="border-l-2 border-secondary/60 pl-4 space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className={`flex items-center justify-between text-${exp.color || 'outline'} font-mono text-[12px] font-bold`}>
                  <span>{exp.period}</span><span className="uppercase">{exp.location}</span>
                </div>
                <h4 className="text-on-surface font-bold text-[18px]">{exp.role} — {exp.company}</h4>
                <p className="text-on-surface-variant text-[14px]">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-tertiary">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    tech: {
      ref: 'INVENTORY // CAPABILITIES MATRIX',
      tag: 'TACTICAL TOOLSET & INFRASTRUCTURE',
      title: 'Tech Stack & Weaponized Instrumentation',
      quote: 'Comprehensive mastery over languages, frameworks, security tooling, and high-availability infrastructure.',
      body: (
        <div className="space-y-4 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techCategories.map((cat, idx) => {
              const colors = ['secondary', 'primary', 'tertiary', 'error'];
              const c = colors[idx % colors.length];
              return (
                <div key={cat.category} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <div className={`text-${c} font-mono text-[12px] font-bold mb-3 flex items-center gap-2 uppercase`}>
                    <span className={`w-1.5 h-1.5 bg-${c} rounded-full`}></span>{cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map(item => (
                      <span key={item} className="px-2 py-1 rounded bg-surface-container font-mono text-[11px] text-on-surface">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    achievements: {
      ref: 'RECORD // COMMENDATIONS & CLEARANCE',
      tag: 'VERIFIED CREDENTIALS & VICTORIES',
      title: 'Commendations & Certifications',
      quote: 'Industry-standard validations of offensive mastery and defensive architectural capability.',
      body: (
        <div className="space-y-6 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          <div className="space-y-3">
            <h4 className="text-on-surface font-mono text-[13px] font-bold tracking-widest uppercase border-b border-outline-variant/30 pb-1">COMPETITION VICTORIES</h4>
            <div className="grid gap-3 text-[13.5px]">
              {achievements.filter(a => a.type === 'competition').map((a, i) => (
                <div key={i} className="p-3 bg-surface-container-low rounded-lg border-l-2 border-primary flex items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <strong className="text-on-surface block leading-snug">{a.title}</strong>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-outline text-[12.5px] mt-1 gap-2">
                      <span>{a.organization}</span>
                      <span className="font-mono text-[11px] shrink-0">{a.year}</span>
                    </div>
                  </div>
                  {a.image && (
                    <div className="shrink-0 w-24 sm:w-32 aspect-[1.414/1] rounded shadow-sm border border-outline-variant/30 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-on-surface font-mono text-[13px] font-bold tracking-widest uppercase border-b border-outline-variant/30 pb-1">PROFESSIONAL CERTIFICATIONS</h4>
            <div className="grid gap-3 text-[13.5px]">
              {achievements.filter(a => a.type === 'certification').map((a, i) => (
                <div key={i} className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high flex items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <strong className="text-secondary block leading-snug">{a.title}</strong>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-outline text-[12.5px] mt-1 gap-2">
                      <span>{a.organization}</span>
                      <span className="font-mono text-[11px] shrink-0">{a.year}</span>
                    </div>
                  </div>
                  {a.image && (
                    <div className="shrink-0 w-24 sm:w-32 aspect-[1.414/1] rounded shadow-sm border border-outline-variant/30 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-on-surface font-mono text-[13px] font-bold tracking-widest uppercase border-b border-outline-variant/30 pb-1">PUBLIC RECOGNITION</h4>
            <div className="grid gap-3 text-[13.5px]">
              {achievements.filter(a => a.type === 'recognition').map((a, i) => (
                <div key={i} className="p-3 bg-surface-container-low rounded-lg border-l-2 border-tertiary flex items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <strong className="text-on-surface block leading-snug">{a.title}</strong>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-outline text-[12.5px] mt-1 gap-2">
                      <span>{a.organization}</span>
                      <span className="font-mono text-[11px] shrink-0">{a.year}</span>
                    </div>
                  </div>
                  {a.image && (
                    <div className="shrink-0 w-24 sm:w-32 aspect-[1.414/1] rounded shadow-sm border border-outline-variant/30 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    dispatch: {
      ref: 'SECURE INTAKE // TELEGRAM CIPHER-SEC',
      tag: 'CONSULTATION & RED TEAM ENGAGEMENTS',
      title: 'Initiate Secure Consultation Engagement',
      quote: 'Confidential adversary simulation, vulnerability research, and low-level Linux systems auditing.',
      body: (
        <div className="space-y-4 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          <p>Accepting advisory and technical leadership engagements for Q2/Q3 2025:</p>
          <ul className="list-disc pl-5 font-mono text-[13px] text-on-surface space-y-1.5">
            <li>Full-Scope Enterprise Adversary Emulation (Red Teaming)</li>
            <li>Kernel Telemetry & eBPF Threat Detection Architecture</li>
            <li>Embedded Device & Industrial SCADA Protocol Security Audits</li>
            <li>Executive Security Advisory & Post-Breach Root Cause Analysis</li>
          </ul>
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 font-mono text-[12px]">
            <div className="text-secondary font-bold mb-1">Direct Encrypted Communication:</div>
            <div className="text-on-surface">Email: {profile.email}</div>
            <div className="text-outline">PGP Fingerprint: {profile.pgp}</div>
          </div>
        </div>
      ),
    }
  };

  // Add projects dynamically
  projects.forEach((proj) => {
    caseData[proj.id] = {
      ref: `CASE FILE #${proj.caseNumber} // REPO ${proj.id.toUpperCase()} [CONFIDENTIAL]`,
      tag: proj.label,
      title: `${proj.codename}: ${proj.title}`,
      quote: proj.description,
      body: (
        <div className="space-y-4 font-body text-[14.5px] leading-relaxed text-on-surface-variant">
          <p>{proj.description}</p>
          
          {proj.image && (
            <div className="w-full rounded-xl overflow-hidden border border-outline-variant/30 my-4 shadow-sm">
              <img src={proj.image} alt={proj.title} className="w-full h-auto max-h-72 object-cover opacity-90" />
            </div>
          )}
          
          {proj.codeSnippet && (
            <div className="rounded-xl bg-surface-container-lowest p-4 font-mono text-[12px] border border-surface-container-high">
              <div className="flex items-center justify-between text-outline text-[11px] pb-2 mb-2 border-b border-surface-container-high">
                <span>{proj.codeSnippet.filename}</span>
                <span className="text-secondary font-bold">STATUS: PRODUCTION TESTED</span>
              </div>
              <pre className="text-on-surface overflow-x-auto whitespace-pre-wrap">{proj.codeSnippet.code}</pre>
            </div>
          )}

          {proj.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(proj.stats).map(([key, value]) => (
                <div key={key} className="p-2 rounded bg-surface-container-low border border-outline-variant/30 text-center">
                  <div className="text-[16px] font-bold text-on-surface">{value}</div>
                  <div className="text-[10px] text-outline uppercase tracking-wider">{key}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-mono text-[11px] text-outline uppercase tracking-widest">Tech Stack Profile</div>
              <div className="flex flex-wrap gap-1">
                {proj.techStack.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-[11px] font-mono">{t}</span>
                ))}
              </div>
            </div>
            {proj.github && (
               <div className="space-y-2">
                 <div className="font-mono text-[11px] text-outline uppercase tracking-widest">Source Material</div>
                 <a href={proj.github} target="_blank" rel="noopener noreferrer" className="block text-center py-2 rounded bg-[#233143] text-[#a4c2e6] hover:bg-[#2a3b50] transition-colors border border-[#39485a] font-mono text-[11px] font-bold">
                   [ ACCESS GITHUB REPOSITORY ]
                 </a>
               </div>
            )}
          </div>
        </div>
      )
    };
  });

  return caseData;
};
