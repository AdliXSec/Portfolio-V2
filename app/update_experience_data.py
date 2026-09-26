import re
import json

with open('/home/leexy/portfolio/app/src/data/experience.js', 'r') as f:
    content = f.read()

# We need to add `images: [],` to each experience object if it doesn't exist
# We'll just replace `role:` with `images: [],\n    role:` for existing objects
if "images:" not in content:
    content = content.replace("role: '", "images: [],\n    role: '")
    with open('/home/leexy/portfolio/app/src/data/experience.js', 'w') as f:
        f.write(content)

