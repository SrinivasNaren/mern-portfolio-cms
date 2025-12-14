import { useEffect, useState } from "react";
import API from "../services/api";

export default function AboutCMS() {
  const [aboutText, setAboutText] = useState("");
  const [highlights, setHighlights] = useState(["Experienced in web dev", "Quick learner"]);
  const [resumeLink, setResumeLink] = useState("");
  const [aboutId, setAboutId] = useState(null);
  const [status, setStatus] = useState("");

  const fetchAbout = async () => {
    try {
      const res = await API.get("/about");
      if (res.data && res.data.length > 0) {
        const a = res.data[0];
        setAboutText(a.description || "");
        setHighlights(a.highlights || []);
        setResumeLink(a.resumeLink || "");
        setAboutId(a._id);
      } else {
        setAboutText("");
        setHighlights([]);
        setResumeLink("");
        setAboutId(null);
      }
    } catch (err) {
      console.error("fetch about err:", err);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const handleSave = async () => {
    try {
      const payload = { description: aboutText, highlights, resumeLink };
      let res;
      if (aboutId) {
        res = await API.put(`/about/${aboutId}`, payload);
      } else {
        res = await API.post("/about", payload);
      }
      setStatus("Saved successfully");
      setTimeout(() => setStatus(""), 2000);
      setAboutId(res.data._id);
    } catch (err) {
      console.error(err);
      setStatus("Error saving");
      setTimeout(() => setStatus(""), 2000);
    }
  };

  const updateHighlight = (index, value) => {
    const copy = [...highlights];
    copy[index] = value;
    setHighlights(copy);
  };

  const addHighlight = () => setHighlights(prev => [...prev, ""]);
  const removeHighlight = (i) => setHighlights(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage About Section</h2>

      <label>About description</label>
      <textarea
        rows={6}
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        style={{ width: "100%", marginTop: 8 }}
      />

      <div style={{ marginTop: 12 }}>
        <h4>Highlights</h4>
        {highlights.map((h, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              value={h}
              onChange={(e) => updateHighlight(i, e.target.value)}
              style={{ flex: 1 }}
            />
            <button onClick={() => removeHighlight(i)}>Remove</button>
          </div>
        ))}
        <button onClick={addHighlight}>Add Highlight</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <label>Resume link</label><br/>
        <input value={resumeLink} onChange={(e)=>setResumeLink(e.target.value)} style={{ width: "100%" }}/>
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={handleSave}>Save About</button>
        {status && <span style={{ marginLeft: 12 }}>{status}</span>}
      </div>
    </div>
  );
}
