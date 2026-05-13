import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import CursorGlow from "./components/CursorGlow";
import Home from "./pages/Home";
import Work from "./pages/Work";

function Placeholder({ title }) {
  return (
    <main style={{ paddingTop: "140px", textAlign: "center", color: "white" }}>
      <h1>{title}</h1>
    </main>
  );
}

export default function App() {
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
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route
          path="/involvements"
          element={<Placeholder title="Involvements" />}
        />
        <Route path="/resume" element={<Placeholder title="Resume" />} />
      </Routes>
    </>
  );
}
