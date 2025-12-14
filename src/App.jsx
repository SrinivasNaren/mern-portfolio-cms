import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Admin/ProtectedRoute";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AboutCMS from "./pages/AboutCMS";
import ProjectsCMS from "./pages/ProjectsCMS";
import BlogsCMS from "./pages/BlogsCMS";
import MessagesCMS from "./pages/MessagesCMS";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC SITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN PROTECTED */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<AboutCMS />} />
          <Route path="projects" element={<ProjectsCMS />} />
          <Route path="blogs" element={<BlogsCMS />} />
          <Route path="messages" element={<MessagesCMS />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
