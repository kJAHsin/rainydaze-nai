import fetchProducts from "./carousel.js";
fetchProducts();
import { toggleNav } from "./navToggle.js";
toggleNav();



const carousel = document.querySelector(".carousel");
const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");
let translateX = 0;

scrollArrowL.addEventListener("click", () => {
	if (translateX <= 75) {
		translateX += 25;
		carousel.style.transform = `translateX(${translateX}%)`;
		console.log(carousel.style.transform)
	}	
})

scrollArrowR.addEventListener("click", () => {
	if (translateX >= -75) {
		translateX -= 25;
		carousel.style.transform = `translateX(${translateX}%)`;
		console.log(carousel.style.transform)
	}	
})