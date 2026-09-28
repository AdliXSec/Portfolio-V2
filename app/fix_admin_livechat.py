import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminLivechat.jsx', 'r') as f:
    content = f.read()

# Add import
if 'livechatData' not in content:
    content = content.replace(
        "import { useState } from 'react';", 
        "import { useState } from 'react';\nimport { livechatData } from '../../data/livechat';"
    )

# Replace the dummyChats array with livechatData
pattern = r'// Dummy data for Livechat based on the SQL\s*const dummyChats = \[\s*.*?\s*\];'
content = re.sub(pattern, '', content, flags=re.DOTALL)

content = content.replace(
    'const [messages, setMessages] = useState(dummyChats);',
    'const [messages, setMessages] = useState(livechatData || []);'
)

# Wait, AdminLivechat has `timestamp` property, but livechatData has `timestamp` property too! Let's check livechat.js to make sure properties match.
with open('/home/leexy/portfolio/app/src/pages/admin/AdminLivechat.jsx', 'w') as f:
    f.write(content)
