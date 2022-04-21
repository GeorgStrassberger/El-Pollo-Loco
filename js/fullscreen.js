"use strict"

function goFullScreen() {
    let canvas = document.getElementById("canvas");
    if (canvas.requestFullScreen) {
        canvas.requestFullScreen()
    } else if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen()
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen()
    };
};