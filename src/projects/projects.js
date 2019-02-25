import "./projects.scss";
import "../partials/partials";
import projectData from "../projects-data.json";

const toggleProjectContent = (e) => {
  const selected_els = Array.from(
    document.querySelectorAll("[data-selected = 'true']"),
  );
  const parent_el = e.currentTarget.parentElement;
  if (!parent_el.dataset.selected || parent_el.dataset.selected === "false") {
    selected_els.map((_) => {
      _.dataset.selected = "false";
    });
    parent_el.dataset.selected = "true";
  } else {
    parent_el.dataset.selected = "false";
  }
  showContent();
};

const showContent = () => {
  const projects = Array.from(document.querySelectorAll(".project"));
  projects.map((_) => {
    const content_el = _.querySelector(".project-content");
    const description_el = _.querySelector(".project-content-text");
    const description_height = description_el.getBoundingClientRect().height;
    content_el.style.height = `${0}px`;
    description_el.style.marginTop = `${0 - description_height}px`;
    if (_.dataset.selected === "true") {
      content_el.style.height = `${description_height}px`;
      description_el.style.marginTop = `${0}px`;
    }
  });
};

const loadData = () => {
  const projects_section = document.querySelector(".projects-section");
  let project = document.querySelector(".project");
  Object.entries(projectData).map(([k, v], i) => {
    if (i !== 0) {
      project = project.cloneNode(true);
    }
    project.querySelector(".project-card-title").textContent = `${v.title}`;
    project.querySelector(".project-card-img").src = `./assets/icons/icon-${
      v.icon
    }`;
    project.querySelector(".project-content-title").textContent = `${v.title}`;
    project.querySelector(".project-content-link").href = `${v.link}`;
    project.querySelector(".project-content-description").textContent = `${
      v.description
    }`;
    project
      .querySelector(".project-card")
      .addEventListener("click", toggleProjectContent);
    project.dataset.selected = "false";
    projects_section.appendChild(project);
  });
  showContent();
};

window.addEventListener("load", loadData);
window.addEventListener("load", showContent);
window.addEventListener("resize", showContent);
