import { profile } from '../data/profile';
import { Shield, Download, MapPin } from 'lucide-react';
import { certifications } from '../data/achievements';
import { GitHubCalendar } from 'react-github-calendar';

export default function HeroSection({ id, onOpenModal, onDownloadCV }) {
  return (
    <article id={id}
      className="evidence-card rotate-[-1.2deg] relative w-full rounded-3xl bg-[#1a1c22]/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_35px_80px_rgba(0,0,0,0.92)] border border-outline-variant/50"
      onClick={() => onOpenModal('principal')}
    >
      {/* Pushpin & tape */}
      <div className="pushpin -top-3.5 left-1/2 -translate-x-1/2" />
      <div className="tape-strip absolute -top-3 left-8 w-20 h-6 -rotate-12" />

      {/* Stamp badge */}
      <div className="absolute top-5 right-5 z-20 pointer-events-none">
        <span className="px-3 py-1 rounded border-2 border-red-500/80 text-error font-mono text-[11px] font-bold tracking-widest uppercase bg-red-950/70 shadow-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 " />
          SUBJECT 101 [INSPECT]
        </span>
      </div>

      {/* Polaroid Photo */}
      <div className="relative w-full rounded-2xl bg-[#0e1014] p-3 shadow-xl mb-6 border border-surface-container">
        <div className="absolute top-2 right-4 w-4 h-9 rounded-full border-2 border-on-surface-variant/60 z-20 pointer-events-none rotate-6" />
        <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-surface-container-low">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt={`Cinematic portrait of ${profile.name}`}
            src={profile.imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-transparent to-transparent opacity-85" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[11px] font-mono text-tertiary border border-outline-variant/30">
            <MapPin className="w-3 h-3 text-secondary" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-1.5 mb-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-primary uppercase tracking-widest font-bold">PRINCIPAL SUBJECT</span>
          <span className="font-mono text-[11px] text-secondary font-medium">{profile.title}</span>
        </div>
        <h1 className="font-headline text-[30px] sm:text-[32px] text-on-surface font-semibold tracking-tight leading-tight">
          {profile.name}
        </h1>
        <p className="font-headline text-[17px] text-primary italic leading-snug">
          {profile.subtitle}
        </p>
        <p className="font-body text-[13.5px] text-on-surface-variant mt-2 leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Certifications */}
      <div className="mb-5">
        <div className="text-[10px] font-mono uppercase tracking-widest text-outline mb-2">Verified Professional Certifications:</div>
        <div className="flex flex-wrap gap-1.5">
          {certifications.map((cert) => (
            <span key={cert} className="px-2.5 py-1 rounded text-[11px] font-mono bg-surface-container text-on-surface border border-outline-variant/40">
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="mb-6 p-4 rounded-xl bg-[#0c0e12] border border-outline-variant/30 flex flex-col gap-3 shadow-inner overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-outline">
          <span>Target Activity Log (GitHub)</span>
          <span className="text-primary font-bold">[{profile.githubUsername}]</span>
        </div>
        <div className="w-full overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[650px] w-max mx-auto">
            <GitHubCalendar 
              username={profile.githubUsername} 
              colorScheme="dark"
              theme={{
                dark: ['#1e2024', '#5c3a21', '#965a25', '#c8863f', '#fec486']
              }}
              fontSize={11}
              blockSize={10}
              blockMargin={3}
            />
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button
          className="flex-1 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-mono text-[13px] font-bold text-center tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(254,196,134,0.3)] flex items-center justify-center gap-2 btn-press"
          onClick={() => onOpenModal('principal')}
        >
          <Shield className="w-4 h-4" />
          <span>Inspect Dossier</span>
        </button>
        <button
          className="px-4 py-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-[12px] transition-colors flex items-center justify-center gap-1.5 border border-outline-variant/40 shadow-sm btn-press"
          onClick={onDownloadCV}
        >
          <Download className="w-4 h-4 text-secondary" />
          <span>Full CV</span>
        </button>
      </div>
    </article>
  );
}
