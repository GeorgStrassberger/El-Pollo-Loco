let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('My Character is: ', world.character);
    //    console.log('My Character is: ', world['character']); // andere SchreibweiseS

}


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) { // ArrowRIGHT
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) { // ArrowLEFT
        keyboard.LEFT == true;
    }
    if (event.keyCode == 38) { // ArrowUP
        keyboard.UP == true;
    }
    if (event.keyCode == 40) { // ArrowDOWN
        keyboard.DOWN == true;
    }
    if (event.keyCode == 32) { // ArrowSPACE
        keyboard.SPACE == true;
    }
})

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) { // ArrowRIGHT
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) { // ArrowLEFT
        keyboard.LEFT == false;
    }
    if (event.keyCode == 38) { // ArrowUP
        keyboard.UP == false;
    }
    if (event.keyCode == 40) { // ArrowDOWN
        keyboard.DOWN == false;
    }
    if (event.keyCode == 32) { // ArrowSPACE
        keyboard.SPACE == false;
    }
})