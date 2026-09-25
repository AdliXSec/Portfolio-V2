import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CrimsonThreads from './components/CrimsonThreads';
import HeroSection from './components/HeroSection';
import PhilosophyMemo from './components/PhilosophyMemo';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import TechStackSection from './components/TechStackSection';
import AchievementsSection from './components/AchievementsSection';
import ChatRoomMemo from './components/ChatRoomMemo';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DossierModal from './components/DossierModal';
import { projects } from './data/projects';
import { profile } from './data/profile';
import { init3DTilt, initYarnPhysics } from './utils/animations';

export default function App() {
  const [yarnActive, setYarnActive] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState('principal');
  const [stampActive, setStampActive] = useState(false);

  // Dynamic Title, Meta Description, SEO, and Favicon
  useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
    
    // Meta Description for SEO
    const cleanBio = profile.bio.replace(/"/g, "'").substring(0, 155) + "...";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', cleanBio);
    
    // Open Graph for social sharing
    const setOgMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    setOgMeta('og:title', `${profile.name} — ${profile.title}`);
    setOgMeta('og:description', cleanBio);
    setOgMeta('og:type', 'website');
    
    if (profile.imageUrl) {
      setOgMeta('og:image', profile.imageUrl);
      
      // Dynamic Favicon
      let favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = profile.imageUrl;
    }
  }, []);


  // Flashlight cursor effect & GSAP initializations
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize interactive physics robustly
    const timers = [
      setTimeout(() => { init3DTilt(); if (yarnActive) initYarnPhysics(); }, 100),
      setTimeout(() => { init3DTilt(); if (yarnActive) initYarnPhysics(); }, 500),
      setTimeout(() => { init3DTilt(); if (yarnActive) initYarnPhysics(); }, 1500)
    ];

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timers.forEach(clearTimeout);
    };
  }, [yarnActive]);

  const openModal = useCallback((key) => {
    setModalKey(key);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const toggleYarn = useCallback(() => {
    setYarnActive((prev) => !prev);
  }, []);

  const resetBoard = useCallback(() => {
    if (!yarnActive) setYarnActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [yarnActive]);

  const downloadCV = useCallback(() => {
    alert("Fetching encrypted dossier file: 'Naufal-Syahruradli.pdf' [SHA256: 8a4c...d921]");
  }, []);

  return (
    <div className="flashlight-canvas min-h-screen flex flex-col">
      {/* Header */}
      <Header onOpenModal={openModal} onDownloadCV={downloadCV} />

      {/* Main Canvas */}
      <main className="w-full pt-20 bg-background flex-1 flex flex-col items-center">
        {/* Sub Header */}
        <SubHeader yarnActive={yarnActive} onToggleYarn={toggleYarn} onResetBoard={resetBoard} />

        {/* The Detective Corkboard Canvas */}
        <div
          className="relative w-full max-w-[1440px] px-4 sm:px-8 py-8 md:py-10 flex-1 overflow-hidden cork-texture min-h-[980px]"
          id="investigation-canvas"
        >
          {/* Atmospheric lighting */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-background/50 to-[#0c0e12]/90" />
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-36 right-1/4 w-[550px] h-[550px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Crimson Threads SVG */}
          <CrimsonThreads visible={yarnActive} />

          {/* Main Board Layout Wrapper */}
          <div className="relative z-20 w-full flex flex-col gap-10 lg:gap-14 items-center">

            {/* TOP TIER: Profile & Background */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Left Column: About & Tech */}
              <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                <PhilosophyMemo id="node-philosophy" onOpenModal={openModal} />
                <TechStackSection id="node-tech" onOpenModal={openModal} />
              </div>

              {/* Center Column: Profile Hero */}
              <div className="flex flex-col items-center relative z-[35] order-1 lg:order-2">
                <HeroSection id="node-hero" onOpenModal={openModal} onDownloadCV={downloadCV} />
              </div>

              {/* Right Column: Experience */}
              <div className="flex flex-col gap-6 lg:gap-8 order-3 lg:order-3">
                <ExperienceCard id="node-experience" onOpenModal={openModal} />
              </div>
            </div>

            {/* DIVIDER: Section Transition */}
            <div className="flex items-center gap-4 opacity-70 w-full py-4 mt-2">
              <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
              <span className="font-mono text-[11px] font-bold tracking-widest text-outline uppercase">Attached Case Files & Achievements</span>
              <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
            </div>

            {/* BOTTOM TIER: Projects & Certificates */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onOpenModal={openModal}
                />
              ))}
              <AchievementsSection id="node-achievements" onOpenModal={openModal} />
              <ChatRoomMemo id="node-chat" />
            </div>

          </div>

          {/* Contact Section */}
          <ContactSection onOpenModal={openModal} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <DossierModal
        isOpen={modalOpen}
        onClose={closeModal}
        modalKey={modalKey}
        onDownloadCV={downloadCV}
      />
    </div>
  );
}
