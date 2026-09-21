import { Code, CloudCog, AlertTriangle, Brain } from 'lucide-react';

export default function ProjectCard({ project, index, onOpenModal }) {
  const isEven = index % 2 === 0;
  const rotation = isEven ? 'rotate-[2.4deg]' : 'rotate-[-2.1deg]';

  const colorMap = {
    primary: { border: 'border-primary/30', bg: 'bg-[#332213]', text: 'text-primary', dot: 'bg-primary' },
    secondary: { border: 'border-secondary/30', bg: 'bg-[#192b23]', text: 'text-secondary', dot: 'bg-secondary' },
    error: { border: 'border-red-500/30', bg: 'bg-red-950', text: 'text-error', dot: 'bg-red-500' },
    tertiary: { border: 'border-tertiary/30', bg: 'bg-[#1a2030]', text: 'text-tertiary', dot: 'bg-tertiary' },
  };
  const colors = colorMap[project.color] || colorMap.primary;

  const renderBadge = () => {
    if (project.stats.stars) {
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-mono text-[11px] font-bold shrink-0 border border-secondary/30">
          {project.stats.stars} ★ Stars
        </span>
      );
    }
    if (project.stats.accuracy) {
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-mono text-[11px] font-bold shrink-0 border border-primary/30">
          {project.stats.accuracy} Accuracy
        </span>
      );
    }
    if (project.stats.cvss) {
      return (
        <span className="px-2.5 py-0.5 rounded bg-red-950/80 text-error font-mono text-[10px] font-bold border border-red-500/40">
          CVSS {project.stats.cvss} {project.stats.severity}
        </span>
      );
    }
    if (project.stats.feeds) {
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-mono text-[11px] font-bold shrink-0 border border-tertiary/30">
          {project.stats.feeds} Feeds
        </span>
      );
    }
    return null;
  };

  const iconMap = { primary: Code, secondary: CloudCog, error: AlertTriangle, tertiary: Brain };
  const Icon = iconMap[project.color] || Code;

  return (
    <article id={`node-project-${index}`}
      className={`evidence-card relative rounded-2xl ${project.color === 'error' ? 'bg-surface-container-high/95' : 'bg-surface-container/95'
        } backdrop-blur-md p-6 shadow-2xl transition-all duration-300 ${rotation} border border-outline-variant/40 ${index < 3 ? '' : ''
        } ${isEven ? '' : ''}`}
      style={{ zIndex: 20 + index * 5 }}
      onClick={() => onOpenModal(project.id)}
    >
      <div className={`pushpin -top-3 ${isEven ? 'right-10' : 'left-8'}`} />
      {isEven && <div className="tape-strip absolute -top-3 left-10 w-16 h-5 -rotate-6" />}



      {/* Header */}
      {project.color === 'error' ? (
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-container pr-24">
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-error" />
            <span className="font-mono text-[11px] text-error uppercase font-bold tracking-wider">
              {project.codename}
            </span>
          </div>
          {renderBadge()}
        </div>
      ) : (
        <div className="flex items-start justify-between gap-3 pt-2 mb-2">
          <div>
            <span className={`font-mono text-[11px] ${colors.text} font-semibold uppercase tracking-wider`}>
              {project.codename}
            </span>
            <h3 className="font-body text-[18px] text-on-surface leading-tight mt-0.5 font-bold">
              {project.title}
            </h3>
          </div>
          {renderBadge()}
        </div>
      )}

      {project.color === 'error' && (
        <>
          <div className="font-body text-[17px] text-on-surface font-bold leading-snug mb-1">
            {project.codename}: {project.title}
          </div>
          {project.target && <div className="font-mono text-[10px] text-outline mb-2">{project.target}</div>}
        </>
      )}

      {project.image && (
        <div className="w-full h-36 mb-3 rounded-lg overflow-hidden border border-outline-variant/30 opacity-90 hover:opacity-100 transition-opacity">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="font-body text-[13px] text-on-surface-variant mb-3 leading-relaxed">{project.description}</p>

      {/* Code snippet */}
      {project.codeSnippet && (
        <div className="rounded-xl bg-surface-container-lowest p-3 font-mono text-[11px] text-tertiary shadow-inner mb-3 border border-surface-container-high/80">
          <div className="flex items-center justify-between text-outline text-[10px] pb-1.5 mb-1.5 border-b border-surface-container-high">
            <span>{project.codeSnippet.filename}</span>
            <span className="text-secondary font-semibold">OVERHEAD: {project.stats.overhead}</span>
          </div>
          <pre className="text-on-surface-variant whitespace-pre-wrap text-[11px]">
            <code>{project.codeSnippet.code}</code>
          </pre>
        </div>
      )}

      {/* Stats grid for sentinel */}
      {project.stats.scanVelocity && (
        <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-surface-container-lowest/80 text-[11px] font-mono mb-3 border border-surface-container-high">
          <div><span className="text-outline">SCAN VELOCITY:</span> <span className="text-on-surface font-semibold">{project.stats.scanVelocity}</span></div>
          <div><span className="text-outline">FALSE POSITIVES:</span> <span className="text-secondary font-semibold">{project.stats.falsePositives}</span></div>
        </div>
      )}

      {/* Sticky note */}
      {project.stickyNote && (
        <div className="relative p-3 rounded-xl bg-[#fcf8e3] text-[#3c3822] shadow-md my-2 border border-[#ded3be]">
          <div className="font-headline italic text-[12.5px] leading-snug">{project.stickyNote}</div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-outline pt-1">
        <span className={`${colors.text} flex items-center gap-1 font-medium`}>
          <Icon className="w-3.5 h-3.5" />
          {project.techStack.join(' / ')}
        </span>
        <span className={`${colors.text} hover:underline flex items-center gap-1 font-medium`}>
          CLICK TO INSPECT {'>'}
        </span>
      </div>
    </article>
  );
}
