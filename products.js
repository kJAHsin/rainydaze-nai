const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
const carouselCards = document.querySelectorAll(".carousel__card");

const fetchProducts = () => {
	fetch(apiURL)
	.then((data) => {
		if (data.ok) {
			console.log(`all good brother! status: ${data.status}`)
			return data.json();
		}
		else {
			console.log(`ohhh nooo  status: ${data.status}`)
		}
	})
	.then((data) => data.forEach((product, idx) => {
		const img = document.createElement("img");
		const id = `${product.id}`;
		const url = `${product.image}`;
		const alt = `${product.description}`;
		const salePrice = `${product.discountedPrice}`;
		img.dataset.prodID = id;
		img.src = url;
		img.alt = alt;
		img.dataset.salePrice = salePrice;
		carouselCards[idx].append(img);
	}))
	.catch((err) => console.log(`you got an error bro: ${err}`))
};

export default fetchProducts;

