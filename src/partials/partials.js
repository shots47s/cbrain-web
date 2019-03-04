/*
 ============================================================
 | NAVIGATION BAR
 ============================================================
*/

const setSelectedLink = () => {
  const path = window.location.pathname.split("/");
  const selection = path[path.length - 1].split(".")[0];
  const selected_link = document.querySelector(`[data-page='${selection}']`);
  if (selected_link) {
    selected_link.dataset.active = true;
  }
};

const toggleNavigation = () => {
  const nav = document.querySelector(".nav");
  return nav.dataset.open === "false"
    ? nav.setAttribute("data-open", "true")
    : nav.setAttribute("data-open", "false");
};


const burger = document.querySelector(".burger");
burger.addEventListener("click", toggleNavigation);

window.addEventListener("load", setSelectedLink);
