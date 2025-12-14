import { useEffect, useState } from "react";
import API from "../services/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Blogs</h1>

      {blogs.map((b) => (
        <div key={b._id} style={{ marginBottom: 30 }}>
          <h3>{b.title}</h3>
          <p>{b.content}</p>
          <small>Tags: {b.tags.join(", ")}</small>
        </div>
      ))}
    </div>
  );
}
