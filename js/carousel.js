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

		// link to products html on click
		carouselCards.forEach(card => {
			card.addEventListener("click", () => {
				location.href = "./products.html";
			})
		})

		// creating overlay for carousel cards
		const overLay = document.createElement("div");
		overLay.classList.add("carousel__overlay");
		carouselCards[idx].append(overLay);

		// adding title to card
		const productName = document.createElement("h3");
		const nameArray = product.title.split(" ");
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
		productPrice.innerText = `$${product.discountedPrice}`;
		overLay.appendChild(productPrice);

	}))
	.catch((err) => alert(`you got an error bro: ${err}`))
};

export default fetchProducts;

