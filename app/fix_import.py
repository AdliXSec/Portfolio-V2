with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'r') as f:
    content = f.read()

content = content.replace("Eye, 'lucide-react';", "from 'lucide-react';")
content = content.replace("Upload, Code2 }", "Upload, Code2, Eye }")

with open('/home/leexy/portfolio/app/src/pages/admin/AdminProjects.jsx', 'w') as f:
    f.write(content)
