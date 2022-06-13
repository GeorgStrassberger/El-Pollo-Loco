let canvas;
let world;
let keyboard = new Keyboard();
let backgroundSound = new Audio('../audio/mexicosound.mp3');
backgroundSound.volume = 0.2; // lautstärke 
let bgSound = false;


function startGame() {
    document.getElementById('cover').classList.add('d-none'); // blende start bild aus
    initLevel1(); // lade level1 
    canvas = document.getElementById('canvas'); //weise canvas zu
    world = new World(canvas, keyboard); // übergebe canvas und keyboard
    mobileButtos();
}

function quitGame() {
    document.getElementById('cover').classList.add('d-none');
    window.close();
}
//Hintergrundmusik ON/OFF
function musicGame() {
    if (bgSound === true) {
        backgroundSound.pause();
        document.getElementById('music_btn').innerHTML = `Music ON`;
        bgSound = false;
    } else {
        backgroundSound.play();
        document.getElementById('music_btn').innerHTML = `Music OFF`;
        bgSound = true;
    }
}

// To Play Game with Keyboard
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
    if (event.keyCode == 32) { // SPACE
        keyboard.SPACE = false;
        document.getElementById('btnThrow').classList.remove('opacity');
    }
});

// To Play Game with Touchscreen
function mobileButtos() {
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });


    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}


//#################################################################
// To Play Game with Mouseclicks
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
//########################################################################