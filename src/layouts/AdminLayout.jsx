import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          background: "#0f172a",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Admin CMS</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/about">About</Link>
          <Link to="/admin/projects">Projects</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/messages">Messages</Link>
        </nav>

        <button
          onClick={logout}
          style={{ marginTop: "40px", padding: "10px" }}
        >
          Logout
        </button>
      </aside>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "30px", background: "#f8fafc" }}>
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
