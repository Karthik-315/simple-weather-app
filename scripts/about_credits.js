/* Variables */
// DOM Elements
const body = document.getElementsByTagName("body")[0];
const aside = document.querySelector(".aside");
const asideMenu = document.querySelector(".aside-link--menu");
const navLinks = document.querySelector(".nav_links");
const buyCoffeeLink = document.querySelector(".aside-link--buy-coffee");
const twitterLink = document.querySelector(".aside-link--twitter");
const githubLink = document.querySelector(".aside-link--github");
const specialGift = document.querySelector(".aside-link--gift-of-sk");
const mainContent = document.querySelector(".main");

// Other variables
const menuAcitveClass = "menu-active";
const coffeeURL = "https://buymeacoffee.com/skdev";
const twitterURL = "https://twitter.com/skk_dev";
const githubURL = "https://github.com/Karthik-315";
const rickRollURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

/* Functions */
const activateLinks = function () {
	buyCoffeeLink.href = coffeeURL;
	twitterLink.href = twitterURL;
	githubLink.href = githubURL;
	specialGift.href = rickRollURL;
};

const acivateSideMenu = function () {
	body.classList.toggle(menuAcitveClass);
	aside.classList.toggle(menuAcitveClass);
	asideMenu.classList.toggle(menuAcitveClass);
	navLinks.classList.toggle(menuAcitveClass);
};

activateLinks();

// Test code.
const runTestCode = function () {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	if (vw < 1024) {
		acivateSideMenu();
		mainContent.classList.toggle(menuAcitveClass);
	}
};

// runTestCode();
// End of test code.

/* Event listeners */
asideMenu.addEventListener("click", function () {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);

	if (vw < 1024) {
		console.log(`Clicked menu`);
		acivateSideMenu();
		mainContent.classList.toggle(menuAcitveClass);
	}
});
