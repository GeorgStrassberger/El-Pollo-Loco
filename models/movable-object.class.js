class MovableObject {

    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentWalkingImage = 0;
    speed = 0.2;



    loadImage(path) { // loadImage('img/test.png')
        this.img = new Image(); // this.img = document.getElementById('Image') <img id="image">
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr -['img/image1.png', 'img/image3.png', ...] 
     */
    loadImages(arr) { // läd alle Bilder in das JSON rein.
        arr.forEach((path) => { // forEach -> fürJeden, durch das JSON durch Iterieren.
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        console.log('Moving right');
    }


    moveLeft() {
        setInterval(() => {
            if (this.x < 0) {
                this.x = Math.random() * 700;
            }
            this.x -= this.speed;
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.
    };
}