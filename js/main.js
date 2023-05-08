// importing products from carousel js and calling function
import fetchProducts from "./carousel.js";
fetchProducts();

// importing nav toggle (hamburger menu) from navToggle js
import { toggleNav } from "./navToggle.js";
toggleNav();

// importing loader
import { loaderHide } from "./loader.js";
loaderHide();



// hooking into components of carousel
const carousel = document.querySelector(".carousel");
const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");

// initializing translateX variable for scroll arrows
let translateX = 100;

// carousel scrolling logic to translate horizontally
scrollArrowL.addEventListener("click", () => {
	scrollArrowR.classList.remove("disabled");
	if (translateX <= 75) {
		translateX += 50;
		carousel.style.transform = `translateX(${translateX}%)`;
	}
	// disabling arrow when carousel reaches end
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




// attaching id button's href in modal to link to the correct 
// product description
function getProductID() {
	const productCards = document.querySelectorAll(".carousel__card > img");	
	productCards.forEach(card => {
		card.addEventListener("click", (e) => {
			const productID = e.target.dataset.prodID;
			const detailsBtn = document.getElementById("showDetails");
			detailsBtn.href = `/details.html#/${productID}`;
			// console.log(detailsBtn.href)
		})
	})
}

// allowing for dom-content load
addEventListener("DOMContentLoaded", () => {
	getProductID();
})

