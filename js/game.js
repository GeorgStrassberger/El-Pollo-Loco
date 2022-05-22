let canvas;
let world;
let keyboard = new Keyboard();
let backgroundSound = new Audio('../audio/mexicosound.mp3');
backgroundSound.volume = 0.2; // lautstärke 


function startGame() {
    //backgroundSound.play();
    initLevel1();
    init();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) { // ArrowRIGHT
        keyboard.RIGHT = true;
        document.getElementById('btnRight').classList.add('opacity');
    }
    if (event.keyCode == 37) { // ArrowLEFT
        keyboard.LEFT = true;
        document.getElementById('btnLeft').classList.add('opacity');
    }
    if (event.keyCode == 38) { // ArrowUP
        keyboard.UP = true;
        document.getElementById('btnJump').classList.add('opacity');
    }
    //    if (event.keyCode == 40) { // ArrowDOWN
    //        keyboard.DOWN = true;
    //        document.getElementById('btnCrouch').classList.add('opacity');
    //    }
    if (event.keyCode == 32) { // SPACE
        keyboard.SPACE = true;
        document.getElementById('btnThrow').classList.add('opacity');
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) { // ArrowRIGHT
        keyboard.RIGHT = false;
        document.getElementById('btnRight').classList.remove('opacity');
    }
    if (event.keyCode == 37) { // ArrowLEFT
        keyboard.LEFT = false;
        document.getElementById('btnLeft').classList.remove('opacity');
    }
    if (event.keyCode == 38) { // ArrowUP
        keyboard.UP = false;
        document.getElementById('btnJump').classList.remove('opacity');
    }
    //    if (event.keyCode == 40) { // ArrowDOWN
    //        keyboard.DOWN = false;
    //        document.getElementById('btnCrouch').classList.remove('opacity');
    //    }
    if (event.keyCode == 32) { // SPACE
        keyboard.SPACE = false;
        document.getElementById('btnThrow').classList.remove('opacity');
    }
});


/*
document.getElementById('btnLeft').addEventListener('touchstart', (event) => {
    event.preventDefault();
    this.LEFT = true;
});
document.getElementById('btnLeft').addEventListener('touchend', (event) => {
    event.preventDefault();
    this.LEFT = true;
});

*/


//Mouse Right
function mouseDownToMoveRight() {
    keyboard.RIGHT = true;
    document.getElementById('btnRight').classList.add('underline');
}

function mouseUpToMoveRight() {
    keyboard.RIGHT = false;
    document.getElementById('btnRight').classList.remove('underline');
}

//Mouse Left
function mouseDownToMoveLeft() {
    keyboard.LEFT = true;
    document.getElementById('btnLeft').classList.add('underline');
}

function mouseUpToMoveLeft() {
    keyboard.LEFT = false;
    document.getElementById('btnLeft').classList.remove('underline');
}

//Mouse Jump
function mouseDownToJump() {
    keyboard.UP = true;
    document.getElementById('btnJump').classList.add('underline');
}

function mouseUpToJump() {
    keyboard.UP = false;
    document.getElementById('btnJump').classList.remove('underline');
}

//Mouse Throw
function mouseDownToThrow() {
    keyboard.SPACE = true;
    document.getElementById('btnThrow').classList.add('underline');
}

function mouseUpToThrow() {
    keyboard.SPACE = false;
    document.getElementById('btnThrow').classList.remove('underline');
}