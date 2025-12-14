import { useEffect, useState } from "react";
import API from "../services/api";

export default function ProjectsCMS() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async () => {
    await API.post("/projects", {
      ...form,
      techStack: form.techStack.split(","),
    });
    setForm({
      title: "",
      description: "",
      techStack: "",
      githubLink: "",
      liveLink: "",
    });
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Projects</h2>

      <input placeholder="Title" value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })} />

      <textarea placeholder="Description" value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })} />

      <input placeholder="Tech (React,Node,Mongo)" value={form.techStack}
        onChange={(e) => setForm({ ...form, techStack: e.target.value })} />

      <input placeholder="GitHub link" value={form.githubLink}
        onChange={(e) => setForm({ ...form, githubLink: e.target.value })} />

      <input placeholder="Live link" value={form.liveLink}
        onChange={(e) => setForm({ ...form, liveLink: e.target.value })} />

      <button onClick={handleSubmit}>Add Project</button>

      <hr />

      {projects.map((p) => (
        <div key={p._id}>
          <h4>{p.title}</h4>
          <button onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
