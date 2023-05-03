import fetchProducts from "./carousel.js";
fetchProducts();
import { toggleNav } from "./navToggle.js";
toggleNav();



const carousel = document.querySelector(".carousel");
const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");
let translateX = 100;

scrollArrowL.addEventListener("click", () => {
	scrollArrowR.classList.remove("disabled");
	if (translateX <= 75) {
		translateX += 50;
		carousel.style.transform = `translateX(${translateX}%)`;
	}
	else{
		scrollArrowL.classList.add("disabled");
	}
})

scrollArrowR.addEventListener("click", () => {
	scrollArrowL.classList.remove("disabled")
	if (translateX >= -75) {
		translateX -= 50;
		carousel.style.transform = `translateX(${translateX}%)`;
	}
	else {
		scrollArrowR.classList.add("disabled");
	}	
})

function loaderHide() {
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		loader.classList.toggle("hide");
	});
}


loaderHide();