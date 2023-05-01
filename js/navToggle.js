// export toggleNav function
export const toggleNav = () => {
    // const transitionTime = 450;
	// const transition = `all ${transitionTime}ms ease-out`;
	const burgerTop = document.getElementById("topLine");
	const burgerMid = document.getElementById("midLine");
	const burgerBot = document.getElementById("botLine");
	// burgerTop.style.transition = transition;
	// burgerMid.style.transition = transition;
	// burgerBot.style.transition = transition;
	burgerTop.style.transformOrigin = "bottom";
	burgerBot.style.transformOrigin = "top";
	// grabbing nav menu toggle and svg to toggle ariaExpanded
	const burgerClosed = document.getElementById("burgerClosed");
	const navToggle = document.querySelector(".hamburger__link");
	navToggle.addEventListener("click", () => {
		if (burgerClosed.ariaExpanded === "false") {
			console.log("open nav toggle");
            // set ariaExpanded to true
			burgerClosed.ariaExpanded = "true";
            burgerTop.classList.add("navOpenTop");
            burgerMid.classList.add("navOpenMid");
            burgerBot.classList.add("navOpenBot");
		} else {
			console.log("close nav toggle");
			burgerTop.classList.remove("navOpenTop");
            burgerMid.classList.remove("navOpenMid");
            burgerBot.classList.remove("navOpenBot");
            // set ariaExpanded to false
			burgerClosed.ariaExpanded = "false";
		}
	});
};
