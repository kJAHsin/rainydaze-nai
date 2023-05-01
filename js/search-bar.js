// function resets search query suggestions
function clearQuery() {
	const currentOptions = searchOptions.querySelectorAll("li");
		currentOptions.forEach(option => {
			option.remove();
		})
}






// filter through products with search
export function search() {
	const searchBar = document.getElementById("jacketSearch");
	const products = document.querySelectorAll(".product");
	const searchOptions = document.getElementById("searchOptions");

	// keyup listener for search bar
	// updates search query suggestions on keyup
	// updates product list on "enter"
	// (e) for use in if loop to see if it is the enter key
	searchBar.addEventListener("keyup", (e) => {
		let searchQuery = searchBar.value.toLowerCase();
		clearQuery();		
		products.forEach((product) => {
			const productIMG = product.querySelector("img");
			const title = product.dataset.title.toLowerCase();

			// updating product list on enter
			if (e.key === "Enter") {
				product.classList.add("hidden");
				// clearing query suggesstions after search
				clearQuery();
				if (title.includes(searchQuery)) {
					// showing item if present in search query
					product.classList.remove("hidden");
				}
			}		

			
			// filtering search options from input text
			if (title.includes(searchQuery) & searchQuery.length > 0) {	
				// creating search query option dropdown
				const searchOption = document.createElement("li");
				searchOption.innerHTML = `<div class="thumbnail">
				<img src="${productIMG.src}" alt="${productIMG.alt}">
				</div>
				<h3>${product.dataset.title}</h3>
				<h4>${product.dataset.salePrice}</h4>`;
				searchOptions.appendChild(searchOption);
			}			
		});
	});
}

