import "./about.scss";
import "../partials/partials";
import teamData from "../team-data.json";

const loadEmployeeDetails = (id, modal, employee_el) => {
  if (modal === "true") {
    const links_el = document.querySelector(".employee-links");
    while (links_el.firstChild) {
      links_el.removeChild(links_el.firstChild);
    }
    employee_el.querySelector(".bio-text").textContent = `${teamData[id].bio}`;
    Object.entries(teamData[id].links).map(([k, v]) => {
      const link_el = document.createElement("a");
      link_el.setAttribute("class", "employee-link");
      link_el.textContent = `${k}`;
      link_el.href = `${v}`;
      link_el.target = "_blank";
      return links_el.appendChild(link_el);
    });
  }
  employee_el.querySelector(".employee-name").textContent = `${teamData[id].name}`;
  employee_el.querySelector(".employee-occupation").textContent = `${teamData[id].occupation}`;
  employee_el.querySelector(".employee-img").style.backgroundImage =  `url('./assets/team/${teamData[id].imageURL}')`;
};


const toggleModal = (e) => {
  const modal_container = document.querySelector(".modal-container");
  const modal_background = document.querySelector(".modal-background");
  if (e.currentTarget.dataset.modal === "false") {
    const modal_employee = modal_container.querySelector(".modal-employee");
    const modal_close = modal_employee.querySelector(".employee-button");

    document.body.dataset.modal    = "true";
    modal_employee.dataset.modal   = "true";
    modal_background.dataset.modal = "true";
    modal_container.dataset.modal  = "true";

    modal_close.addEventListener("click", toggleModal);
    modal_background.addEventListener("click", toggleModal);

    loadEmployeeDetails(e.currentTarget.dataset.id, modal_employee.dataset.modal, modal_employee);
    return modal_container.appendChild(modal_employee);
  }

  return Array.from(document.querySelectorAll("[data-modal='true']")).map((_) => {
    _.dataset.modal = "false";
    return null;
  });
};


const loadEmployee = Object.entries(teamData).map(([k, v], i) => {
  const grid_el = document.querySelector(".team-grid");
  const affiliate_grid_el = document.querySelector(".affiliate-grid");
  let employee = document.querySelector(".team-employee");
  if (i !== 0) {
    employee = employee.cloneNode(true);
  }
  employee.dataset.id = i;
  employee.dataset.modal = "false";
  employee.addEventListener("click", toggleModal);
  if (v.affiliated === true) {
    affiliate_grid_el.appendChild(employee);
  } else {
    grid_el.appendChild(employee);
  }
  return loadEmployeeDetails(i, employee.dataset.modal, employee);
});


window.addEventListener("load", loadEmployee);
