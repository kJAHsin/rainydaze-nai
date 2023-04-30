import fetchProducts, { apiURL } from "./products.js";
fetchProducts();

const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");

scrollArrowL.addEventListener("click", () => {
	console.log("to the left to the left")
})

scrollArrowR.addEventListener("click", () => {
	console.log("right step now ya'll")
})

// grabbing nav menu toggle
const burgerClosed = document.getElementById("burgerClosed");

// grabbing svg lines in toggle and adding transition
const transitionTime = "450";
const transition = `all ${transitionTime}ms ease-out`;

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
		console.log("open nav toggle")
		burgerTop.style.transform = "translateY(25%)";
		burgerMid.style.opacity = 0;
		burgerBot.style.transform = "translateY(-25%)";
		burgerClosed.ariaExpanded = "true";

		setTimeout(function twist() {
			burgerTop.style.transform = "translate(-51%, 2.75%) rotate(45deg)";
			burgerBot.style.transform = "translate(-51%, -2.75%) rotate(-45deg)";
		}, transitionTime)
	}
	else {
		console.log("close nav toggle");
		burgerTop.style.transform = "translateY(0)";
		burgerMid.style.opacity = 1;
		burgerBot.style.transform = "translateY(0)";
		burgerClosed.ariaExpanded = "false";
	}
	
})