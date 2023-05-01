import fetchProducts from "./products.js";
fetchProducts();
import { toggleNav } from "./navToggle.js";
toggleNav();





const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");

scrollArrowL.addEventListener("click", () => {
	console.log("to the left to the left")
})

scrollArrowR.addEventListener("click", () => {
	console.log("right step now ya'll")
})

