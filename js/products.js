import { toggleNav } from "./navToggle.js";
toggleNav();

const apiURL = "https://api.noroff.dev/api/v1/rainy-days";

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
		const img = document.createElement("img");
		img.dataset.prodID = `${product.id}`;
		img.src = `${product.image}`;
		img.alt = `${product.description}`;
		img.dataset.salePrice = `${product.discountedPrice}`;
		[idx].append(img);
	}))
	.catch((err) => alert(`you got an error bro: ${err}`))
};

fetchProducts();