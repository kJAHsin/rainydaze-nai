// filter through products with search
export function search() {
	const searchBar = document.getElementById("jacketSearch");
    const productContainer = document.querySelector(".products__container");
	const products = document.querySelectorAll(".product")
    console.log(productContainer);
	searchBar.addEventListener("keyup", () => {
		let searchQuery = searchBar.value;
        console.log(searchQuery)
	});
}
