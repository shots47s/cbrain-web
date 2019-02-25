import "./about.scss";
import "../partials/partials";
import teamData from "../team-data.json";

let selected_id;
const modal_background = document.querySelector(".modal-background");
const modal_container = document.querySelector(".modal-container");

const toggleModal = (e) => {
  selected_id = e.currentTarget.dataset.id;
  const modal_els = Array.from(document.querySelectorAll("[data-modal='true']"));

  if (modal_els.length > 0) {
    modal_container.removeChild(modal_container.firstChild);
    selected_id = "";
    return modal_els.map((_) => {
      _.dataset.modal = "false";
    });
  }
  const selected_employee = document.querySelector(`[data-id = "${selected_id}"]`);
  const cloned_employee = selected_employee.cloneNode(true);
  const close_icon = employee.querySelector(".employee-icon");
  selected_employee.dataset.modal = "true";
  modal_background.dataset.modal = "true";
  modal_container.dataset.modal = "true";
  close_icon.addEventListener("click", toggleModal);
  modal_container.appendChild(employee);
};

const loadGrid = Object.entries(teamData).map(([k, v], i) => {
  let employee = document.querySelector(".team-employee");
  if (i !== 0) {
    employee = employee.cloneNode(true);
  }
  const grid_el = document.querySelector(".team-grid");
  const employee_img = employee.querySelector(".employee-img");
  const employee_name = employee.querySelector(".employee-name");
  const employee_occupation = employee.querySelector(".employee-occupation");
  const employee_bio = employee.querySelector(".bio-text");
  require.context("../assets/team", true, /\.(png|jpeg|svg)$/);
  employee_img.style.backgroundImage =  `url('./assets/team/${v.imageURL}')`;
  employee_name.textContent = `${v.name}`;
  employee_occupation.textContent = `${v.occupation}`;
  employee_bio.textContent = `${v.bio}`;

  employee.dataset.id = i;
  employee.dataset.modal = "false";
  employee.addEventListener("click", toggleModal);
  return grid_el.appendChild(employee);
});


window.addEventListener("load", loadGrid);
modal_background.addEventListener("click", toggleModal);
