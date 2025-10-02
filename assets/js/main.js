// Bundle entrypoint: Alpine + plugin + site scripts
import Alpine from "alpinejs";
import alpineTypewriter from "@marcreichel/alpine-typewriter";
import "./posthog.js";
import { initHeroShader } from "./shader.js";

// Register plugin and start Alpine
Alpine.plugin(alpineTypewriter);
window.Alpine = Alpine;
Alpine.start();

// --- Site scripts previously in static/js/main.js ---

// Scroll indicator hide-on-scroll
(function () {
  const el = document.getElementById("scroll-indicator");
  if (!el) return;
  const toggle = () => {
    if (window.scrollY > 4) {
      el.classList.add("opacity-0", "pointer-events-none");
    } else {
      el.classList.remove("opacity-0", "pointer-events-none");
    }
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
})();

// Initialize hero shader
initHeroShader();
