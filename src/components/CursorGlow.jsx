/* CursorGlow.jsx */
import { useEffect } from "react";
import "../styles/shared.css";

export default function CursorGlow() {
  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const cursorGlow = document.getElementById("cursorGlow");

    if (!cursorGlow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    let targetSize = 50;
    let currentSize = 50;

    const followSpeed = 0.22;
    const sizeSpeed = 0.18;

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    function animateCursorGlow() {
      currentX += (mouseX - currentX) * followSpeed;
      currentY += (mouseY - currentY) * followSpeed;

      currentSize += (targetSize - currentSize) * sizeSpeed;

      cursorGlow.style.width = `${currentSize}px`;
      cursorGlow.style.height = `${currentSize}px`;
      cursorGlow.style.transform = `translate3d(${
        currentX - currentSize / 2
      }px, ${currentY - currentSize / 2}px, 0)`;

      animationFrameId = requestAnimationFrame(animateCursorGlow);
    }

    animateCursorGlow();

    const hoverItems = document.querySelectorAll("a, button");

    const enterHandlers = [];
    const leaveHandlers = [];

    hoverItems.forEach((item, index) => {
      const handleEnter = () => {
        const isNavLink =
          item.classList.contains("nav-link") ||
          item.classList.contains("mobile-nav-link");
        const isSocialLink =
          item.closest(".social-sidebar") || item.closest(".mobile-social");

        if (isNavLink || isSocialLink) {
          cursorGlow.style.opacity = "0";
          return;
        }

        targetSize = 90;
      };

      const handleLeave = () => {
        const isNavLink =
          item.classList.contains("nav-link") ||
          item.classList.contains("mobile-nav-link");
        const isSocialLink =
          item.closest(".social-sidebar") || item.closest(".mobile-social");

        if (isNavLink || isSocialLink) {
          cursorGlow.style.opacity = "0.9";
          return;
        }

        targetSize = 50;
      };

      enterHandlers[index] = handleEnter;
      leaveHandlers[index] = handleLeave;

      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);

      hoverItems.forEach((item, index) => {
        item.removeEventListener("mouseenter", enterHandlers[index]);
        item.removeEventListener("mouseleave", leaveHandlers[index]);
      });
    };
  }, []);

  return <div className="cursor-glow" id="cursorGlow"></div>;
}
