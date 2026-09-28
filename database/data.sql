-- ==============================================================================
-- ⚡ Skema Database PostgreSQL — High Performance Hybrid
-- Didesain untuk Portfolio Naufal Syahruradli
-- ==============================================================================

-- Bersihkan tabel lama jika ada
DROP TABLE IF EXISTS livechat;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS achievements;
DROP TABLE IF EXISTS tech_categories;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS node_headers;

-- ==============================================================================
-- 1. STRUKTUR TABEL (SCHEMA)
-- ==============================================================================

-- Tabel 1: Node Headers (Menyimpan konfigurasi header modal)
CREATE TABLE node_headers (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node       VARCHAR(50) NOT NULL UNIQUE,
    ref        TEXT NOT NULL DEFAULT '',
    tag        TEXT NOT NULL DEFAULT '',
    title      TEXT NOT NULL DEFAULT '',
    quote      TEXT NOT NULL DEFAULT '',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel 2: Profile (Single Row - Data Utama Profil & Sosial)
CREATE TABLE profile (
    id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                  VARCHAR(255) NOT NULL,
    title                 VARCHAR(255),
    subtitle              VARCHAR(255),
    location              VARCHAR(255),
    email                 VARCHAR(255),
    pgp                   VARCHAR(255),
    github_username       VARCHAR(100),
    image_url             TEXT,
    bio                   TEXT,
    philosophy            TEXT,
    philosophy_short      TEXT,
    extended_bio          TEXT,

    -- JSONB: array of objects (struktur key-value)
    socials               JSONB NOT NULL DEFAULT '[]',
    stats                 JSONB NOT NULL DEFAULT '[]',
    domains               JSONB NOT NULL DEFAULT '[]',

    -- TEXT[]: array of plain strings
    instruments           TEXT[] NOT NULL DEFAULT '{}',
    extended_philosophy   TEXT[] NOT NULL DEFAULT '{}',
    methodology_pillars   TEXT[] NOT NULL DEFAULT '{}',

    updated_at            TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_profile_socials ON profile USING GIN (socials);
CREATE INDEX idx_profile_stats ON profile USING GIN (stats);


-- Tabel 3: Experiences (Pengalaman Kerja)
CREATE TABLE experiences (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role        VARCHAR(255) NOT NULL,
    company     VARCHAR(255) NOT NULL,
    period      VARCHAR(100) NOT NULL,
    location    VARCHAR(255),
    color       VARCHAR(50) DEFAULT 'primary',
    description TEXT,

    tags        TEXT[] NOT NULL DEFAULT '{}',
    images      TEXT[] NOT NULL DEFAULT '{}',

    sort_order  INT NOT NULL DEFAULT 0,
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_experiences_sort ON experiences (sort_order);


-- Tabel 4: Tech Categories (Teknologi / Stack)
CREATE TABLE tech_categories (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category   VARCHAR(255) NOT NULL,
    icon       VARCHAR(50),
    items      TEXT[] NOT NULL DEFAULT '{}',
    sort_order INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_tech_sort ON tech_categories (sort_order);


-- Tabel 5: Achievements (Sertifikasi & Penghargaan)
CREATE TABLE achievements (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type         VARCHAR(50) NOT NULL CHECK (type IN ('competition','certification','recognition')),
    title        VARCHAR(500) NOT NULL,
    organization VARCHAR(255),
    year         VARCHAR(10),
    image        TEXT,
    sort_order   INT NOT NULL DEFAULT 0,
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_achievements_type ON achievements (type);
CREATE INDEX idx_achievements_sort ON achievements (sort_order);


-- Tabel 6: Contact (Pengaturan Kartu Kontak & Modal)
CREATE TABLE contact (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    card_overline     VARCHAR(255),
    card_title        VARCHAR(255),
    card_description  TEXT,
    card_button_text  VARCHAR(255),
    modal_description TEXT,
    services          TEXT[] NOT NULL DEFAULT '{}',
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);


-- Tabel 7: Projects (Proyek Portofolio)
CREATE TABLE projects (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug             VARCHAR(100) NOT NULL UNIQUE,
    case_number      VARCHAR(10),
    label            VARCHAR(100),
    codename         VARCHAR(255),
    title            VARCHAR(500) NOT NULL,
    description      TEXT,
    color            VARCHAR(50) DEFAULT 'primary',
    image            TEXT,
    github           TEXT,
    target           TEXT,
    sticky_note      TEXT,
    snippet_filename VARCHAR(255),
    snippet_code     TEXT,

    tech_stack       TEXT[] NOT NULL DEFAULT '{}',
    stats            JSONB NOT NULL DEFAULT '{}',

    status           VARCHAR(20) DEFAULT 'Draft' CHECK (status IN ('Tayang','Draft')),
    view_count       INT NOT NULL DEFAULT 0,
    sort_order       INT NOT NULL DEFAULT 0,
    updated_at       TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_projects_status ON projects (status);
CREATE INDEX idx_projects_sort ON projects (sort_order);
CREATE INDEX idx_projects_slug ON projects (slug);
CREATE INDEX idx_projects_stats ON projects USING GIN (stats);


-- Tabel 8: Messages (Data form pesan dari pengunjung)
CREATE TABLE messages (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL,
    subject    VARCHAR(500),
    body       TEXT NOT NULL,
    is_read    BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_messages_read ON messages (is_read, created_at DESC);




-- Tabel 9: Livechat (Pesan Terminal Real-time)
CREATE TABLE livechat (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender     VARCHAR(255) NOT NULL,
    role       VARCHAR(50) DEFAULT 'visitor' CHECK (role IN ('visitor', 'admin')),
    message    TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_livechat_time ON livechat (created_at DESC);

-- ==============================================================================
-- 2. SEED DATA (DATA AWAL)
-- ==============================================================================

-- Data: Node Headers
INSERT INTO node_headers (node, ref, tag, title, quote) VALUES
('profile',      'EXHIBIT // AXIOM MEMO [REF: PHIL-01]', 'CORE PHILOSOPHY & METHODOLOGY', 'Kernel-Level Adversary Modeling Axiom', '"Keamanan sejati bukan sekadar menambal celah, melainkan merancang arsitektur sistem yang tangguh sejak baris kode pertama ditulis hingga tahap deployment."'),
('experience',   'DOSSIER FILE // RECORD 02 [CAREER TIMELINE]', 'OPERATIONAL CAREER PROGRESSION', 'Service Record, Engagements & Impact', 'Verified operational track record leading high-consequence offensive testing and resilient detection engineering.'),
('techstack',    'INVENTORY // CAPABILITIES MATRIX', 'TACTICAL TOOLSET & INFRASTRUCTURE', 'Tech Stack & Weaponized Instrumentation', 'Comprehensive mastery over languages, frameworks, security tooling, and high-availability infrastructure.'),
('achievements', 'RECORD // COMMENDATIONS & CLEARANCE', 'VERIFIED CREDENTIALS & VICTORIES', 'Commendations & Certifications', 'Industry-standard validations of offensive mastery and defensive architectural capability.'),
('contact',      'SECURE INTAKE // TELEGRAM CIPHER-SEC', 'CONSULTATION & RED TEAM ENGAGEMENTS', 'Initiate Secure Consultation Engagement', 'Confidential adversary simulation, vulnerability research, and low-level Linux systems auditing.');

-- Data: Profile
INSERT INTO profile (name, title, subtitle, location, email, pgp, github_username, image_url, bio, philosophy, philosophy_short, extended_bio, socials, stats, domains, instruments, extended_philosophy, methodology_pillars) VALUES (
  'Naufal Syahruradli',
  'Software Developer & Cyber Security Analyst',
  'Security Researcher, CTF Player & Backend Developer',
  'Sidoarjo / Surabaya | Indonesia',
  'naufalsyahruradli@gmail.com',
  'N/A',
  'AdliXSec',
  'https://i.postimg.cc/15SfVGZ0/adli.jpg',
  'Mahasiswa Sistem Informasi dengan minat mendalam di pengembangan aplikasi dan keamanan siber. Berpengalaman memecahkan masalah kompleks, berpikiran terbuka, dan memiliki passion kuat di dunia teknologi. Menggabungkan keahlian software development (backend/web) dengan analisis keamanan untuk membangun sistem yang tangguh dan aman.',
  '"Keamanan sejati bukan sekadar menambal celah, melainkan merancang arsitektur sistem yang tangguh sejak baris kode pertama ditulis hingga tahap deployment."',
  'Pendekatan keamanan dan pengembangan tidak bisa dipisahkan. Setiap endpoint API, struktur database, dan integrasi hardware IoT harus dibangun dengan fondasi vulnerability assessment yang mendalam dan mitigasi proaktif.',
  'Naufal beroperasi di titik temu antara pengembangan backend berkinerja tinggi dan rekayasa keamanan siber.',
  '[{"platform":"GitHub","url":"https://github.com/AdliXSec","icon":"Github"},{"platform":"LinkedIn","url":"https://linkedin.com/in/naufal-syahruradli","icon":"Linkedin"},{"platform":"TikTok","url":"https://www.tiktok.com/@dlixonly._","icon":"Link2"},{"platform":"HackTheBox","url":"https://hackthebox.com/","icon":"Box"}]'::jsonb,
  '[{"value":"C3SA","label":"Certified Cyber Security Analyst"},{"value":"HOF","label":"CSIRT Kutai Kartanegara"},{"value":"WEB-RTA","label":"Certified Web Red Team An."},{"value":"(1st)","label":"Best Defender Cyber Combat"}]'::jsonb,
  '[{"icon":"🛡️","label":"Web App Security & Pentesting"},{"icon":"💻","label":"Backend & API Development"},{"icon":"🔍","label":"OSINT & Threat Intelligence"},{"icon":"⚙️","label":"IoT & Hardware Integration"}]'::jsonb,
  ARRAY['Python / Go','Laravel / FastAPI','React.js','PostgreSQL','Kali Linux / Burp Suite'],
  ARRAY['Dalam lanskap digital saat ini, mengandalkan pemindaian keamanan otomatis tidaklah cukup. Arsitektur harus diuji dari sudut pandang penyerang nyata, mengidentifikasi kelemahan logika dan kerentanan Zero-Day sebelum mereka dieksploitasi.','Fokus utama saya adalah menciptakan ekosistem keamanan yang proaktif, menggabungkan intelijen ancaman real-time dengan rekayasa infrastruktur yang efisien.'],
  ARRAY['Pengujian penetrasi aplikasi web berbasis logika kerentanan mendalam (Vulnerability Assessment).','Pengembangan arsitektur backend dan REST API yang efisien, aman, dan dapat diskalakan.','Integrasi Threat Intelligence dan OSINT ke dalam alur kerja operasi keamanan modern.','Eksperimentasi sistem perangkat keras (IoT) dengan mikrokontroler untuk deteksi anomali.']
);

-- Data: Experiences
INSERT INTO experiences (role, company, period, location, color, description, tags, images, sort_order) VALUES
('Lead Security Engineer', 'CyberGuard Defense Labs', '2023 — PRESENT', 'Jakarta & Remote', 'secondary', 'Directing adversary simulation harnesses. Developed custom Go-based ransomware emulators for purple team exercises.', ARRAY['eBPF / Go','Threat Modeling','Kernel Internals'], '{}', 0),
('Senior Penetration Tester', 'Sentinel Tech Security Group', '2021 — 2023', 'Offensive Unit', 'primary', 'Executed 80+ penetration assessments across critical infrastructure. Discovered zero-day vulnerability in popular industrial SCADA software.', ARRAY['Red Teaming','Active Directory','Zero-Day Research'], '{}', 1),
('Security Software Engineer', 'Apex Systems Core Infrastructure', '2018 — 2021', 'Infrastructure', 'outline', 'Hardened distributed Go and Rust microservices. Implemented zero-trust architecture resulting in 40% reduction in attack surface.', ARRAY['Rust','Go','Linux IPC'], '{}', 2);

-- Data: Tech Categories
INSERT INTO tech_categories (category, icon, items, sort_order) VALUES
('Languages & Frameworks', 'Code2', ARRAY['Python','Go','Rust','C/C++','JavaScript','React','FastAPI','Laravel'], 0),
('Security & Analysis', 'Shield', ARRAY['Wireshark','Burp Suite','Ghidra','OSINT Tools','Kali Linux','Metasploit'], 1),
('Database & Infrastructure', 'Database', ARRAY['PostgreSQL','Redis','Docker','Kubernetes','AWS','GCP','Terraform','CI/CD'], 2),
('Hardware & IoT', 'Cpu', ARRAY['ESP32','Arduino','Modbus/TCP','SCADA Systems','Firmware Analysis','Serial Protocols'], 3);

-- Data: Projects
INSERT INTO projects (slug, case_number, label, codename, title, description, color, image, github, target, sticky_note, snippet_filename, snippet_code, tech_stack, stats, status, view_count, sort_order) VALUES
('obsidian', '01', 'KERNEL HARNESS', 'PROJECT OBSIDIAN', 'C2 & Stealth Kernel Probing', 'Zero-overhead telemetry harness written in Go and eBPF/C. Captures arbitrary Linux namespace transitions directly from the kernel ring-buffer prior to userland LD_PRELOAD spoofing.', 'primary', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80', 'https://github.com', NULL, NULL, 'obsidian_kprobe.c', 'SEC("kprobe/sys_execve")
int probe_exec(struct pt_regs *ctx) {
    struct event_data data = {};
    data.pid = bpf_get_current_pid_tgid() >> 32;
    bpf_ringbuf_output(&events, &data, sizeof(data), 0);
    return 0;
}', ARRAY['Go','eBPF','Rust','C'], '{"stars":"1.2k","overhead":"<1.2%"}'::jsonb, 'Tayang', 1245, 0),
('sentinel', '02', 'ACTIVE DEFENSE', 'SENTINELSCAN', 'Cloud Defense Asset Engine', 'Distributed asynchronous scanner orchestrating parallel multi-cloud asset verification. Audits AWS, Azure, and bare-metal edge nodes.', 'secondary', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', NULL, NULL, NULL, NULL, NULL, ARRAY['Go','Python','AWS','Azure','GCP'], '{"accuracy":"99.4%","scanVelocity":"14,000 req/s","falsePositives":"< 0.6%"}'::jsonb, 'Tayang', 843, 1),
('scada', '03', 'ADVISORY', 'CVE-2024-29188', 'Industrial SCADA Remote Bypass', 'Discovered unauthenticated remote memory corruption flaw enabling arbitrary register overwrite in regional grid controllers.', 'error', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', NULL, 'TARGET: MODBUS/TCP GATEWAY HARDWARE', '"Vendor firmware patch certified across lab regression suites. Zero exploitation observed post-patch." — CISA Coordination Note 14', NULL, NULL, ARRAY['Modbus/TCP','ICS','Firmware Analysis'], '{"cvss":"9.8","severity":"CRITICAL"}'::jsonb, 'Tayang', 3102, 2),
('threatintel', '04', 'INTELLIGENCE', 'DARKPULSE', 'Threat Intelligence Platform', 'Real-time threat intelligence aggregation platform correlating IOCs from 50+ feeds with automated YARA rule generation.', 'tertiary', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', NULL, NULL, NULL, NULL, NULL, ARRAY['Python','FastAPI','PostgreSQL','Docker'], '{"feeds":"50+","dailyIOCs":"2M+"}'::jsonb, 'Tayang', 512, 3);

-- Data: Contact
INSERT INTO contact (card_overline, card_title, card_description, card_button_text, modal_description, services) VALUES (
  'DISPATCH TELEGRAM',
  'Initiate Secure Consultation',
  'Available for adversary emulation engagements, architecture security reviews, and low-level Linux/kernel telemetry consulting. Transmit your project requirements or reach out directly.',
  '[VIEW DISPATCH DETAILS]',
  'Accepting advisory and technical leadership engagements for Q2/Q3 2025:',
  ARRAY['Full-Scope Enterprise Adversary Emulation (Red Teaming)','Kernel Telemetry & eBPF Threat Detection Architecture','Embedded Device & Industrial SCADA Protocol Security Audits','Executive Security Advisory & Post-Breach Root Cause Analysis']
);

-- Data: Achievements
INSERT INTO achievements (type, title, organization, year, image, sort_order) VALUES
('competition', 'Juara 1 CTF National — Best Defense Strategy', 'CyberSec Indonesia Summit', '2023', 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80', 0),
('competition', 'Runner-up Software Development Competition', 'National IT Innovation Challenge', '2022', NULL, 1),
('certification', 'OSCP — Offensive Security Certified Professional', 'Offensive Security', '2023', 'https://images.unsplash.com/photo-1614064641913-a520faff3d8b?w=800&q=80', 2),
('certification', 'CISSP — Certified Information Systems Security Professional', 'ISC²', '2022', NULL, 3),
('certification', 'CEH Master — Certified Ethical Hacker', 'EC-Council', '2021', NULL, 4),
('recognition', 'Hall of Fame — CSIRT Vulnerability Disclosure', 'National Cyber Security Agency', '2024', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80', 5),
('recognition', 'CISA Acknowledged — CVE-2024-29188 Discovery', 'CISA (US-CERT)', '2024', NULL, 6);

-- Data: Livechat
INSERT INTO livechat (sender, role, message, created_at) VALUES
('System', 'admin', 'Connection established. P2P encryption active.', NOW() - INTERVAL '1 hour'),
('Naufal Syahruradli', 'admin', 'Halo! Terima kasih sudah menyempatkan waktu untuk mampir dan melihat isi "Case Archive" saya. Semoga Anda menemukan sesuatu yang menarik di sini. Mari terhubung dan berkolaborasi! 👋', NOW() - INTERVAL '55 minutes'),
('Guest_0x8F9', 'visitor', 'Halo, saya sangat tertarik dengan arsitektur eBPF yang Anda buat di Project Obsidian. Boleh diskusi lebih lanjut?', NOW() - INTERVAL '10 minutes');
