import fetchProducts, { apiURL } from "./products.js";
fetchProducts();

const scrollArrowL = document.querySelector(".scroll__arrow:first-of-type");
const scrollArrowR = document.querySelector(".scroll__arrow:nth-of-type(2)");

scrollArrowL.addEventListener("click", () => {
	console.log("fuck you")
})