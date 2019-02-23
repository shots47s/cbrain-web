import "./about.scss";
import "../partials/partials";
import teamData from "../team-data.json";

let selectedId;
const modalBackgroundEl = document.querySelector(".modal-background");
const modalContainer = document.querySelector(".modal-container");

const openModal = (e) => {
  const selectedEmployeeEl = document.querySelector(`[data-id = "${selectedId}"]`);
  if (selectedEmployeeEl.dataset.modal === "false") {
    selectedEmployeeEl.dataset.modal = "true";
    modalBackgroundEl.dataset.modal = "true";
    modalContainer.dataset.modal = "true";
    const employeeEl = selectedEmployeeEl.cloneNode(true);
    const modalIcon = employeeEl.querySelector(".employee-icon");
    modalIcon.addEventListener("click", closeModal);
    modalContainer.appendChild(employeeEl);
  }
};

const closeModal = (e) => {
  e.stopPropagation();
  const modalList = Array.from(document.querySelectorAll("[data-modal=\"true\"]"));
  modalList.map((_) => {
    _.dataset.modal = "false";
  });
  modalContainer.removeChild(modalContainer.firstChild);
  selectedId = "";
};

const setSelection = (e, type) => {
  selectedId = e.currentTarget.dataset.id;
  openModal();
};

const loadGrid = Object.entries(teamData).map(([k, v], i) => {
  let employee = document.querySelector(".team-employee");
  if (i != 0) {
    employee = employee.cloneNode(true);
  }
  const grid_el = document.querySelector(".team-grid");
  const employee_img = employee.querySelector(".employee-img");
  const employee_name = employee.querySelector(".employee-name");
  const employee_occupation = employee.querySelector(".employee-occupation");
  const employee_bio = employee.querySelector(".bio-text");
  const modal_icon = employee.querySelector(".employee-icon");
  require.context("../assets/team", true, /\.(png|jpe?g|svg)$/);
  employee_img.style.backgroundImage =  `url('./assets/team/${v.imageURL}')`;
  employee_name.textContent = `${v.name}`;
  employee_occupation.textContent = ` ${v.occupation}`;
  employee_bio.textContent = ` ${v.bio}`;

  employee.dataset.id = i;
  employee.dataset.modal = "false";
  employee.addEventListener("click", setSelection);
  modal_icon.addEventListener("click", openModal);
  grid_el.appendChild(employee);
});


window.addEventListener("load", loadGrid);
modalBackgroundEl.addEventListener("click", closeModal);
