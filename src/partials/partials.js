/*
 ============================================================
 | NAVIGATION BAR
 ============================================================
*/

const toggleNavigation = () => {
  const nav = document.querySelector(".nav");
  return nav.dataset.open === "false"
    ? nav.setAttribute("data-open", "true")
    : nav.setAttribute("data-open", "false");
};

const burger = document.querySelector(".burger");
burger.addEventListener("click", toggleNavigation);
