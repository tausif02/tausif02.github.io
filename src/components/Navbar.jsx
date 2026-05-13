import { NavLink } from "react-router-dom";
import "../styles/shared.css";

export default function Navbar() {
  return (
    <header className="topbar">
      <nav className="nav-pill" aria-label="Main Navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Work
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Projects
        </NavLink>

        <NavLink
          to="/involvements"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Involvements
        </NavLink>

        <a
          href="/Resume.pdf"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
