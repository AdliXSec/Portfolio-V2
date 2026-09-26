import re

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'r') as f:
    content = f.read()

# Add imports for the new modals
imports = """import { profile } from './profile';
import { experiences, experienceModal } from './experience';
import { projects } from './projects';
import { techCategories, techstackModal } from './techstack';
import { achievements, achievementsModal } from './achievements';
import { contactData } from './contact';"""

content = re.sub(
    r"import \{ profile \} from '\./profile';.*import \{ contactData \} from '\./contact';",
    imports,
    content,
    flags=re.DOTALL
)

# Profile modal
content = content.replace("ref: 'EXHIBIT // AXIOM MEMO [REF: PHIL-01]',", "ref: profile.modalConfig.ref,")
content = content.replace("tag: 'CORE PHILOSOPHY & METHODOLOGY',", "tag: profile.modalConfig.tag,")
content = content.replace("title: 'Kernel-Level Adversary Modeling Axiom',", "title: profile.modalConfig.title,")
content = content.replace("quote: profile.philosophy,", "quote: profile.modalConfig.quote,")

# Timeline modal
content = content.replace("ref: 'DOSSIER FILE // RECORD 02 [CAREER TIMELINE]',", "ref: experienceModal.ref,")
content = content.replace("tag: 'OPERATIONAL CAREER PROGRESSION',", "tag: experienceModal.tag,")
content = content.replace("title: 'Service Record, Engagements & Impact',", "title: experienceModal.title,")
content = content.replace("quote: 'Verified operational track record leading high-consequence offensive testing and resilient detection engineering.',", "quote: experienceModal.quote,")

# Stack modal
content = content.replace("ref: 'INVENTORY // CAPABILITIES MATRIX',", "ref: techstackModal.ref,")
content = content.replace("tag: 'TACTICAL TOOLSET & INFRASTRUCTURE',", "tag: techstackModal.tag,")
content = content.replace("title: 'Tech Stack & Weaponized Instrumentation',", "title: techstackModal.title,")
content = content.replace("quote: 'Comprehensive mastery over languages, frameworks, security tooling, and high-availability infrastructure.',", "quote: techstackModal.quote,")

# Achievements modal
content = content.replace("ref: 'RECORD // COMMENDATIONS & CLEARANCE',", "ref: achievementsModal.ref,")
content = content.replace("tag: 'VERIFIED CREDENTIALS & VICTORIES',", "tag: achievementsModal.tag,")
content = content.replace("title: 'Commendations & Certifications',", "title: achievementsModal.title,")
content = content.replace("quote: 'Industry-standard validations of offensive mastery and defensive architectural capability.',", "quote: achievementsModal.quote,")

# Contact modal
content = content.replace("ref: 'SECURE INTAKE // TELEGRAM CIPHER-SEC',", "ref: contactData.modalRef,")

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'w') as f:
    f.write(content)

