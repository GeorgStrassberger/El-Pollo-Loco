function fullScreen() {
	const canvas_aera = document.getElementById("canvas_aera");
	enterFullscreen(canvas_aera);

	hideID("desktopButtons");
	showID("mobileButtons");
	hideID("fullScreen");
	showID("normalScreen");
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

function normalScreen() {
	exitFullscreen();
}

function exitFullscreen() {
	hideID("mobileButtons");
	showID("desktopButtons");
	hideID("normalScreen");
	showID("fullScreen");
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
