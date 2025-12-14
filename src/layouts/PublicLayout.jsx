import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
}
