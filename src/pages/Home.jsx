import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px" }}>Srinivas Naren V</h1>
        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          Full Stack Developer
        </p>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          Building user-first web apps & robust backend systems
        </p>
      </section>

      {/* ABOUT (dynamic) */}
      <AboutSection />
    </div>
  );
}
