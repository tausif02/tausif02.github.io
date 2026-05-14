/* SocialSidebar.jsx */
import { useState } from "react";
import "../styles/shared.css";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.8 1.17 1.83 1.17 3.08 0 4.41-2.7 5.39-5.28 5.67.41.35.78 1.03.78 2.08v3.08c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.97V21H3ZM9.5 9.75h3.8v1.53h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-5.09c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21H9.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
      <circle cx="12" cy="12" r="4.25"></circle>
      <circle
        cx="17.3"
        cy="6.7"
        r="1.1"
        fill="currentColor"
        stroke="none"
      ></circle>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.12 21v-8.02h2.7l.4-3.12h-3.1V7.87c0-.9.25-1.52 1.54-1.52H16.4V3.56c-.3-.04-1.34-.12-2.54-.12-2.51 0-4.23 1.54-4.23 4.37v2.05H6.78v3.12h2.85V21h3.49Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <path d="M8.6 10.7 15.4 6.3"></path>
      <path d="M8.6 13.3 15.4 17.7"></path>
    </svg>
  );
}

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className="social-sidebar desktop-social"
        aria-label="Social links"
      >
        <a
          href="https://github.com/tausif02"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/tausifahmed02/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>

        <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>

        <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </aside>

      <div className={`mobile-social ${open ? "open" : ""}`}>
        <div className="mobile-social-links" aria-label="Mobile social links">
          <a
            href="https://github.com/tausif02"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/tausifahmed02/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>

          <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>

        <button
          type="button"
          className="mobile-social-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle social links"
          aria-expanded={open}
        >
          {open ? "×" : <ShareIcon />}
        </button>
      </div>
    </>
  );
}
