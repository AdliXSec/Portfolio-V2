export const experienceModal = {
  ref: 'DOSSIER FILE // RECORD 02 [CAREER TIMELINE]',
  tag: 'OPERATIONAL CAREER PROGRESSION',
  title: 'Service Record, Engagements & Impact',
  quote: 'Verified operational track record leading high-consequence offensive testing and resilient detection engineering.'
};

export const experiences = [
  {
    period: '2023 — PRESENT',
    location: 'Jakarta & Remote',
    images: [],
    role: 'Lead Security Engineer',
    company: 'CyberGuard Defense Labs',
    description: 'Directing adversary simulation harnesses. Drove 68% MTTD reduction while ingesting over 120M kernel events/day across enterprise nodes.',
    tags: ['eBPF / Go', 'Threat Modeling', 'Kernel Internals'],
    color: 'secondary'
  },
  {
    period: '2021 — 2023',
    location: 'Offensive Unit',
    images: [],
    role: 'Senior Penetration Tester',
    company: 'Sentinel Tech Security Group',
    description: 'Executed 80+ penetration assessments against financial routing backbones. Discovered and isolated 3 zero-day privilege escalations.',
    tags: ['Red Teaming', 'Active Directory', 'Zero-Day Research'],
    color: 'primary'
  },
  {
    period: '2018 — 2021',
    location: 'Infrastructure',
    images: [],
    role: 'Security Software Engineer',
    company: 'Apex Systems Core Infrastructure',
    description: 'Hardened distributed Go and Rust microservices. Configured memory-safe IPC channels and secure enclave boundaries.',
    tags: ['Rust', 'Go', 'Linux IPC'],
    color: 'outline'
  }
];
