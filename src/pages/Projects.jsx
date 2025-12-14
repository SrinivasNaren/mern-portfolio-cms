import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Projects</h1>

      {projects.map((p) => (
        <div key={p._id} style={{ marginBottom: 20 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><b>Tech:</b> {p.techStack.join(", ")}</p>
          <a href={p.githubLink}>GitHub</a> | <a href={p.liveLink}>Live</a>
        </div>
      ))}
    </div>
  );
}
