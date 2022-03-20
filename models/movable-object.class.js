class MovableObject {

    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(
            () => {
                if (this.isAboveGround() || this.speedY > 0) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }, 1000 / 25);
    }

    //befindet sich der Charcter am Boden?
    isAboveGround() {
        return this.y < 135;
    }


    loadImage(path) { // loadImage('img/test.png')
        this.img = new Image(); // this.img = document.getElementById('Image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        //Contect Zeichne Build (BIld, Start X, StartY, Breite, Höhe)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) { // Rand wird nur noch auf die beiden Objecte CHARATER & CHICKEN angewannt
            // Blue rectangle
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // character.isColliding(Chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5; //energy wird immer bei kolision abgezogen immer wenn kolision true ist und das bild neu gemalt wird.
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        //Millisekunden Aktuell - Millisekunden lastHit
        let timepassed = new Date().getTime() - this.lastHit; //Unterschied ausrechnen wieviel Zeit ist vergangen? 
        timepassed = timepassed / 1000; // Millisekunden durch 1000 Teilen = Sekunden. 
        return timepassed < 0.5; // true or false
    }

    isDead() {
        return this.energy == 0;
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

    playAnimation(images) {
        // Walk animation
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    };

    jump() {
        this.speedY = 30;
    };
}