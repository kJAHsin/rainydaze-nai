import fetchProducts, { apiURL } from "./products.js";
fetchProducts();

const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");

scrollArrowL.addEventListener("click", () => {
	console.log("fuck you")
})

scrollArrowR.addEventListener("click", () => {
	console.log("fuck you")
})

// grabbing nav menu toggle
const burgerClosed = document.getElementById("burgerClosed");

// grabbing svg lines in toggle and adding transition
const transition = "all 1s ease-out";

const burgerTop = document.getElementById("topLine");
const burgerMid = document.getElementById("midLine");
const burgerBot = document.getElementById("botLine");
burgerTop.style.transition = transition;
burgerMid.style.transition = transition;
burgerBot.style.transition = transition;
burgerTop.style.transformOrigin = "bottom";
burgerBot.style.transformOrigin = "top";

// change attributes on click
const navToggle = document.querySelector(".hamburger__link");

navToggle.addEventListener("click", () => {
	if (burgerClosed.ariaExpanded === "false") {
		burgerTop.style.transform = "translateY(25%)";
		burgerMid.style.opacity = 0;
		burgerBot.style.transform = "translateY(-25%)";
		burgerClosed.ariaExpanded = "true";

		setTimeout(function twist() {
			burgerTop.style.transform = "translate(-51%, 2.75%) rotate(45deg)";
			burgerBot.style.transform = "translate(-51%, -2.75%) rotate(-45deg)";
		}, 1000)
	}
	else {
		console.log("ouch");
		burgerTop.style.transform = "translateY(0)";
		burgerMid.style.opacity = 1;
		burgerBot.style.transform = "translateY(0)";
		burgerClosed.ariaExpanded = "false";
	}
	
})