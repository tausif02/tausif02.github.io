import { useEffect } from "react";
import "../styles/shared.css";
import "../styles/home.css";

export default function Home() {
  useEffect(() => {
    let heroSequenceStarted = false;

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

    const heroLine1 = document.getElementById("heroLine1");
    const heroLine2 = document.getElementById("heroLine2");
    const typedSubtext = document.getElementById("typedSubtext");
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingPillWrap = document.getElementById("loadingPillWrap");
    const loadingText = document.getElementById("loadingText");

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

    function startLoadingSequence() {
      if (!loadingScreen || !loadingPillWrap || !loadingText) {
        document.body.classList.add("nav-ready", "social-ready", "is-ready");
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
                    loadingPillWrap.classList.add("expand-home");
                  }, 180);

                  setTimeout(() => {
                    document.body.classList.add("nav-ready");
                  }, 1080);

                  setTimeout(() => {
                    document.body.classList.add("social-ready");
                  }, 1280);

                  setTimeout(() => {
                    document.body.classList.add("is-ready");
                  }, 1560);

                  setTimeout(() => {
                    startHeroSequence();
                  }, 1700);

                  setTimeout(() => {
                    loadingScreen.classList.add("reveal-home");
                  }, 1660);

                  setTimeout(() => {
                    loadingScreen.classList.add("is-hidden");
                  }, 2280);
                }, 420);
              });
            }, 120);
          });
        }, 420);
      });
    }

    startLoadingSequence();

    return () => {
      document.body.classList.remove("nav-ready", "social-ready", "is-ready");
    };
  }, []);

  return (
    <>
      <div className="loading-screen" id="loadingScreen" aria-hidden="true">
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            <span className="loading-role">ROBOTICS AUTONOMY ENGINEER</span>
            <span className="loading-dot">•</span>
            <span className="loading-role">FULL STACK DEVELOPER</span>
            <span className="loading-dot">•</span>
            <span className="loading-role">ROBOTICS AUTONOMY ENGINEER</span>
            <span className="loading-dot">•</span>
            <span className="loading-role">FULL STACK DEVELOPER</span>
          </div>
        </div>

        <div className="loading-pill-wrap" id="loadingPillWrap">
          <div className="loading-pill">
            <div className="loading-pill-glow"></div>

            <div className="loading-pill-content">
              <span className="loading-square"></span>
              <span className="loading-pill-text" id="loadingText"></span>
            </div>
          </div>
        </div>
      </div>

      <main className="page-main">
        <section className="hero" id="home">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-code-wrap">
                <div className="hero-code-line hero-line-1">
                  <span className="hero-code-text" id="heroLine1"></span>
                </div>

                <div className="hero-code-line hero-line-2">
                  <span className="hero-code-text accent" id="heroLine2"></span>
                  <span className="code-cursor"></span>
                </div>
              </div>

              <p className="hero-description">
                <span id="typedSubtext"></span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 Tausif Ahmed</div>
      </footer>
    </>
  );
}
