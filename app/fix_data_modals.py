import re

# 1. profile.js
with open('/home/leexy/portfolio/app/src/data/profile.js', 'r') as f:
    prof_content = f.read()
if "modalConfig:" not in prof_content:
    prof_insert = """  modalConfig: {
    ref: 'EXHIBIT // AXIOM MEMO [REF: PHIL-01]',
    tag: 'CORE PHILOSOPHY & METHODOLOGY',
    title: 'Kernel-Level Adversary Modeling Axiom',
    quote: '"Keamanan sejati bukan sekadar menambal celah, melainkan merancang arsitektur sistem yang tangguh sejak baris kode pertama ditulis hingga tahap deployment."'
  },"""
    prof_content = re.sub(r'(stats: \[)', f"{prof_insert}\n\n  \\1", prof_content)
    with open('/home/leexy/portfolio/app/src/data/profile.js', 'w') as f:
        f.write(prof_content)

# 2. experience.js
with open('/home/leexy/portfolio/app/src/data/experience.js', 'r') as f:
    exp_content = f.read()
if "experienceModal" not in exp_content:
    exp_insert = """export const experienceModal = {
  ref: 'DOSSIER FILE // RECORD 02 [CAREER TIMELINE]',
  tag: 'OPERATIONAL CAREER PROGRESSION',
  title: 'Service Record, Engagements & Impact',
  quote: 'Verified operational track record leading high-consequence offensive testing and resilient detection engineering.'
};

"""
    with open('/home/leexy/portfolio/app/src/data/experience.js', 'w') as f:
        f.write(exp_insert + exp_content)

# 3. techstack.js
with open('/home/leexy/portfolio/app/src/data/techstack.js', 'r') as f:
    tech_content = f.read()
if "techstackModal" not in tech_content:
    tech_insert = """export const techstackModal = {
  ref: 'INVENTORY // CAPABILITIES MATRIX',
  tag: 'TACTICAL TOOLSET & INFRASTRUCTURE',
  title: 'Tech Stack & Weaponized Instrumentation',
  quote: 'Comprehensive mastery over languages, frameworks, security tooling, and high-availability infrastructure.'
};

"""
    with open('/home/leexy/portfolio/app/src/data/techstack.js', 'w') as f:
        f.write(tech_insert + tech_content)

# 4. achievements.js
with open('/home/leexy/portfolio/app/src/data/achievements.js', 'r') as f:
    achv_content = f.read()
if "achievementsModal" not in achv_content:
    achv_insert = """export const achievementsModal = {
  ref: 'RECORD // COMMENDATIONS & CLEARANCE',
  tag: 'VERIFIED CREDENTIALS & VICTORIES',
  title: 'Commendations & Certifications',
  quote: 'Industry-standard validations of offensive mastery and defensive architectural capability.'
};

"""
    with open('/home/leexy/portfolio/app/src/data/achievements.js', 'w') as f:
        f.write(achv_insert + achv_content)

# 5. contact.js
with open('/home/leexy/portfolio/app/src/data/contact.js', 'r') as f:
    cnt_content = f.read()
if "modalRef:" not in cnt_content:
    cnt_content = cnt_content.replace(
        "modalTag:", 
        "modalRef: 'SECURE INTAKE // TELEGRAM CIPHER-SEC',\n  modalTag:"
    )
    with open('/home/leexy/portfolio/app/src/data/contact.js', 'w') as f:
        f.write(cnt_content)

