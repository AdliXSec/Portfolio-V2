export const profile = {
  name: 'Naufal Syahruradli',
  title: 'Software Developer & Cyber Security Analyst',
  subtitle: 'Principal Security Researcher & Adversary Emulation Specialist',
  location: 'Jakarta // Remote Global',
  email: 'kevin.ardian@cipher-sec.io',
  pgp: '9F84 219B A019 44DC 9981 E8FA C19D 3302',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALvH7ZgPu397yiCLHvCK92ucdJ0kLnjOkbJLbAzfHg_hpWV-5D_O6-FXa7aAQTKpV9m_WepzNs41oQw6b1Txot0a8fIKB202OHLg4DaAMoLV0d6zMUytPKGuelQnwCimi5ydm-6RbSnEH2K-avw9hXrYcmRugRr8BzLmLLPsyzDaNR2jihcBRtVHHWFMOHEi6X6Smu-VHp3PGJw9ku2reWY9mwftknbRwh1wAKwRoJYt8Y2Qlzrob5',
  bio: 'Mahasiswa Sistem Informasi dengan minat mendalam di pengembangan aplikasi dan keamanan siber. Berpengalaman memecahkan masalah kompleks, berpikiran terbuka, dan memiliki passion kuat di dunia teknologi. Menggabungkan keahlian software development (backend/web) dengan analisis keamanan untuk membangun sistem yang tangguh dan aman.',
  philosophy: '"Defense that lacks offensive fluency is merely security theater. True resilience requires active adversary modeling at the kernel boundary."',

  philosophyShortBody: 'Defensive security cannot be built from passive assumptions. Every sensor, harness, and telemetry stream must be architected from deep knowledge of rootkit persistence, hypervisor evasions, and assembly hooks.',
  philosophyInstruments: ['Rust', 'Go', 'eBPF / BCC', 'Linux Kernel', 'Reverse Eng'],

  extendedBio: 'Kevin \u201cCipher\u201d Ardian operates at the intersection of offensive red teaming, Linux kernel internals, and distributed systems defense. With more than six years of proven field experience, Kevin is renowned for dissecting adversarial tradecraft and formulating hardware-level and ring-0 countermeasures.',

  extendedPhilosophy: [
    "In contemporary defensive postures, enterprise security teams frequently rely on perimeter log aggregators, heuristic signature matchers, and application-layer runtime warnings. However, sophisticated modern threat actors routinely operate below libc, executing via raw system call vectors, in-memory bytecode injectors, and kernel ring-0 evasion mechanisms.",
    "My security philosophy centers on Active Adversary Emulation. Every defensive detection rule must be synthesized from a weaponized offensive proof-of-concept."
  ],
  methodologyPillars: [
    "Zero assumptions on userland runtime integrity (Assume LD_PRELOAD compromise).",
    "Real-time ring-buffer sampling utilizing low-overhead eBPF probes.",
    "Continuous adversarial testing against live production shadow graphs.",
    "Memory-safe systems programming in Rust to preclude memory corruption exploits."
  ],

  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '14', label: 'CVEs Published' },
    { value: '80+', label: 'Engagements' },
    { value: '100%', label: 'Verified Audits' }
  ],

  domains: [
    { label: 'Kernel Telemetry (eBPF / kprobes)', icon: '⚡' },
    { label: 'Enterprise Red Teaming & C2', icon: '🛡️' },
    { label: 'Binary Exploitation & Reverse Eng', icon: '🔧' },
    { label: 'SCADA / Industrial Protocol Auditing', icon: '⚙️' }
  ],

  socials: [
    { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { platform: 'TryHackMe', url: 'https://tryhackme.com', icon: 'Shield' },
    { platform: 'HackTheBox', url: 'https://hackthebox.com', icon: 'Box' }
  ]
};
