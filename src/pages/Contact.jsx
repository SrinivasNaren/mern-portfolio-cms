import { useState } from "react";
import API from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/messages", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
