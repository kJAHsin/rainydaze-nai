// export toggleNav function
export const toggleNav = () => {
    const transitionTime = "450";
	const transition = `all ${transitionTime}ms ease-out`;
	const burgerTop = document.getElementById("topLine");
	const burgerMid = document.getElementById("midLine");
	const burgerBot = document.getElementById("botLine");
	burgerTop.style.transition = transition;
	burgerMid.style.transition = transition;
	burgerBot.style.transition = transition;
	burgerTop.style.transformOrigin = "bottom";
	burgerBot.style.transformOrigin = "top";
	// grabbing nav menu toggle and svg to toggle ariaExpanded
	const burgerClosed = document.getElementById("burgerClosed");
	const navToggle = document.querySelector(".hamburger__link");
	navToggle.addEventListener("click", () => {
		if (burgerClosed.ariaExpanded === "false") {
			console.log("open nav toggle");
			burgerTop.style.transform = "translateY(25%)";
			burgerMid.style.opacity = 0;
			burgerBot.style.transform = "translateY(-25%)";
            // set ariaExpanded to true
			burgerClosed.ariaExpanded = "true";
            // delayed twist animation
			setTimeout(function twist() {
				burgerTop.style.transform =
					"translate(-51%, 2.75%) rotate(45deg)";
				burgerBot.style.transform =
					"translate(-51%, -2.75%) rotate(-45deg)";
			}, transitionTime);
		} else {
			console.log("close nav toggle");
			burgerTop.style.transform = "translateY(0)";
			burgerMid.style.opacity = 1;
			burgerBot.style.transform = "translateY(0)";
            // set ariaExpanded to false
			burgerClosed.ariaExpanded = "false";
		}
	});
};
