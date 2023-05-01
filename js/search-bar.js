// filter through products with search
export function search() {
	const searchBar = document.getElementById("jacketSearch");
	const products = document.querySelectorAll(".product");
	searchBar.addEventListener("keyup", () => {
		let searchQuery = searchBar.value.toLowerCase();
		console.log(searchQuery)
		products.forEach((product) => {
			product.classList.add("hidden");
			const title = product.dataset.title.toLowerCase();
			if (title.includes(searchQuery)) {
				product.classList.remove("hidden");
			}			
		});
	});
}
