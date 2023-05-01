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
				console.log(`ohhh nooo  status: ${data.status}`);
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
				productContainer.appendChild(productCard);

				const productIMG = document.createElement("img");
				productIMG.dataset.origPrice = product.price;
				productIMG.dataset.salePrice = product.discountedPrice;
				productIMG.src = `${product.image}`;
				productIMG.alt = `${product.description}`;
				productCard.append(productIMG);
			})
		)
        .then(setTimeout(()  => search(), 350))
		.catch((err) => alert(`you got an error bro: ${err}`));
};

fetchProducts();
toggleNav();