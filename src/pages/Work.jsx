/* work.jsx */
import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/shared.css";
import "../styles/work.css";

const experienceByYear = {
  present: [
    {
      id: "nasa-present",
      title: "Systems Engineering Team Lead",
      company: "NASA Lunabotics Competition",
      location: "Saginaw Valley State University",
      date: "Aug 2025 – Present",
      kicker: "Current Leadership Role",
      tag: "Robotics / Systems Engineering",
      summary:
        "Leading software, electrical, and mechanical integration for a NASA Lunabotics rover while supporting robot software, autonomy, testing, documentation, and subsystem coordination.",
      skills: [
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
        "Developed a Raspberry Pi-based robot software stack using Python, Linux, OpenCV, YOLO, Kinect RGB/depth sensing, TCP sockets, MJPEG streaming, and Arduino serial communication.",
        "Implemented and debugged real-time teleoperation and autonomy features including keyboard/Xbox input handling, command parsing, emergency stop states, telemetry updates, and autonomous mode transitions.",
        "Built hybrid obstacle-detection logic using object detection and depth data to support navigation decisions such as forward motion, stopping, turning, recovery behavior, and low-visibility handling.",
        "Created NASA-style systems engineering documentation including requirements, operational procedures, subsystem interfaces, verification planning, design reviews, and milestone tracking.",
      ],
    },
    {
      id: "morley-present",
      title: "IT Support Specialist",
      company: "Morley Companies, Inc.",
      location: "Saginaw, MI",
      date: "June 2025 – Present",
      kicker: "Current Role",
      tag: "Support / Operations",
      summary:
        "Providing customer-focused support, resolving service requests, maintaining clear documentation, and helping operations run smoothly in a high-demand environment.",
      skills: [
        "Customer Support",
        "Documentation",
        "Problem Solving",
        "Operations",
      ],
      bullets: [
        "Handle incoming inquiries and provide clear, professional guidance.",
        "Resolve service requests efficiently while maintaining service quality.",
        "Document workflows and requests for accurate tracking and follow-up.",
        "Support team operations during high-demand periods.",
      ],
    },
  ],

  2025: [
    {
      id: "morley-2025",
      title: "IT Support Specialist",
      company: "Morley Companies, Inc.",
      location: "Saginaw, MI",
      date: "June 2025 – Present",
      kicker: "Professional Experience",
      tag: "Support / Operations",
      summary:
        "Providing customer-focused support, resolving service requests, maintaining clear documentation, and helping operations run smoothly in a high-demand environment.",
      skills: [
        "Customer Support",
        "Documentation",
        "Problem Solving",
        "Operations",
      ],
      bullets: [
        "Handle incoming inquiries and provide clear, professional guidance.",
        "Resolve service requests efficiently while maintaining service quality.",
        "Document workflows and requests for accurate tracking and follow-up.",
        "Support team operations during high-demand periods.",
      ],
    },
    {
      id: "its-2025",
      title: "Technical Support Specialist",
      company: "ITS Technical Services",
      location: "Saginaw Valley State University",
      date: "March 2021 – January 2025",
      kicker: "University IT Experience",
      tag: "IT / Troubleshooting",
      summary:
        "Supported thousands of students, faculty, and staff with hardware, software, networking, setup, and general technical troubleshooting across campus systems.",
      skills: [
        "Hardware",
        "Software Support",
        "Networking",
        "Microsoft Office",
      ],
      bullets: [
        "Provided technical support to 4000+ students, faculty, and staff.",
        "Troubleshot hardware, software, and networking issues.",
        "Helped set up equipment for 2000+ new employees.",
        "Maintained clear documentation of issues, solutions, and service workflows.",
      ],
    },
  ],

  2024: [
    {
      id: "its-2024",
      title: "Technical Support Specialist",
      company: "ITS Technical Services",
      location: "Saginaw Valley State University",
      date: "March 2021 – January 2025",
      kicker: "University IT Experience",
      tag: "IT / Troubleshooting",
      summary:
        "Supported thousands of students, faculty, and staff with hardware, software, networking, setup, and general technical troubleshooting across campus systems.",
      skills: [
        "Hardware",
        "Software Support",
        "Networking",
        "Microsoft Office",
      ],
      bullets: [
        "Provided technical support to 4000+ students, faculty, and staff.",
        "Troubleshot hardware, software, and networking issues.",
        "Helped set up equipment for 2000+ new employees.",
        "Maintained clear documentation of issues, solutions, and service workflows.",
      ],
    },
    {
      id: "research-2024",
      title: "Student Researcher",
      company: "Accounting & Economics",
      location: "Saginaw Valley State University",
      date: "October 2023 – February 2024",
      kicker: "Research Experience",
      tag: "Research / Analysis",
      summary:
        "Worked with datasets, reports, and documentation to support research goals and communicate findings clearly to team members and stakeholders.",
      skills: ["Data Analysis", "Reporting", "Research", "Documentation"],
      bullets: [
        "Collected and analyzed datasets to identify trends and insights.",
        "Generated reports and research outputs for project needs.",
        "Collaborated with the team to improve research processes.",
        "Documented findings clearly for communication and review.",
      ],
    },
    {
      id: "webdev-2024",
      title: "Web Developer Student Intern",
      company: "Saginaw Valley State University",
      location: "Saginaw, MI",
      date: "Oct 2024 – Dec 2024",
      kicker: "Web Development Experience",
      tag: "Full-Stack / Web Dev",
      summary:
        "Developed and maintained full-stack web applications while collaborating with stakeholders on digital platform improvements and engineering best practices.",
      skills: ["HTML", "CSS", "JavaScript", "Full-Stack", "Web Applications"],
      bullets: [
        "Developed and maintained full-stack web applications using modern programming frameworks and best practices.",
        "Collaborated with IT team, designers, and stakeholders on system development projects and digital platform improvements.",
        "Participated in code reviews and contributed to engineering documentation for web-based applications and systems.",
        "Applied front-end development tools and techniques to create user-friendly, accessible digital experiences.",
        "Engaged in technical discussions about development strategy, system architecture, and engineering best practices.",
      ],
    },
  ],

  2023: [
    {
      id: "its-2023",
      title: "Technical Support Specialist",
      company: "ITS Technical Services",
      location: "Saginaw Valley State University",
      date: "March 2021 – January 2025",
      kicker: "University IT Experience",
      tag: "IT / Troubleshooting",
      summary:
        "Supported thousands of students, faculty, and staff with hardware, software, networking, setup, and general technical troubleshooting across campus systems.",
      skills: [
        "Hardware",
        "Software Support",
        "Networking",
        "Microsoft Office",
      ],
      bullets: [
        "Provided technical support to 4000+ students, faculty, and staff.",
        "Troubleshot hardware, software, and networking issues.",
        "Helped set up equipment for 2000+ new employees.",
        "Maintained clear documentation of issues, solutions, and service workflows.",
      ],
    },
    {
      id: "research-2023",
      title: "Student Researcher",
      company: "Accounting & Economics",
      location: "Saginaw Valley State University",
      date: "October 2023 – February 2024",
      kicker: "Research Experience",
      tag: "Research / Analysis",
      summary:
        "Worked with datasets, reports, and documentation to support research goals and communicate findings clearly to team members and stakeholders.",
      skills: ["Data Analysis", "Reporting", "Research", "Documentation"],
      bullets: [
        "Collected and analyzed datasets to identify trends and insights.",
        "Generated reports and research outputs for project needs.",
        "Collaborated with the team to improve research processes.",
        "Documented findings clearly for communication and review.",
      ],
    },
  ],

  2022: [
    {
      id: "its-2022",
      title: "Technical Support Specialist",
      company: "ITS Technical Services",
      location: "Saginaw Valley State University",
      date: "March 2021 – January 2025",
      kicker: "University IT Experience",
      tag: "IT / Troubleshooting",
      summary:
        "Supported thousands of students, faculty, and staff with hardware, software, networking, setup, and general technical troubleshooting across campus systems.",
      skills: [
        "Hardware",
        "Software Support",
        "Networking",
        "Microsoft Office",
      ],
      bullets: [
        "Provided technical support to 4000+ students, faculty, and staff.",
        "Troubleshot hardware, software, and networking issues.",
        "Helped set up equipment for 2000+ new employees.",
        "Maintained clear documentation of issues, solutions, and service workflows.",
      ],
    },
  ],

  2021: [
    {
      id: "career-2021",
      title: "Front Desk Support",
      company: "Career Services",
      location: "Saginaw Valley State University",
      date: "February 2021 – March 2021",
      kicker: "Early Professional Experience",
      tag: "Student Support",
      summary:
        "Assisted students with career resources, scheduling, event support, and front-desk communication in a fast-paced student services environment.",
      skills: [
        "Communication",
        "Scheduling",
        "Student Services",
        "Event Support",
      ],
      bullets: [
        "Helped students with resumes, cover letters, and job applications.",
        "Scheduled appointments for professional staff.",
        "Supported workshops, presentations, and employment fairs.",
        "Communicated clearly with users with different technical abilities.",
      ],
    },
    {
      id: "its-2021",
      title: "Technical Support Specialist",
      company: "ITS Technical Services",
      location: "Saginaw Valley State University",
      date: "March 2021 – January 2025",
      kicker: "University IT Experience",
      tag: "IT / Troubleshooting",
      summary:
        "Supported thousands of students, faculty, and staff with hardware, software, networking, setup, and general technical troubleshooting across campus systems.",
      skills: [
        "Hardware",
        "Software Support",
        "Networking",
        "Microsoft Office",
      ],
      bullets: [
        "Provided technical support to 4000+ students, faculty, and staff.",
        "Troubleshot hardware, software, and networking issues.",
        "Helped set up equipment for 2000+ new employees.",
        "Maintained clear documentation of issues, solutions, and service workflows.",
      ],
    },
  ],
};

const yearOrder = ["present", "2025", "2024", "2023", "2022", "2021"];

const yearLabels = {
  present: "Present",
  2025: "2025",
  2024: "2024",
  2023: "2023",
  2022: "2022",
  2021: "2021",
};

export default function Work() {
  const [activeYear, setActiveYear] = useState("present");
  const [expandedByYear, setExpandedByYear] = useState({
    present: null,
    2025: null,
    2024: null,
    2023: null,
    2022: null,
    2021: null,
  });

  const sectionRefs = useRef({});
  const timelineLineRef = useRef(null);
  const [dotY, setDotY] = useState(0);
  const [progressScale, setProgressScale] = useState(0);

  const yearStops = useMemo(() => {
    const lineHeight = timelineLineRef.current?.offsetHeight || 650;
    const safeCount = Math.max(yearOrder.length - 1, 1);
    return yearOrder.map((_, index) => (lineHeight / safeCount) * index);
  }, [activeYear]);

  useEffect(() => {
    function updateTimelineState() {
      if (window.innerWidth <= 1180 || !timelineLineRef.current) {
        setDotY(0);
        setProgressScale(0);
        return;
      }

      const viewportCenter = window.scrollY + window.innerHeight / 2;

      const sectionCenters = yearOrder.map((yearKey) => {
        const section = sectionRefs.current[yearKey];
        if (!section) return 0;
        const rect = section.getBoundingClientRect();
        return rect.top + window.scrollY + rect.height / 2;
      });

      let activeIndex = 0;
      let minDistance = Infinity;

      sectionCenters.forEach((center, index) => {
        const distance = Math.abs(center - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      setActiveYear(yearOrder[activeIndex]);

      let nextDotY = 0;

      if (viewportCenter <= sectionCenters[0]) {
        nextDotY = yearStops[0];
      } else if (viewportCenter >= sectionCenters[sectionCenters.length - 1]) {
        nextDotY = yearStops[yearStops.length - 1];
      } else {
        for (let i = 0; i < sectionCenters.length - 1; i += 1) {
          const currentCenter = sectionCenters[i];
          const nextCenter = sectionCenters[i + 1];

          if (viewportCenter >= currentCenter && viewportCenter <= nextCenter) {
            const localProgress =
              (viewportCenter - currentCenter) / (nextCenter - currentCenter);

            nextDotY =
              yearStops[i] + (yearStops[i + 1] - yearStops[i]) * localProgress;
            break;
          }
        }
      }

      const safeLineHeight = Math.max(timelineLineRef.current.offsetHeight, 1);
      setDotY(nextDotY);
      setProgressScale(Math.min(Math.max(nextDotY / safeLineHeight, 0), 1));
    }

    updateTimelineState();
    window.addEventListener("scroll", updateTimelineState, { passive: true });
    window.addEventListener("resize", updateTimelineState);

    return () => {
      window.removeEventListener("scroll", updateTimelineState);
      window.removeEventListener("resize", updateTimelineState);
    };
  }, [yearStops]);

  function toggleCard(yearKey, cardId) {
    setExpandedByYear((prev) => ({
      ...prev,
      [yearKey]: prev[yearKey] === cardId ? null : cardId,
    }));
  }

  function scrollToYear(yearKey) {
    const section = sectionRefs.current[yearKey];
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <main className="work-page">
      <section className="work-hero">
        <p className="work-label">Career Timeline</p>
        <h1>
          My work &<br />
          <span>experience</span>
        </h1>
        <p className="work-subtext">
          A timeline of my experience across leadership, IT support, research,
          and web development.
        </p>
      </section>

      <section className="work-layout">
        <aside className="timeline-rail-column">
          <div className="timeline-rail-sticky">
            <div className="timeline-rail-header">
              <p className="timeline-mini-label">Selected Year</p>
              <h2>{yearLabels[activeYear]}</h2>
            </div>

            <div className="timeline-rail">
              <div className="timeline-years">
                {yearOrder.map((yearKey) => (
                  <button
                    key={yearKey}
                    className={`year ${activeYear === yearKey ? "active-year" : ""}`}
                    data-year={yearKey}
                    type="button"
                    onClick={() => scrollToYear(yearKey)}
                  >
                    {yearKey === "present" ? "NOW" : yearKey}
                  </button>
                ))}
              </div>

              <div className="timeline-line-wrap">
                <div className="timeline-line" ref={timelineLineRef}>
                  <div
                    className="timeline-progress"
                    style={{
                      transform: `translateX(-50%) scaleY(${progressScale})`,
                    }}
                  ></div>
                  <div
                    className="timeline-glow-dot"
                    style={{
                      transform: `translate3d(-50%, ${dotY - 10}px, 0)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="timeline-content">
          {yearOrder.map((yearKey) => {
            const experiences = experienceByYear[yearKey] || [];

            return (
              <section
                key={yearKey}
                className={`year-section ${activeYear === yearKey ? "active-section" : ""}`}
                id={`section-${yearKey}`}
                data-year={yearKey}
                ref={(el) => {
                  sectionRefs.current[yearKey] = el;
                }}
              >
                <div className="year-section-header">
                  <h2 className="year-section-heading">
                    {yearLabels[yearKey]}
                  </h2>
                  <span className="year-section-count">
                    {experiences.length}{" "}
                    {experiences.length === 1 ? "role" : "roles"}
                  </span>
                </div>

                <div className="year-cards">
                  {experiences.map((exp) => {
                    const isOpen = expandedByYear[yearKey] === exp.id;

                    return (
                      <article
                        key={exp.id}
                        className={`experience-card ${isOpen ? "is-open" : ""}`}
                        data-id={exp.id}
                        data-year={yearKey}
                      >
                        <button
                          className="experience-toggle"
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => toggleCard(yearKey, exp.id)}
                        >
                          <div className="experience-main">
                            <h3>{exp.title}</h3>
                            <p className="experience-company">{exp.company}</p>

                            <div className="experience-meta">
                              <span>{exp.tag}</span>
                            </div>
                          </div>

                          <div className="experience-arrow" aria-hidden="true">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </div>
                        </button>

                        <div className="experience-details">
                          <div className="experience-details-inner">
                            <div className="experience-details-content">
                              <div className="detail-top-row">
                                <div>
                                  <p className="detail-kicker">{exp.kicker}</p>
                                  <p className="detail-location">
                                    {exp.company} · {exp.location}
                                  </p>
                                </div>
                                <span className="detail-date">{exp.date}</span>
                              </div>

                              <p className="detail-summary">{exp.summary}</p>

                              <div className="detail-skills">
                                {exp.skills.map((skill) => (
                                  <span key={skill}>{skill}</span>
                                ))}
                              </div>

                              <ul className="detail-list">
                                {exp.bullets.map((bullet) => (
                                  <li key={bullet}>{bullet}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
