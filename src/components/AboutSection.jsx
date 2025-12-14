import { useEffect, useState } from "react";
import API from "../services/api";

export default function AboutSection() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await API.get("/about");
        if (res.data.length > 0) {
          setAbout(res.data[0]);
        }
      } catch (err) {
        console.error("Error fetching about:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) return <p>Loading about...</p>;
  if (!about) return <p>No about info found</p>;

  return (
    <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        About Me
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
        {about.description}
      </p>

      {about.highlights?.length > 0 && (
        <ul style={{ marginTop: "20px" }}>
          {about.highlights.map((h, i) => (
            <li key={i} style={{ fontSize: "16px", marginBottom: "8px" }}>
              ✅ {h}
            </li>
          ))}
        </ul>
      )}

      {about.resumeLink && (
        <a
          href={about.resumeLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          View Resume
        </a>
      )}
    </section>
  );
}
