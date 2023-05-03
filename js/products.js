import { toggleNav } from "./navToggle.js";
import { search } from "./search-bar.js";

const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
const productContainer = document.querySelector(".products__container");


const fetchProducts = () => {
	fetch(apiURL)
		.then((data) => {
			if (data.ok) {
				return data.json();
			} else {
				console.error(`ohhh nooo  status: ${data.status}`);
			}
		})
		.then((data) =>
			data.forEach(product => {
				const productCard = document.createElement("div");
				productCard.classList.add("product");
				productCard.dataset.productID = `${product.id}`;
				productCard.dataset.title = `${product.title}`;
				productCard.dataset.gender = `${product.gender}`;
				productCard.dataset.size = `${product.sizes}`;
				productCard.dataset.baseColor = `${product.baseColor}`;
				productCard.dataset.origPrice = product.price;
				productCard.dataset.salePrice = product.discountedPrice;
				productContainer.appendChild(productCard);

				const productIMG = document.createElement("img");
				productIMG.src = `${product.image}`;
				productIMG.alt = `${product.description}`;
				productCard.append(productIMG);
			})
		)

        // set timeout to make sure the products are loaded before searching through them
        .then(setTimeout(()  => search(), 350))

        // catching error from if loop
		.catch((err) => alert(`you got an error bro: ${err}`));
};


function loaderHide() {
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		loader.classList.toggle("hide");
	});
}




// calling functions
fetchProducts();
toggleNav();
loaderHide();