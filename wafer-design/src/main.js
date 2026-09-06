/**
 * wafer's design — tiny runtime helpers
 * Keep motion quiet; respect reduced motion.
 */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced) {
  document.documentElement.dataset.waferMotion = "on";
}

document.querySelectorAll("[data-wafer-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
