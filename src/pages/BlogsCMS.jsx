import { useEffect, useState } from "react";
import API from "../services/api";

export default function BlogsCMS() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const fetchBlogs = async () => {
    const res = await API.get("/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async () => {
    await API.post("/blogs", {
      ...form,
      tags: form.tags.split(","),
    });
    setForm({ title: "", content: "", tags: "" });
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await API.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Blogs</h2>

      <input
        placeholder="Blog Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Blog Content"
        rows={6}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <input
        placeholder="Tags (React,Node,Web)"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />

      <button onClick={handleSubmit}>Add Blog</button>

      <hr />

      {blogs.map((b) => (
        <div key={b._id} style={{ marginBottom: 12 }}>
          <b>{b.title}</b>
          <button onClick={() => deleteBlog(b._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
