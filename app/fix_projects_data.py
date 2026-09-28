import re

with open('/home/leexy/portfolio/app/src/data/projects.js', 'r') as f:
    content = f.read()

# Add viewCount right after caseNumber
content = content.replace("caseNumber: '01',", "caseNumber: '01',\n    viewCount: 1245,")
content = content.replace("caseNumber: '02',", "caseNumber: '02',\n    viewCount: 843,")
content = content.replace("caseNumber: '03',", "caseNumber: '03',\n    viewCount: 3102,")
content = content.replace("caseNumber: '04',", "caseNumber: '04',\n    viewCount: 512,")

with open('/home/leexy/portfolio/app/src/data/projects.js', 'w') as f:
    f.write(content)

