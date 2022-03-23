"use strict"
class MovableObject extends DrawableObject {
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
    };

    //befindet sich der Charcter am Boden?
    isAboveGround() {
        if (this instanceof ThrowableObject) { // wenn es aus der klasse TO kommt soll es immer falllen (aus dem spielfeld)
            return true;
        } else {
            return this.y < 135;
        }
    };

    // character.isColliding(Chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    };

    hit() {
        this.energy -= 10; //energy wird immer bei kolision abgezogen immer wenn kolision true ist und das bild neu gemalt wird.
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    isHurt() {
        //Millisekunden Aktuell - Millisekunden lastHit
        let timepassed = new Date().getTime() - this.lastHit; //Unterschied ausrechnen wieviel Zeit ist vergangen? 
        timepassed = timepassed / 1000; // Millisekunden durch 1000 Teilen = Sekunden. 
        return timepassed < 0.5; // true or false
    };

    isDead() {
        return this.energy == 0;
    };

    playAnimation(images) {
        // Walk animation
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    /**
     * bei jedem aufrufen der function wird die X-Koordinate um den wert von SPEED (0,2px) erhöht 
     */
    moveRight() {
        this.x += this.speed;
    };
    /**
     * bei jedem aufrufen der function wird der wert von Speed (0,2px) an der X-Koordinate abgezogen
     */
    moveLeft() {
        this.x -= this.speed;
    };

    jump() {
        this.speedY = 30;
    };
}