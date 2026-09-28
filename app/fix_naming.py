import os

admin_dir = '/home/leexy/portfolio/app/src/pages/admin'

# Fix AdminExperience.jsx - rename import to avoid conflict
path = os.path.join(admin_dir, 'AdminExperience.jsx')
with open(path, 'r') as f:
    content = f.read()

# The admin file has a local function called ExperienceCard
# Rename the imported public component
content = content.replace(
    "import ExperienceCard from '../../components/ExperienceCard';",
    "import ExperienceCardPublic from '../../components/ExperienceCard';"
)
content = content.replace(
    '<ExperienceCard id="node-experience-preview"',
    '<ExperienceCardPublic id="node-experience-preview"'
)

with open(path, 'w') as f:
    f.write(content)
print("✅ Fixed AdminExperience.jsx naming conflict")

# Check AdminTechStack.jsx for similar issues
path = os.path.join(admin_dir, 'AdminTechStack.jsx')
with open(path, 'r') as f:
    content = f.read()

# Check if TechCategoryCard exists locally
if 'function TechCategoryCard' in content or 'function TechStackSection' in content:
    content = content.replace(
        "import TechStackSection from '../../components/TechStackSection';",
        "import TechStackSectionPublic from '../../components/TechStackSection';"
    )
    content = content.replace(
        '<TechStackSection id="node-tech-preview"',
        '<TechStackSectionPublic id="node-tech-preview"'
    )
    with open(path, 'w') as f:
        f.write(content)
    print("✅ Fixed AdminTechStack.jsx naming (precautionary)")
else:
    print("✅ AdminTechStack.jsx is fine")

