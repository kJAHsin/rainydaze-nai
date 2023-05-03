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
		translateX += 50;
		carousel.style.transform = `translateX(${translateX}%)`;
	}	
})

scrollArrowR.addEventListener("click", () => {
	if (translateX >= -75) {
		translateX -= 50;
		carousel.style.transform = `translateX(${translateX}%)`;
	}	
})

function loaderHide() {
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		loader.classList.toggle("hide");
	});
}

loaderHide();