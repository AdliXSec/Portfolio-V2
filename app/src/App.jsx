import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicPortfolio from './pages/PublicPortfolio';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import AdminProfile from './pages/admin/AdminProfile';
import AdminExperience from './pages/admin/AdminExperience';
import AdminTechStack from './pages/admin/AdminTechStack';
import AdminAchievements from './pages/admin/AdminAchievements';
import AdminContact from './pages/admin/AdminContact';
import AdminMessages from './pages/admin/AdminMessages';
import AdminSettings from './pages/admin/AdminSettings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPortfolio />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
                              <Route path="projects" element={<AdminProjects />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="experience" element={<AdminExperience />} />
          <Route path="techstack" element={<AdminTechStack />} />
          <Route path="achievements" element={<AdminAchievements />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />
          {/* We can add 'about' or other nodes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
