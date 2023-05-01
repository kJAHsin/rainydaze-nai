// filter through products with search
export function search() {
	const searchBar = document.getElementById("jacketSearch");
	const products = document.querySelectorAll(".product");
	const searchOptions = document.getElementById("searchOptions");

	searchBar.addEventListener("keyup", (e) => {
		let searchQuery = searchBar.value.toLowerCase();
		const currentOptions = searchOptions.querySelectorAll("li");
		currentOptions.forEach(option => {
			option.remove();
		})
		products.forEach((product) => {
			const productIMG = product.querySelector("img");
			const title = product.dataset.title.toLowerCase();

			if (e.key === "Enter") {
				product.classList.add("hidden");
				if (title.includes(searchQuery)) {
					// showing item if present in search query
					product.classList.remove("hidden");
				}
			}
			


			if (title.includes(searchQuery)) {
				

				// filtering search options from input text
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

function clearResults() {
    let currentImages = gallery.querySelectorAll('img');

    currentImages.forEach(currentImage => {
        if (currentImage) {
            currentImage.remove();
        }
    })
}