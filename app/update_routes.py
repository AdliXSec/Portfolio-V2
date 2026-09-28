import re

with open('/home/leexy/portfolio/app/src/App.jsx', 'r') as f:
    content = f.read()

# Add AdminLivechat import if not present
if 'AdminLivechat' not in content:
    content = content.replace("import AdminSettings from './pages/admin/AdminSettings';", "import AdminSettings from './pages/admin/AdminSettings';\nimport AdminLivechat from './pages/admin/AdminLivechat';")
    
    # Add route
    content = content.replace(
        '<Route path="messages" element={<AdminMessages />} />',
        '<Route path="messages" element={<AdminMessages />} />\n          <Route path="livechat" element={<AdminLivechat />} />'
    )

with open('/home/leexy/portfolio/app/src/App.jsx', 'w') as f:
    f.write(content)
