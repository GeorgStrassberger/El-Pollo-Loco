let screen = false;

/**
 * Fullscreen On/Off
 */
function gameScren() {
	screen = !screen;
	const game_screen = document.getElementById("game_screen_btn");
	console.log("screen is:", screen);
	if (!screen) {
		console.log("normal");
		game_screen.src = "../img/icons/fullscreen-12-32.png";
		exitFullscreen();
	} else {
		console.log("full");
		game_screen.src = "../img/icons/fullscreen-exit-32.png";
		fullScreen();
	}
}

function fullScreen() {
	const canvas_aera = document.getElementById("canvas_aera");
	enterFullscreen(canvas_aera);
}

function enterFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.msRequestFullscreen) {
		// for IE11 (remove June 15, 2022)
		element.msRequestFullscreen();
	} else if (element.webkitRequestFullscreen) {
		// iOS Safari
		element.webkitRequestFullscreen();
	}
}

function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}

function isMobile() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		return true;
	} else {
		return false;
	}
}
checkDevice();

function checkDevice() {
	setInterval(() => {
		let screenW = screen.width;
		let screenH = screen.height;
		if (isMobile()) {
			showID("mobileButtons");
			hideID("desktopButtons");
			viewHeightMax("canvas_aera");
			if (screenW < screenH) {
				showID("landscapeMode");
				hideID("canvas_aera");
			} else {
				hideID("landscapeMode");
				showID("canvas_aera");
				if (screenH < 480) {
					hideID("landscapeMode");
					showID("canvas_aera");
				} else {
				}
			}
		} else if (!isMobile()) {
			hideID("landscapeMode");
			showID("canvas_aera");
			showID("desktopButtons");
			viewHeightNormal("canvas_aera");
		}
	}, 100);
}
