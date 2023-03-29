let canvas;
let world;
let keyboard = new Keyboard();

/**
 *  Start the Game with initilaize the World class
 */
function startGame() {
	hideID("cover"); // blende start bild aus
	showID("gameButtons");
	initLevel1(); // lade level1
	canvas = document.getElementById("canvas"); //weise canvas zu
	world = new World(canvas, keyboard); // übergebe canvas und keyboard

	mobileButtos();
}

/**
 * close browsertap
 */
function quitGame() {
	hideID("cover");
	window.close();
}

/**
 * clears all Intervals to stop the game animations
 */
function stopGame() {
	for (let i = 1; i < 9999; i++) {
		window.clearInterval(i);
	}
}
