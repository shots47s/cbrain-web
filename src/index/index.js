import "./index.scss";
import { loadAnimations, handleAnimations } from "../animations";
import "../partials/partials";


const animations = Array.from(document.querySelectorAll(".animation"));

window.addEventListener("load", () => loadAnimations(animations));
window.addEventListener("scroll", () => handleAnimations(animations));
window.addEventListener("resize", () => handleAnimations(animations));
