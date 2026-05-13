/* Home.jsx */
import { useEffect } from "react";
import "../styles/shared.css";
import "../styles/home.css";

export default function Home() {
  useEffect(() => {
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

    const heroLine1 = document.getElementById("heroLine1");
    const heroLine2 = document.getElementById("heroLine2");
    const typedSubtext = document.getElementById("typedSubtext");

    const heroTextLine1 = "Hello, I’m";
    const heroTextLine2 = "Tausif Ahmed.";
    const subText =
      "I build full-stack applications, robotics systems, and technical support solutions with a focus on clean design, practical impact, and meaningful user experiences.";

    if (heroLine1) heroLine1.textContent = "";
    if (heroLine2) heroLine2.textContent = "";
    if (typedSubtext) typedSubtext.textContent = "";

    typeTextToElement(heroLine1, heroTextLine1, 55, () => {
      typeTextToElement(heroLine2, heroTextLine2, 50, () => {
        setTimeout(() => {
          typeTextToElement(typedSubtext, subText, 15);
        }, 150);
      });
    });

    return () => {
      if (heroLine1 && heroLine1._typingTimer) {
        clearInterval(heroLine1._typingTimer);
      }

      if (heroLine2 && heroLine2._typingTimer) {
        clearInterval(heroLine2._typingTimer);
      }

      if (typedSubtext && typedSubtext._typingTimer) {
        clearInterval(typedSubtext._typingTimer);
      }
    };
  }, []);

  return (
    <>
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
