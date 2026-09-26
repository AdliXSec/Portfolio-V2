import re

with open('/home/leexy/portfolio/app/src/App.jsx', 'r') as f:
    content = f.read()

# Add imports
imports = """import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import AdminProfile from './pages/admin/AdminProfile';
import AdminExperience from './pages/admin/AdminExperience';
import AdminTechStack from './pages/admin/AdminTechStack';
import AdminAchievements from './pages/admin/AdminAchievements';
import AdminContact from './pages/admin/AdminContact';
import AdminMessages from './pages/admin/AdminMessages';
import AdminSettings from './pages/admin/AdminSettings';"""

content = re.sub(r'import AdminDashboard.*AdminSettings\';', imports, content, flags=re.DOTALL)

# Add routes
routes = """          <Route path="projects" element={<AdminProjects />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="experience" element={<AdminExperience />} />
          <Route path="techstack" element={<AdminTechStack />} />
          <Route path="achievements" element={<AdminAchievements />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />"""

# We need to replace the old block of routes from 'projects' to 'settings'
content = re.sub(r'<Route path="projects".*?<Route path="settings" element={<AdminSettings />} />', routes, content, flags=re.DOTALL)

with open('/home/leexy/portfolio/app/src/App.jsx', 'w') as f:
    f.write(content)

