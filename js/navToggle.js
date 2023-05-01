// export toggleNav function
export const toggleNav = () => {
	const burgerTop = document.getElementById("topLine");
	const burgerMid = document.getElementById("midLine");
	const burgerBot = document.getElementById("botLine");
	const navLinks = document.getElementById("navLinks");

	// grabbing nav menu toggle and svg to toggle ariaExpanded
	const burgerClosed = document.getElementById("burgerClosed");
	const navToggle = document.querySelector(".hamburger__link");
	navToggle.addEventListener("click", () => {
		if (burgerClosed.ariaExpanded === "false") {
			console.log("open nav toggle");
			// add class to nav toggle
            burgerTop.classList.add("navOpenTop");
            burgerMid.classList.add("navOpenMid");
            burgerBot.classList.add("navOpenBot");

			// remove hide class from navLinks
			navLinks.classList.remove("hidden")

            // set ariaExpanded to true
			burgerClosed.ariaExpanded = "true";
		} else {
			console.log("close nav toggle");
			// remove class from nav toggle
			burgerTop.classList.remove("navOpenTop");
            burgerMid.classList.remove("navOpenMid");
            burgerBot.classList.remove("navOpenBot");

			// remove hide class from navLinks
			navLinks.classList.add("hidden")
			console.log(navLinks.classList)

            // set ariaExpanded to false
			burgerClosed.ariaExpanded = "false";
		}
	});
};
