/* ========================================
   PROJECT DATA
======================================== */
const projects = [
  {
    id: "lunabotics-autonomy",
    title: "NASA Lunabotics Autonomy System",
    year: "2025 – Present",
    categoryLabel: "Robotics",
    summary:
      "Built autonomy and obstacle detection logic for a competition robot, focusing on navigation decisions, perception workflows, and subsystem coordination.",
    stack: ["Python", "OpenCV", "ROS", "Linux"],
    bullets: [
      "Designed robot navigation logic for autonomous movement and obstacle handling.",
      "Worked on perception workflows using computer vision and robotics tools.",
      "Supported subsystem integration across software, electrical, and mechanical teams.",
    ],
  },
  {
    id: "mission-control",
    title: "Mission Control Center",
    year: "2026",
    categoryLabel: "Software",
    summary:
      "A mission-style control dashboard for robot monitoring, status tracking, and autonomous decision visibility with a polished real-time interface.",
    stack: ["HTML", "CSS", "JavaScript", "Python"],
    bullets: [
      "Created a dashboard layout for robot telemetry and control visibility.",
      "Focused on clean framing, screen fit, and real-time system feedback.",
      "Improved usability for monitoring robot state and autonomous actions.",
    ],
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio Website",
    year: "2026",
    categoryLabel: "Web",
    summary:
      "A custom multi-page portfolio built to showcase work, projects, experience, and identity through an interactive and modern visual design.",
    stack: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Built separate pages for home, work, projects, and other sections.",
      "Created a consistent visual identity with glow effects and animated interactions.",
      "Focused on layout clarity, responsiveness, and strong presentation.",
    ],
  },
  {
    id: "issue-tracker",
    title: "Issue Tracking System",
    year: "2025",
    categoryLabel: "Software",
    summary:
      "A full CRUD issue tracking system with authentication, comments, permissions, sorting, filtering, and modal-based interaction.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    bullets: [
      "Implemented issue and comment CRUD functionality.",
      "Built permissions for users, responsible persons, and admins.",
      "Improved UI consistency using modern Bootstrap-based styling.",
    ],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard App",
    year: "2025",
    categoryLabel: "Web",
    summary:
      "A responsive weather dashboard with forecast cards, modal details, unit toggling, and polished interface behavior.",
    stack: ["React", "Tailwind", "API Integration"],
    bullets: [
      "Designed 5-day weather forecast cards with interactive modal details.",
      "Added responsive layout and cleaner visual presentation.",
      "Focused on smooth user experience and useful forecast interaction.",
    ],
  },
  {
    id: "obstacle-engine",
    title: "Obstacle Avoidance Decision Engine",
    year: "2026",
    categoryLabel: "Robotics",
    summary:
      "A decision system for robot navigation that compares scene regions and turns based on which direction provides better clearance.",
    stack: ["Python", "Kinect", "Arduino"],
    bullets: [
      "Compared left, center, and right scene depth regions for movement choices.",
      "Improved behavior for stuck recovery and re-scan turning logic.",
      "Focused on smarter direction decisions rather than simple object checks.",
    ],
  },
];

/* ========================================
   ELEMENTS
======================================== */
const projectsTrack = document.getElementById("projectsTrack");
const horizontalSection = document.getElementById("horizontalSection");
const horizontalProgressFill = document.getElementById(
  "horizontalProgressFill",
);

/* ========================================
   PROJECT TEMPLATE
======================================== */
function createProjectCard(project) {
  const stackHtml = project.stack
    .map((item) => `<span>${item}</span>`)
    .join("");
  const bulletsHtml = project.bullets
    .map((bullet) => `<li>${bullet}</li>`)
    .join("");

  return `
    <article class="project-card">
      <div class="project-card-inner">
        <div class="project-card-top">
          <span class="project-category">${project.categoryLabel}</span>
          <span class="project-year">${project.year}</span>
        </div>

        <h2 class="project-title">${project.title}</h2>
        <p class="project-summary">${project.summary}</p>

        <div class="project-stack">
          ${stackHtml}
        </div>

        <ul class="project-bullets">
          ${bulletsHtml}
        </ul>
      </div>
    </article>
  `;
}

/* ========================================
   RENDER PROJECTS
======================================== */
function renderProjects() {
  projectsTrack.innerHTML = projects.map(createProjectCard).join("");
}

/* ========================================
   HORIZONTAL SCROLL SETUP
======================================== */
function updateHorizontalSectionHeight() {
  if (!horizontalSection || !projectsTrack) return;

  if (window.innerWidth <= 820) {
    horizontalSection.style.height = "auto";
    projectsTrack.style.transform = "translate3d(0, 0, 0)";
    if (horizontalProgressFill) {
      horizontalProgressFill.style.width = "100%";
    }
    return;
  }

  const stickyHeight = window.innerHeight - 140;
  const totalScrollWidth = projectsTrack.scrollWidth;
  const viewportWidth = window.innerWidth;
  const horizontalDistance = Math.max(
    totalScrollWidth - viewportWidth + 120,
    0,
  );

  horizontalSection.style.height = `${horizontalDistance + stickyHeight + 120}px`;
}

function updateHorizontalScroll() {
  if (!horizontalSection || !projectsTrack) return;

  if (window.innerWidth <= 820) {
    projectsTrack.style.transform = "translate3d(0, 0, 0)";
    return;
  }

  const sectionTop = horizontalSection.offsetTop;
  const sectionHeight = horizontalSection.offsetHeight;
  const stickyHeight = window.innerHeight - 140;
  const maxScrollable = Math.max(sectionHeight - stickyHeight, 1);

  const scrollY = window.scrollY;
  const rawProgress = (scrollY - sectionTop) / maxScrollable;
  const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

  const totalScrollWidth = projectsTrack.scrollWidth;
  const viewportWidth = window.innerWidth;
  const maxTranslate = Math.max(totalScrollWidth - viewportWidth + 120, 0);
  const translateX = maxTranslate * clampedProgress;

  projectsTrack.style.transform = `translate3d(${-translateX}px, 0, 0)`;

  if (horizontalProgressFill) {
    horizontalProgressFill.style.width = `${clampedProgress * 100}%`;
  }
}

/* ========================================
   INIT PROJECTS
======================================== */
renderProjects();
updateHorizontalSectionHeight();
updateHorizontalScroll();

window.addEventListener("load", () => {
  updateHorizontalSectionHeight();
  updateHorizontalScroll();
});

window.addEventListener("resize", () => {
  updateHorizontalSectionHeight();
  updateHorizontalScroll();
});

window.addEventListener("scroll", updateHorizontalScroll, { passive: true });

/* ========================================
   CUSTOM CURSOR GLOW + SOCIAL SIDEBAR
======================================== */
const cursorGlow = document.getElementById("cursorGlow");
const socialSidebar = document.querySelector(".social-sidebar");
const socialLinks = document.querySelectorAll(".social-sidebar a");

if (cursorGlow) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  let targetWidth = 50;
  let targetHeight = 50;
  let currentWidth = 50;
  let currentHeight = 50;

  let pinnedToSidebar = false;
  let socialMorphTimer = null;
  let socialActive = false;

  const followSpeed = 0.22;
  const sizeSpeed = 0.18;

  window.addEventListener("mousemove", (event) => {
    if (!pinnedToSidebar) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  });

  function animateCursorGlow() {
    currentX += (mouseX - currentX) * followSpeed;
    currentY += (mouseY - currentY) * followSpeed;

    currentWidth += (targetWidth - currentWidth) * sizeSpeed;
    currentHeight += (targetHeight - currentHeight) * sizeSpeed;

    cursorGlow.style.width = `${currentWidth}px`;
    cursorGlow.style.height = `${currentHeight}px`;
    cursorGlow.style.transform = `translate3d(${currentX - currentWidth / 2}px, ${currentY - currentHeight / 2}px, 0)`;

    requestAnimationFrame(animateCursorGlow);
  }

  animateCursorGlow();

  /* ========================================
     GENERAL HOVER LOGIC
  ======================================== */
  document.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const isNavLink = item.classList.contains("nav-link");
      const isSocialLink = item.closest(".social-sidebar");

      if (isSocialLink) return;

      if (!pinnedToSidebar && !isNavLink) {
        targetWidth = 90;
        targetHeight = 90;
      }

      if (isNavLink) {
        cursorGlow.style.opacity = "0";
      }
    });

    item.addEventListener("mouseleave", () => {
      const isNavLink = item.classList.contains("nav-link");
      const isSocialLink = item.closest(".social-sidebar");

      if (isSocialLink) return;

      if (!pinnedToSidebar && !isNavLink) {
        targetWidth = 50;
        targetHeight = 50;
      }

      if (isNavLink) {
        cursorGlow.style.opacity = "0.9";
      }
    });
  });

  /* ========================================
     SOCIAL SIDEBAR MORPH
  ======================================== */
  if (socialSidebar && socialLinks.length) {
    function getLinkCenterY(link) {
      const sidebarRect = socialSidebar.getBoundingClientRect();
      const rect = link.getBoundingClientRect();
      return rect.top - sidebarRect.top + rect.height / 2;
    }

    function getSidebarMetrics() {
      const sidebarRect = socialSidebar.getBoundingClientRect();
      const firstRect = socialLinks[0].getBoundingClientRect();
      const lastRect =
        socialLinks[socialLinks.length - 1].getBoundingClientRect();

      const firstCenterY =
        firstRect.top - sidebarRect.top + firstRect.height / 2;
      const lastCenterY = lastRect.top - sidebarRect.top + lastRect.height / 2;
      const centerY = (firstCenterY + lastCenterY) / 2;
      const fullHeight = lastCenterY - firstCenterY + 56;

      return {
        centerY,
        fullHeight,
      };
    }

    function startSidebarCircle(link) {
      const startY = getLinkCenterY(link);

      socialSidebar.classList.remove("is-pinned");
      socialSidebar.classList.add("is-circle");

      socialSidebar.style.setProperty("--social-pill-w", "74px");
      socialSidebar.style.setProperty("--social-pill-h", "74px");
      socialSidebar.style.setProperty("--social-pill-y", `${startY}px`);

      socialActive = true;
      pinnedToSidebar = true;

      targetWidth = 0;
      targetHeight = 0;
      cursorGlow.style.opacity = "0";
    }

    function expandSidebarPill() {
      if (!socialActive) return;

      const { centerY, fullHeight } = getSidebarMetrics();

      socialSidebar.classList.add("is-pinned");
      socialSidebar.style.setProperty("--social-pill-w", "74px");
      socialSidebar.style.setProperty("--social-pill-h", `${fullHeight}px`);
      socialSidebar.style.setProperty("--social-pill-y", `${centerY}px`);
    }

    function collapseSidebar() {
      clearTimeout(socialMorphTimer);

      socialActive = false;
      pinnedToSidebar = false;

      socialSidebar.classList.remove("is-circle");
      socialSidebar.classList.remove("is-pinned");

      socialSidebar.style.setProperty("--social-pill-w", "74px");
      socialSidebar.style.setProperty("--social-pill-h", "74px");

      targetWidth = 50;
      targetHeight = 50;
      cursorGlow.style.opacity = "0.9";
    }

    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        clearTimeout(socialMorphTimer);
        startSidebarCircle(link);

        socialMorphTimer = setTimeout(() => {
          expandSidebarPill();
        }, 90);
      });
    });

    socialSidebar.addEventListener("mouseleave", () => {
      collapseSidebar();
    });
  }
}
