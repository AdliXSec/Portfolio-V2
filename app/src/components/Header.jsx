import { useState } from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { Pin, Mail, Download, Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ onOpenModal, onDownloadCV }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'The Board', href: '#investigation-canvas', active: true },
    { label: 'Biography', action: () => onOpenModal('principal') },
    { label: 'Project', isDropdown: true },
    { label: 'Experience', action: () => onOpenModal('timeline') },
    { label: 'Certifications', action: () => onOpenModal('achievements') },
    { label: 'Contact', href: '#dispatch-card' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111317]/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
      <div className="max-w-[1440px] mx-auto h-20 px-6 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <a className="flex items-center gap-3.5 group" href="#">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-high text-error border border-outline-variant/40 shadow-inner group-hover:border-primary/50 transition-colors">
            <Pin className="w-5 h-5 text-[#ff897d]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-widest text-primary uppercase font-semibold">CASE ARCHIVE 101</span>
              {/* <span className="text-outline-variant text-[10px]">//</span> */}
              <span className="font-mono text-[10px] tracking-wider text-secondary uppercase font-medium">SE | CS | IT</span>
            </div>
            <span className="font-headline text-[17px] text-on-surface tracking-wide">{profile.name}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-surface-container-lowest/90 border border-outline-variant/30 backdrop-blur-md">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div 
                  key={link.label} 
                  className="relative group"
                  onMouseEnter={() => setProjectDropdownOpen(true)}
                  onMouseLeave={() => setProjectDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-1.5 rounded-full font-body text-[13px] transition-all cursor-pointer text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high">
                    {link.label} <ChevronDown className="w-3 h-3" />
                  </button>
                  {projectDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-48 z-50">
                      <div className="w-full py-2 rounded-xl bg-surface-container-high border border-outline-variant/30 overflow-hidden shadow-xl">
                        {projects.map(proj => (
                          <button
                            key={proj.id}
                            onClick={() => { onOpenModal(proj.id); setProjectDropdownOpen(false); }}
                            className="w-full text-left px-4 py-2 font-mono text-[11px] text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors"
                          >
                            {proj.codename}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={link.label}
                className={`px-4 py-1.5 rounded-full font-body text-[13px] transition-all cursor-pointer ${link.active
                  ? 'font-semibold bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                href={link.href || 'javascript:void(0)'}
                onClick={(e) => {
                  if (link.action) { e.preventDefault(); link.action(); }
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-mono text-[12px] font-bold tracking-wide uppercase transition-all shadow-[0_4px_14px_rgba(254,196,134,0.25)] btn-press"
            href="#dispatch-card"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
          <button
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface border border-outline-variant/40 font-mono text-[12px] transition-all shadow-sm hover:border-primary/40 btn-press"
            onClick={onDownloadCV}
          >
            <Download className="w-4 h-4 text-secondary" />
            <span className="hidden md:inline">Download Dossier (PDF)</span>
            <span className="md:hidden">CV</span>
          </button>
          {/* <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-headline font-bold text-sm">
            C
          </div> */}
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant/40 text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-[#111317]/95 backdrop-blur-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                      className="px-4 py-3 rounded-xl font-body text-[14px] text-left text-on-surface-variant hover:bg-surface-container-high flex justify-between items-center"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {projectDropdownOpen && (
                      <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-outline-variant/30 ml-6 mt-1 mb-2">
                        {projects.map(proj => (
                          <button
                            key={proj.id}
                            onClick={() => { onOpenModal(proj.id); setMobileMenuOpen(false); setProjectDropdownOpen(false); }}
                            className="text-left px-4 py-2 font-mono text-[11px] text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-high"
                          >
                            {proj.codename}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  className={`px-4 py-3 rounded-xl font-body text-[14px] transition-all ${link.active
                    ? 'font-semibold bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  href={link.href || 'javascript:void(0)'}
                  onClick={(e) => {
                    if (link.action) { e.preventDefault(); link.action(); }
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
