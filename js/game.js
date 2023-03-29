let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
	hideID("cover"); // blende start bild aus
	showID("gameButtons");
	initLevel1(); // lade level1
	canvas = document.getElementById("canvas"); //weise canvas zu
	world = new World(canvas, keyboard); // übergebe canvas und keyboard

	mobileButtos();
}

function quitGame() {
	hideID("cover");
	window.close();
}
