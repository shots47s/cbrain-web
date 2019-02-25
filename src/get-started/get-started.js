import "./get-started.scss";
import "../partials/partials";

const selectResource = (e) => {
  const resource_els = Array.from(document.querySelectorAll("[data-option]"));
  return resource_els.map((_) => {
    _.dataset.option === e.currentTarget.dataset.option
      ? (_.dataset.selected = "true")
      : (_.dataset.selected = "false");
  });
};

Array.from(
  document.querySelectorAll(".resource-option"),
).map((_) => {
  _.addEventListener("click", selectResource);
});
