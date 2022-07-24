for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		let buttonInner = this.innerHTML;
		makeSound(buttonInner);
		buttonAnimation(buttonInner);
	});
}

document.addEventListener("keypress", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			let bass1 = new Audio("./sounds/bassFirst.wav");
			bass1.play();
			break;
		case "a":
			let bass2 = new Audio("./sounds/bass (2).WAV");
			bass2.play();
			break;
		case "s":
			let bass3 = new Audio("./sounds/bass (3).WAV");
			bass3.play();
			break;
		case "d":
			let bass4 = new Audio("./sounds/bass (4).WAV");
			bass4.play();
			break;
		case "j":
			let bass5 = new Audio("./sounds/bass (5).WAV");
			bass5.play();
			break;
		case "k":
			let bass6 = new Audio("./sounds/bass (6).WAV");
			bass6.play();
			break;
		case "l":
			let bass7 = new Audio("./sounds/bass (7).wav");
			bass7.play();
			break;
		default:
			console.log(`This key (${key}) is not associated`);
	}
}

function buttonAnimation(currentKey) {
	let activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 500);
}
