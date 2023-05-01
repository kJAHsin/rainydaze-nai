import { toggleNav } from "./navToggle.js";
toggleNav();

const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
const productGrid = document.querySelector(".product__grid")

const fetchProducts = () => {
	fetch(apiURL)
	.then((data) => {
		if (data.ok) {
			return data.json();
		}
		else {
			console.log(`ohhh nooo  status: ${data.status}`)
		}
	})
	.then((data) => data.forEach((product, idx) => {
		const product = 
	}))
	.catch((err) => alert(`you got an error bro: ${err}`))
};

fetchProducts();