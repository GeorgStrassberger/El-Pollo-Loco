let canvas;
let world;
let keyboard = new Keyboard();
let imagesToLoad = 0;
let imagesLoaded = 0;
let isLoading = false;


/**
 * update the viewed progressbar in the template.
 * @param {number} percent 
 */
function loadingProgress(percent){
	const progressbar = document.getElementById('progressbar');
	progressbar.value = percent;
	progressbar.innerText = percent + '%';
	if(percent !== 100){
		console.log('loading....');
		return isLoading = true;

	}else{
		hideID('progressFrame');
		return isLoading = false;
	}
}


/**
 *  Start the Game with initilaize the World class
 */
function startGame() {
	hideID("cover");
	canvas = document.getElementById("canvas");
	world = new World(canvas, keyboard, levelOne());
}


/**
 * Start next level (2)
 */
function startGame2() {
	hideID("cover");
	// showID("settingButtons");
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
