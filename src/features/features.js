import "./features.scss";
import { loadAnimations, handleAnimations } from "../animations";
import "../partials/partials";
import "../assets/animations/features_02.json";


const animations = Array.from(document.querySelectorAll(".animation"));

window.addEventListener("load", () => loadAnimations(animations));
window.addEventListener("scroll", () => handleAnimations(animations));
window.addEventListener("resize", () => handleAnimations(animations));
