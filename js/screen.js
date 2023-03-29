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
			console.log("isMobile");
			showID("mobileButtons");
			hideID("desktopButtons");
			// document.getElementById("desktopButtons").classList.add("d-none");
			if (screenW < screenH) {
				console.log("rotate device");
				showID("landscapeMode");
				hideID("canvas_aera");
			} else {
				console.log("device OK");
				hideID("landscapeMode");
				showID("canvas_aera");
				if (screenH < 480) {
					hideID("landscapeMode");
					showID("canvas_aera");
					document.getElementById("canvas_aera").classList.add("vh");
				} else {
					document.getElementById("canvas_aera").classList.remove("vh");
					// document.getElementById("desktopButtons").classList.remove("d-none");
				}
			}
		} else if (!isMobile()) {
			console.log("isDesktop");
			hideID("landscapeMode");
			showID("canvas_aera");
			showID("desktopButtons");
		}
	}, 100);
}
