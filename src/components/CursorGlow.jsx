import { useEffect } from "react";
import "../styles/shared.css";

export default function CursorGlow() {
  useEffect(() => {
    const cursorGlow = document.getElementById("cursorGlow");
    const socialSidebar = document.querySelector(".social-sidebar");
    const socialLinks = document.querySelectorAll(".social-sidebar a");

    if (!cursorGlow) return;

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

    const handleMouseMove = (event) => {
      if (!pinnedToSidebar) {
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    function animateCursorGlow() {
      currentX += (mouseX - currentX) * followSpeed;
      currentY += (mouseY - currentY) * followSpeed;

      currentWidth += (targetWidth - currentWidth) * sizeSpeed;
      currentHeight += (targetHeight - currentHeight) * sizeSpeed;

      cursorGlow.style.width = `${currentWidth}px`;
      cursorGlow.style.height = `${currentHeight}px`;
      cursorGlow.style.transform = `translate3d(${currentX - currentWidth / 2}px, ${currentY - currentHeight / 2}px, 0)`;

      animationFrameId = requestAnimationFrame(animateCursorGlow);
    }

    animateCursorGlow();

    const hoverItems = document.querySelectorAll("a, button");

    const enterHandlers = [];
    const leaveHandlers = [];

    hoverItems.forEach((item, index) => {
      const handleEnter = () => {
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
      };

      const handleLeave = () => {
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
      };

      enterHandlers[index] = handleEnter;
      leaveHandlers[index] = handleLeave;

      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

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
        const lastCenterY =
          lastRect.top - sidebarRect.top + lastRect.height / 2;
        const centerY = (firstCenterY + lastCenterY) / 2;
        const fullHeight = lastCenterY - firstCenterY + 56;

        return { centerY, fullHeight };
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
        const handleSocialEnter = () => {
          clearTimeout(socialMorphTimer);
          startSidebarCircle(link);

          socialMorphTimer = setTimeout(() => {
            expandSidebarPill();
          }, 90);
        };

        link._socialEnterHandler = handleSocialEnter;
        link.addEventListener("mouseenter", handleSocialEnter);
      });

      socialSidebar._leaveHandler = collapseSidebar;
      socialSidebar.addEventListener("mouseleave", collapseSidebar);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);

      hoverItems.forEach((item, index) => {
        item.removeEventListener("mouseenter", enterHandlers[index]);
        item.removeEventListener("mouseleave", leaveHandlers[index]);
      });

      if (socialLinks.length) {
        socialLinks.forEach((link) => {
          if (link._socialEnterHandler) {
            link.removeEventListener("mouseenter", link._socialEnterHandler);
          }
        });
      }

      if (socialSidebar && socialSidebar._leaveHandler) {
        socialSidebar.removeEventListener(
          "mouseleave",
          socialSidebar._leaveHandler,
        );
      }
    };
  }, []);

  return <div className="cursor-glow" id="cursorGlow"></div>;
}
