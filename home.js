let heroSequenceStarted = false;

/* ========================================
   TEXT TYPE / DELETE HELPERS
======================================== */
function typeTextToElement(element, text, speed = 60, callback) {
  if (!element) return;

  if (element._typingTimer) {
    clearInterval(element._typingTimer);
    element._typingTimer = null;
  }

  let index = 0;
  element.textContent = "";

  element._typingTimer = setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;

    if (index >= text.length) {
      clearInterval(element._typingTimer);
      element._typingTimer = null;
      if (callback) callback();
    }
  }, speed);
}

function deleteTextFromElement(element, speed = 40, callback) {
  if (!element) return;

  if (element._typingTimer) {
    clearInterval(element._typingTimer);
    element._typingTimer = null;
  }

  let text = element.textContent;

  const timer = setInterval(() => {
    text = text.slice(0, -1);
    element.textContent = text;

    if (text.length === 0) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

/* ========================================
   HERO TYPE-IN
======================================== */
const heroLine1 = document.getElementById("heroLine1");
const heroLine2 = document.getElementById("heroLine2");
const typedSubtext = document.getElementById("typedSubtext");

const heroTextLine1 = "Hello, I’m";
const heroTextLine2 = "Tausif Ahmed.";
const subText =
  "I build full-stack applications, robotics systems, and provide excellent technical support with a focus on clean design, practical impact, and meaningful user experiences.";

function startHeroSequence() {
  if (heroSequenceStarted) return;
  heroSequenceStarted = true;

  if (heroLine1) heroLine1.textContent = "";
  if (heroLine2) heroLine2.textContent = "";
  if (typedSubtext) typedSubtext.textContent = "";

  typeTextToElement(heroLine1, heroTextLine1, 62, () => {
    typeTextToElement(heroLine2, heroTextLine2, 58, () => {
      setTimeout(() => {
        typeTextToElement(typedSubtext, subText, 18);
      }, 180);
    });
  });
}

/* ========================================
   LOADING SCREEN SEQUENCE
======================================== */
const loadingScreen = document.getElementById("loadingScreen");
const loadingPillWrap = document.getElementById("loadingPillWrap");
const loadingPill = document.getElementById("loadingPill");
const loadingText = document.getElementById("loadingText");

function startLoadingSequence() {
  if (!loadingScreen || !loadingPillWrap || !loadingPill || !loadingText) {
    document.body.classList.add("is-ready");
    startHeroSequence();
    return;
  }

  typeTextToElement(loadingText, "LOADING", 92, () => {
    setTimeout(() => {
      deleteTextFromElement(loadingText, 52, () => {
        setTimeout(() => {
          typeTextToElement(loadingText, "HELLO WORLD", 82, () => {
            setTimeout(() => {
              loadingScreen.classList.add("loading-complete");

              setTimeout(() => {
                loadingScreen.classList.add("reveal-home");
                loadingPillWrap.classList.add("expand-home");

                setTimeout(() => {
                  document.body.classList.add("is-ready");
                  startHeroSequence();
                }, 280);

                setTimeout(() => {
                  loadingScreen.classList.add("is-hidden");
                }, 1050);
              }, 180);
            }, 420);
          });
        }, 120);
      });
    }, 420);
  });
}

/* ========================================
   STARTUP
======================================== */
window.addEventListener("load", () => {
  startLoadingSequence();
});

/* ========================================
   R2-D2 HEAD MOTION
======================================== */
/*
const robotPeek = document.getElementById("robotPeek");
const r2Unit = document.getElementById("r2Unit");
const r2Dome = document.getElementById("r2Dome");
const r2MainEye = document.getElementById("r2MainEye");
const r2SmallEye = document.getElementById("r2SmallEye");

if (robotPeek && r2Unit && r2Dome && r2MainEye && r2SmallEye) {
  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.5;

  let currentRotate = 0;
  let currentTilt = 0;
  let currentShiftX = 0;
  let currentShiftY = 0;

  let eyeX = 0;
  let eyeY = 0;
  let smallEyeX = 0;
  let smallEyeY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animateR2() {
    const rect = robotPeek.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const normalizedX = Math.max(
      -1,
      Math.min(1, dx / (window.innerWidth * 0.35)),
    );
    const normalizedY = Math.max(
      -1,
      Math.min(1, dy / (window.innerHeight * 0.35)),
    );

    const targetRotate = normalizedX * 16;
    const targetTilt = normalizedY * -7;
    const targetShiftX = normalizedX * 8;
    const targetShiftY = normalizedY * 3;

    currentRotate += (targetRotate - currentRotate) * 0.08;
    currentTilt += (targetTilt - currentTilt) * 0.08;
    currentShiftX += (targetShiftX - currentShiftX) * 0.08;
    currentShiftY += (targetShiftY - currentShiftY) * 0.08;

    eyeX += (normalizedX * 8 - eyeX) * 0.12;
    eyeY += (normalizedY * 5 - eyeY) * 0.12;

    smallEyeX += (normalizedX * 4 - smallEyeX) * 0.12;
    smallEyeY += (normalizedY * 3 - smallEyeY) * 0.12;

    r2Unit.style.transform = "translateY(0px)";
    r2Dome.style.transform = `translateX(-50%) translate(${currentShiftX}px, ${currentShiftY}px) rotate(${currentRotate}deg) rotateX(${currentTilt}deg)`;

    r2MainEye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    r2SmallEye.style.transform = `translate(${smallEyeX}px, ${smallEyeY}px)`;

    requestAnimationFrame(animateR2);
  }

  animateR2();
}
*/
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
    let activeSocialLink = null;

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
      activeSocialLink = null;

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
        activeSocialLink = link;

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

/* ========================================
   REMOVE NETWORK / STARS CANVAS
======================================== */
const canvas = document.getElementById("network");

if (canvas) {
  canvas.style.display = "none";
}
