/* Involvements.jsx */
import "../styles/shared.css";
import "../styles/involvements.css";

const involvements = [
  {
    title: "NASA Lunabotics",
    role: "Systems Engineering Team Lead",
    organization: "Saginaw Valley State University",
    date: "Aug 2025 – Present",
    category: "Robotics / Leadership",
    summary:
      "Leading software, electrical, and mechanical integration for SVSU’s NASA Lunabotics rover while coordinating requirements, testing, documentation, and subsystem communication.",
    highlights: [
      "Coordinate work across software, electrical, and mechanical subsystem teams.",
      "Support robot software development involving Raspberry Pi, Python, Linux, computer vision, TCP communication, and Arduino integration.",
      "Create NASA-style systems engineering documentation including requirements, subsystem interfaces, operational procedures, verification planning, and milestone tracking.",
    ],
  },
  {
    title: "Robot Software & Autonomy Development",
    role: "Software / Autonomy Contributor",
    organization: "NASA Lunabotics Team",
    date: "2025 – Present",
    category: "Robotics Software",
    summary:
      "Working on the robot software stack used for teleoperation, autonomous behavior, live video, sensor feedback, and real-time debugging during field testing.",
    highlights: [
      "Implemented and debugged keyboard/Xbox controller input handling, robot command parsing, actuator controls, emergency stop states, and telemetry updates.",
      "Built hybrid obstacle-detection logic using object detection and depth data for navigation decisions.",
      "Helped integrate multiple Arduino controllers for left drive, right drive, and linear actuator control.",
    ],
  },
  {
    title: "Campus IT Support",
    role: "Technical Support Specialist",
    organization: "SVSU ITS Technical Services",
    date: "Mar 2021 – Jan 2025",
    category: "Technology Support",
    summary:
      "Provided technical support to students, faculty, and staff while troubleshooting hardware, software, account, classroom technology, and network-related issues.",
    highlights: [
      "Supported 4,000+ students, faculty, and staff across campus technology systems.",
      "Assisted with equipment setup and deployment for 2,000+ employees and users.",
      "Maintained documentation of recurring issues, resolutions, and support workflows.",
    ],
  },
  {
    title: "Research Support",
    role: "Student Researcher",
    organization: "Accounting & Economics, SVSU",
    date: "Oct 2023 – Feb 2024",
    category: "Research / Data",
    summary:
      "Supported faculty research by collecting, cleaning, analyzing, and documenting datasets to identify trends and produce useful reports.",
    highlights: [
      "Collected and cleaned datasets for research analysis.",
      "Identified trends and prepared reports to support faculty research objectives.",
      "Documented findings clearly for team communication and review.",
    ],
  },
  {
    title: "Career Services",
    role: "Front Desk Support",
    organization: "Saginaw Valley State University",
    date: "Feb 2021 – Mar 2021",
    category: "Student Support",
    summary:
      "Assisted students and staff with career resources, scheduling, resume support, job applications, and career-event operations.",
    highlights: [
      "Helped students with resumes, cover letters, and job application support.",
      "Scheduled appointments and supported daily front-desk operations.",
      "Assisted with workshops, presentations, and career-related events.",
    ],
  },
];

export default function Involvements() {
  return (
    <main className="involvements-page">
      <section className="involvements-hero">
        <p className="involvements-label">Campus & Leadership</p>

        <h1>
          My <br />
          <span>involvements</span>
        </h1>

        <p className="involvements-subtext">
          A look at the teams, roles, and campus experiences that helped me grow
          in leadership, communication, technical problem-solving, and software
          development.
        </p>
      </section>

      <section className="involvements-grid">
        {involvements.map((item) => (
          <article className="involvement-card" key={item.title}>
            <div className="involvement-card-top">
              <span className="involvement-category">{item.category}</span>
              <span className="involvement-date">{item.date}</span>
            </div>

            <h2>{item.title}</h2>

            <div className="involvement-role-block">
              <p className="involvement-role">{item.role}</p>
              <p className="involvement-organization">{item.organization}</p>
            </div>

            <p className="involvement-summary">{item.summary}</p>

            <ul className="involvement-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
