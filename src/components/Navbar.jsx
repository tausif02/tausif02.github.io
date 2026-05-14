/* Navbar.jsx */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/shared.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <nav className="nav-pill desktop-nav" aria-label="Main Navigation">
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

      <nav className="mobile-nav-pill" aria-label="Mobile Navigation">
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          onClick={closeMenu}
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
        >
          Projects
        </NavLink>

        <div className="mobile-more-wrap">
          <button
            type="button"
            className={`mobile-more-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open more navigation links"
            aria-expanded={menuOpen}
          >
            More
            <span>▾</span>
          </button>

          {menuOpen && (
            <div className="mobile-more-menu">
              <NavLink
                to="/involvements"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-more-link ${isActive ? "active" : ""}`
                }
              >
                Involvements
              </NavLink>

              <a
                href="/Resume.pdf"
                className="mobile-more-link"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
