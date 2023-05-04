import { toggleNav } from "./navToggle.js";
import { search } from "./search-bar.js";
import { loaderHide } from "./loader.js";
loaderHide();

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


// opening product modal
const productModal = document.getElementById("productModal");

function showProductModal() {
	productModal.classList.remove("hide__product-modal");
	
}
function hideProductModal() {
	productModal.classList.add("hide__product-modal");
}

// creating content for product modal
function createModalContainer() {
	const productContainer = document.createElement("div");
	productContainer.classList.add("product__container");
	productModal.appendChild(productContainer);

	productContainer.innerHTML = `<div class="image__container">
	<img
		src=""
		alt=""
		id="individIMG"
	/>
	</div>
	<div class="product__modal-content" id="productContent">
		<h3></h3>
		<h4></h4>
		<p></p>
		<div class="sizes__wrapper">
			<p>XS</p>
			<p>S</p>
			<p>M</p>
			<p>L</p>
			<p>XL</p>
		</div>
		<button class="add__cart" id="addCart">Add to cart</button>
		<h5 id="modalX" class="modalX">X</h5>
	</div>`
}








// setting variables for modal
window.addEventListener("mousemove", () => {
	const productCards = document.querySelectorAll("#productCard");
	productCards.forEach((card) => {
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
	closeModal.addEventListener("click", () => {
		hideProductModal();

		// removing product title from page when modal is closed
		document.querySelector("title").innerText = "Rainydays Jacket Co. | Products";
	});
});

// calling functions
fetchProducts();
toggleNav();

window.addEventListener("load", () => {
	createModalContainer();
})

// initializing searchBar
const searchIcon = document.getElementById("searchGlass");
searchIcon.addEventListener("click", () => {
	search();
});

const searchBar = document.getElementById("jacketSearch");
searchBar.addEventListener("click", () => {
	search();
});
