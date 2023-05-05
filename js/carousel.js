
import { showProductModal, productModal, hideProductModal, createModalContainer } from "./showProductModal.js";

const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
const carouselCards = document.querySelectorAll(".carousel__card");


// populate carousel cards
const fetchProducts = () => {
	fetch(apiURL)
	.then((data) => {
		if (data.ok) {
			return data.json();
		}
		else {
			console.error(`ohhh nooo  status: ${data.status}`)
		}
	})
	.then((data) => data.forEach((product, idx) => {
		// create image elements for carousel slides
		const img = document.createElement("img");
		img.src = `${product.image}`;
		img.alt = `${product.description}`;
		img.dataset.prodID = `${product.id}`;
		img.dataset.salePrice = `${product.discountedPrice}`;
		carouselCards[idx].append(img);


		// creating overlay for carousel cards
		const overLay = document.createElement("div");
		overLay.classList.add("carousel__overlay");
		carouselCards[idx].append(overLay);

		// adding title to card
		const productName = document.createElement("h3");
		const nameArray = product.title.split(" ");
		productName.setAttribute("id", "overlayTitle")
		// adjusting for different lengths of title
		// filtering out "rainy days" and "jacket" 
		if (nameArray.length === 4) {
			productName.innerText = `${nameArray[2]}`;
		}
		else {
			productName.innerText = `${nameArray[2]} ${nameArray[3]}`;
		}		
		overLay.appendChild(productName);

		// add price tag to overlay
		const productPrice = document.createElement("h3");
		productPrice.setAttribute("id", "overlayPrice")
		productPrice.innerText = `$${product.discountedPrice}`;
		overLay.appendChild(productPrice);

	}))
	.catch((err) => alert(`you got an error bro: ${err}`))
};

export default fetchProducts;





// creating modal container that will be populated onClick 
window.addEventListener("load", () => {
	createModalContainer();
})


// setting variables for modal
window.addEventListener("mousemove", () => {
	const productCards = document.querySelectorAll(".carousel__card");
	productCards.forEach(card => {

		// populate product modal with information from products Card
		card.addEventListener("click", (e) => {

			const cardImage = document.getElementById("individIMG");
			cardImage.src = e.target.src;
			cardImage.alt = e.target.alt;

			const cardContent = document.getElementById("productContent");
			const targetSlide = e.target.parentElement;
			const targetTitle = targetSlide.querySelector("#overlayTitle").innerText;
			const targetPrice = targetSlide.querySelector("#overlayPrice").innerText;

			cardContent.querySelector("h3").innerText = `Rainy Days ${targetTitle} Jacket`;
			cardContent.querySelector("h4").innerText = targetPrice;
			cardContent.querySelector("p").innerText = targetSlide.querySelector("img").alt;
			
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