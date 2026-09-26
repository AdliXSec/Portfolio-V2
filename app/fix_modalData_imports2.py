import re

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'r') as f:
    content = f.read()

# Remove duplicate imports
content = re.sub(r"import \{ experiences \} from '\./experience';\n", '', content)
content = re.sub(r"import \{ techCategories \} from '\./techstack';\n", '', content)
content = re.sub(r"import \{ achievements \} from '\./achievements';\n", '', content)
content = re.sub(r"import \{ projects \} from '\./projects';\n", '', content)

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'w') as f:
    f.write(content)
