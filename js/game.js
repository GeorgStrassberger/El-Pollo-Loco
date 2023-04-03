let canvas;
let world;
let keyboard = new Keyboard();

/**
 *  Start the Game with initilaize the World class
 */
function startGame() {
	hideID("cover");
	showID("gameButtons");
	canvas = document.getElementById("canvas");
	world = new World(canvas, keyboard, levelOne());
}

function startGame2() {
	hideID("cover");
	showID("gameButtons");
	canvas = document.getElementById("canvas");
	world = new World(canvas, keyboard, levelTwo());
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

/**
 * reload the page to restart the game
 */
function restartGame() {
	location.reload();
}
