/* Projects.jsx */
import "../styles/shared.css";
import "../styles/projects.css";

const projects = [
  {
    title: "NASA Lunabotics Robot Software",
    category: "Robotics / Autonomy",
    year: "2025–2026",
    summary:
      "A Raspberry Pi-based robot software stack for teleoperation, autonomy, live video, sensor integration, and real-time robot control.",
    stack: [
      "Python",
      "Linux",
      "OpenCV",
      "YOLO",
      "Kinect",
      "TCP",
      "MJPEG",
      "Arduino",
    ],
    bullets: [
      "Developed robot software using Python, Linux, OpenCV, YOLO, Kinect RGB/depth sensing, TCP sockets, MJPEG streaming, and Arduino serial communication.",
      "Implemented teleoperation and autonomy features including keyboard/Xbox input handling, command parsing, emergency stop states, telemetry updates, and autonomous mode transitions.",
      "Built obstacle-detection logic using object detection and depth data to support forward motion, stopping, turning, recovery behavior, and low-visibility handling.",
    ],
  },
  {
    title: "Mission Control Interface",
    category: "Robotics / Control UI",
    year: "2025–2026",
    summary:
      "A robot control interface designed to monitor connection status, video feedback, robot health, manual control states, and autonomy behavior during testing.",
    stack: ["Python", "TCP", "MJPEG", "JavaScript", "Robot Telemetry"],
    bullets: [
      "Designed and tested a Mission Control interface with live robot video, connection status, and autonomy feedback.",
      "Added status indicators for Arduino/Kinect health, manual lock states, low-video mode, and robot readiness.",
      "Supported field testing by making robot state, command flow, and debugging information easier to understand.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend / Web",
    year: "2026",
    summary:
      "A personal portfolio website built to present my experience, projects, involvements, resume, and technical background in a clean modern layout.",
    stack: ["React", "Vite", "CSS", "GitHub Pages"],
    bullets: [
      "Built reusable pages for Home, Work, Projects, Involvements, and Resume.",
      "Created a consistent dark interface with custom navigation, social links, project cards, and responsive page layouts.",
      "Deployed the site using GitHub Pages.",
    ],
  },
  {
    title: "PHP Issue Tracking System",
    category: "Full Stack / Backend",
    year: "2025",
    summary:
      "A backend web application for managing users, issues, comments, permissions, and admin workflows.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    bullets: [
      "Implemented CRUD features for persons, issues, and comments.",
      "Added role-based permissions for admins, issue owners, responsible users, and comment owners.",
      "Used Bootstrap modals and organized UI patterns to improve usability and consistency.",
    ],
  },
  {
    title: "Weather Dashboard",
    category: "Frontend / API",
    year: "2025",
    summary:
      "A responsive weather dashboard that displays current conditions, forecast data, and detailed forecast views.",
    stack: ["React", "Tailwind CSS", "OpenWeather API", "Netlify"],
    bullets: [
      "Fetched live weather and forecast data from the OpenWeatherMap API.",
      "Added unit toggling, forecast cards, loading states, error handling, and responsive layout.",
      "Deployed the application using Netlify.",
    ],
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <p className="projects-label">Selected Projects</p>

        <h1>
          Things I’ve <br />
          <span>built</span>
        </h1>

        <p className="projects-subtext">
          A collection of software, robotics, web development, and backend
          projects that show my experience across practical systems and clean
          user-focused applications.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <h2 className="project-title">{project.title}</h2>

            <p className="project-summary">{project.summary}</p>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <ul className="project-bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
