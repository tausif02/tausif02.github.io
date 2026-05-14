/* App.jsx */
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import CursorGlow from "./components/CursorGlow";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Involvements from "./pages/Involvements";

function Placeholder({ title }) {
  return (
    <main style={{ paddingTop: "140px", textAlign: "center", color: "white" }}>
      <h1>{title}</h1>
    </main>
  );
}

export default function App() {
  useEffect(() => {
    document.body.classList.add("nav-ready", "social-ready", "is-ready");

    return () => {
      document.body.classList.remove("nav-ready", "social-ready", "is-ready");
    };
  }, []);

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="bg-grid"></div>

      <CursorGlow />
      <Navbar />
      <SocialSidebar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/involvements" element={<Involvements />} />
        <Route path="/resume" element={<Placeholder title="Resume" />} />
      </Routes>
    </>
  );
}
