class MovableObject {

    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;


    loadImage(path) { // loadImage('img/test.png')
        this.img = new Image(); // this.img = document.getElementById('Image') <img id="image">
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving left');
    }
}