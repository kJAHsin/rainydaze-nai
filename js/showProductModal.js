// opening product modal
export const productModal = document.getElementById("productModal");
export function showProductModal() {
	productModal.classList.remove("hide__product-modal");

	// selecting size of product
	const sizeSelectors = document.querySelectorAll(".sizes__wrapper > p");
	sizeSelectors.forEach(size => {
		size.addEventListener("click", (e) => {
			sizeSelectors.forEach(size => {
				size.classList.remove("sizes__selected");
			})
			e.target.classList.add("sizes__selected");
		})
	})
}
export function hideProductModal() {
	productModal.classList.add("hide__product-modal");

	// removing product title from page when modal is closed
	document.querySelector("title").innerText = "Rainydays Jacket Co";

}
// creating content for product modal
export function createModalContainer() {


	const productContainer = document.createElement("div");
	productContainer.classList.add("product__container");
	productModal.appendChild(productContainer);

	productContainer.innerHTML = `<div class="image__container">
	<img
		src="#"
		alt="placeholder image"
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
		<a class="button" id="showDetails" href="./details.html">View product details</a>
		<h5 id="modalX" class="modalX">X</h5>
	</div>`;
}
