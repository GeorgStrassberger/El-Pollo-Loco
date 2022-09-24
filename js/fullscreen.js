function fullScreen() {
    let fullscreen = document.getElementById('canvas_aera');
    enterFullscreen(fullscreen);
}


function normalScreen() {
    exitFullscreen();
}


function enterFullscreen(element) {
    console.log('full screen');
    hideElementsWithID('desktopButtons');
    showElementsWithID('mobileButtons');
    hideElementsWithID('fullScreen');
    showElementsWithID('normalScreen');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { // iOS Safari
        element.webkitRequestFullscreen();
    }
}


function exitFullscreen() {
    console.log('normal screen');
    hideElementsWithID('mobileButtons');
    showElementsWithID('desktopButtons');
    hideElementsWithID('normalScreen');
    showElementsWithID('fullScreen');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }

}

// ###############################
// Hier gehts weiter
// ###############################


function checkDevice() {
    setInterval(() => {
        let screenW = screen.width;
        let screenH = screen.height;
        if (isMobile()) {
            if (screenW < 500 && screenH > 500) {
                normalScreen()
            } else {
                fullScreen()
            }
        } else if (!isMobile()) {
            normalScreen()
        }
    }, 100);
}

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}