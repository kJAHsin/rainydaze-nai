// opening product modal
export const productModal = document.getElementById("productModal");
export function showProductModal() {
	productModal.classList.remove("hide__product-modal");
}
export function hideProductModal() {
	productModal.classList.add("hide__product-modal");

	// removing product title from page when modal is closed
	document.querySelector("title").innerText = "Rainydays Jacket Co. | Products";

}
// creating content for product modal
export function createModalContainer() {


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
	</div>`;
}
