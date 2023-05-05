import { toggleNav } from "./navToggle.js";
import { search } from "./search-bar.js";
import { loaderHide } from "./loader.js";
import { showProductModal, productModal, hideProductModal, createModalContainer } from "./showProductModal.js";


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
				// creating div for product card
				// attaching all product information from api to div
				const productCard = document.createElement("div");
				productCard.classList.add("product");
				productCard.dataset.productID = product.id;
				productCard.dataset.title = product.title;
				productCard.dataset.gender = product.gender;
				productCard.dataset.size = product.sizes;
				productCard.dataset.baseColor = product.baseColor;
				productCard.dataset.origPrice = product.price;
				productCard.dataset.salePrice = `$${product.discountedPrice}`;
				productCard.setAttribute("id", "productCard");
				productContainer.appendChild(productCard);

				// creating and appending product image
				const productIMG = document.createElement("img");
				productIMG.src = `${product.image}`;
				productIMG.alt = `${product.description}`;
				productCard.append(productIMG);

				// creating card overlay
				const overlay = document.createElement("div");
				overlay.classList.add("product__overlay");
				overlay.innerHTML = `<h2>$${product.discountedPrice}</h2>
				<h4>${product.title}</h4>`
				productCard.append(overlay);
			})
		)

		// catching error from if loop
		.catch((err) => alert(`you got an error bro: ${err}`));
	};
	


	
	
	
	
// creating modal container that will be populated onClick 
window.addEventListener("load", () => {
	createModalContainer();
})


// setting variables for modal
window.addEventListener("mousemove", () => {
	const productCards = document.querySelectorAll("#productCard");
	productCards.forEach((card) => {

		// populate product modal with information from products Card
		card.addEventListener("click", (e) => {
			const cardImage = document.getElementById("individIMG");
			cardImage.src = e.target.src;
			cardImage.alt = e.target.alt;

			const cardContent = document.getElementById("productContent");
			cardContent.querySelector("h3").innerText = e.target.parentElement.dataset.title;
			cardContent.querySelector("h4").innerText = e.target.parentElement.dataset.salePrice;
			cardContent.querySelector("p").innerText = e.target.alt;
			
			// changing title of page when new product is selected
			document.querySelector("title").innerText = e.target.parentElement.dataset.title;		
			
			showProductModal();
		});
	});
	const closeModal = document.getElementById("modalX");
	
	productModal.addEventListener("click", (e) => {
		if (e.target === document.querySelector(".product__modal")) {
			hideProductModal();
		}
	})

	closeModal.addEventListener("click", () => {
		hideProductModal();		
	});
});

// calling functions
fetchProducts();
toggleNav();
loaderHide();

// initializing searchBar
const searchIcon = document.getElementById("searchGlass");
searchIcon.addEventListener("click", () => {
	search();
});

const searchBar = document.getElementById("jacketSearch");
searchBar.addEventListener("click", () => {
	search();
});
