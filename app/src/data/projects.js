export const projects = [
  {
    id: 'obsidian',
    caseNumber: '01',
    label: 'KERNEL HARNESS',
    codename: 'PROJECT OBSIDIAN',
    title: 'C2 & Stealth Kernel Probing',
    description: 'Zero-overhead telemetry harness written in Go and eBPF/C. Captures arbitrary Linux namespace transitions directly from the kernel ring-buffer prior to userland LD_PRELOAD spoofing.',
    stats: { stars: '1.2k', overhead: '<1.2%' },
    techStack: ['Go', 'eBPF', 'Rust', 'C'],
    codeSnippet: { filename: 'obsidian_kprobe.c', code: 'SEC("kprobe/sys_execve")\nint probe_exec(struct pt_regs *ctx) {\n    struct event_data data = {};\n    data.pid = bpf_get_current_pid_tgid() >> 32;\n    bpf_ringbuf_output(&events, &data, sizeof(data), 0);\n    return 0;\n}' },
    github: 'https://github.com',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
  },
  {
    id: 'sentinel',
    caseNumber: '02',
    label: 'ACTIVE DEFENSE',
    codename: 'SENTINELSCAN',
    title: 'Cloud Defense Asset Engine',
    description: 'Distributed asynchronous scanner orchestrating parallel multi-cloud asset verification. Audits AWS, Azure, and bare-metal edge nodes.',
    stats: { accuracy: '99.4%', scanVelocity: '14,000 req/s', falsePositives: '< 0.6%' },
    techStack: ['Go', 'Python', 'AWS', 'Azure', 'GCP'],
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  },
  {
    id: 'scada',
    caseNumber: '03',
    label: 'ADVISORY',
    codename: 'CVE-2024-29188',
    title: 'Industrial SCADA Remote Bypass',
    description: 'Discovered unauthenticated remote memory corruption flaw enabling arbitrary register overwrite in regional grid controllers.',
    stats: { cvss: '9.8', severity: 'CRITICAL' },
    techStack: ['Modbus/TCP', 'ICS', 'Firmware Analysis'],
    color: 'error',
    target: 'TARGET: MODBUS/TCP GATEWAY HARDWARE',
    stickyNote: '"Vendor firmware patch certified across lab regression suites. Zero exploitation observed post-patch." — CISA Coordination Note 14',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
  },
  {
    id: 'threatintel',
    caseNumber: '04',
    label: 'INTELLIGENCE',
    codename: 'DARKPULSE',
    title: 'Threat Intelligence Platform',
    description: 'Real-time threat intelligence aggregation platform correlating IOCs from 50+ feeds with automated YARA rule generation.',
    stats: { feeds: '50+', dailyIOCs: '2M+' },
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    color: 'tertiary',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  }
];
