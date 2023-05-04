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
			data.forEach((product) => {
				// creating div for product card
				// attaching all product information from api to div
				const productCard = document.createElement("div");
				productCard.classList.add("product");
				productCard.dataset.productID = `${product.id}`;
				productCard.dataset.title = `${product.title}`;
				productCard.dataset.gender = `${product.gender}`;
				productCard.dataset.size = `${product.sizes}`;
				productCard.dataset.baseColor = `${product.baseColor}`;
				productCard.dataset.origPrice = product.price;
				productCard.dataset.salePrice = product.discountedPrice;
				productCard.setAttribute("id", "productCard");
				productContainer.appendChild(productCard);

				// creating and appending product image
				const productIMG = document.createElement("img");
				productIMG.src = `${product.image}`;
				productIMG.alt = `${product.description}`;
				productCard.append(productIMG);
			})
		)

		// catching error from if loop
		.catch((err) => alert(`you got an error bro: ${err}`));
};

function loaderHide() {
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		loader.classList.toggle("hide");
	});
}

// opening product modal
const productModal = document.getElementById("productModal");

function showProductModal() {
	productModal.classList.remove("hide__product-modal");
}
function hideProductModal() {
	productModal.classList.add("hide__product-modal");
}

// creating content for product modal
function createModal() {
	const productContainer = document.createElement("div");
	productContainer.classList.add("");
	productContainer.innerHTML = ``;
}

// setting variables for modal
window.addEventListener("mousemove", () => {
	const productCards = document.querySelectorAll("#productCard");
	productCards.forEach((card) => {
		card.addEventListener("click", () => {
			showProductModal();
		});
	});
	const closeModal = document.getElementById("modalX");
	closeModal.addEventListener("click", () => {
		hideProductModal();
	});
});

// calling functions
fetchProducts();
toggleNav();
loaderHide();

const searchIcon = document.getElementById("searchGlass");
searchIcon.addEventListener("click", () => {
	search();
});

const searchBar = document.getElementById("jacketSearch");
searchBar.addEventListener("click", () => {
	search();
});
