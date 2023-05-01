
// filter through products with search
export async function search() {
	const searchBar = document.getElementById("jacketSearch");
    const productContainer = document.querySelector(".products__container");
    console.log(productContainer);
	searchBar.addEventListener("keyup", () => {
		let searchQuery = searchBar.value;
        console.log(searchQuery)
	});
}
