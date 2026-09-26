import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicPortfolio from './pages/PublicPortfolio';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import AdminProfile from './pages/admin/AdminProfile';

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
          {/* We can add 'about' or other nodes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
