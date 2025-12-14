const AdminDashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <div style={styles.cards}>
        <div style={styles.card}>Projects<br />12</div>
        <div style={styles.card}>Blogs<br />5</div>
        <div style={styles.card}>Messages<br />8</div>
      </div>
    </>
  );
};

const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default AdminDashboard;
