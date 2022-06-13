class MovableObject extends DrawableObject {
    speed;
    speedY = 0;
    energy;
    otherDirection = false;
    acceleration = 2.5; //Beschleunigung
    lastHit = 0;

    // Schwerkraft anwenden
    applyGravity() {
        setInterval(
            () => {
                if (this.isAboveGround() || this.speedY > 0) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }, 1000 / 25);
    };

    // Abfrage: befindet sich der Charcter am Boden?
    isAboveGround() {
        if (this instanceof ThrowableObject) { //WENN es aus der klasse TO kommt soll es bis .. fallen
            return this.y < 375;
        } else {
            return this.y < 235; // standart 135 mit original Bild
        };
    };

    // Kollisionsabfrage mit (MovableObject)
    isCollidingWith(mo) { // mo *aka* movableObject
        return this.x + this.width > mo.x && // true sobald sich 1 MO links vom Character befindet;  
            this.x < mo.x + mo.width && // true solange sich rechts vom Character noch 1 MO befindet;
            this.y + this.height > mo.y && // true sobald die füße vom Character unterhalb vom kopf des MO sind
            this.y < mo.y + mo.height; // true solange der Kopf vom Character über den Füßen vom MO ist  in dem fall nur für die COINS wichtig
    };

    // Kollisionsabfrage von OBEN mit (MovableObject)
    isCollidingFromTopWith(mo) {
        return this.y + this.height > mo.y &&
            this.y + this.height < mo.y + mo.height &&
            this.x + this.width > mo.x &&
            this.x + this.width < mo.x + mo.width + 50;
    };

    // Treffer mit (Schaden) wird abgezogen
    hit(dmg) {
        this.energy -= dmg; //energy wird immer bei kolision abgezogen, immer wenn kolision true ist und das bild neu gemalt wird.
        if (this.energy <= 0) {
            this.energy = 0;
            console.log('HIT: Tödlicher Schaden');
        } else {
            this.lastHit = new Date().getTime();
        };
    };

    // ist Verletzt worden
    isHurt() {
        //Millisekunden Aktuell - Millisekunden lastHit
        let timepassed = new Date().getTime() - this.lastHit; //Unterschied ausrechnen wieviel Zeit ist vergangen? 
        timepassed = timepassed / 1000; // Millisekunden durch 1000 Teilen = Sekunden. 
        return timepassed < 0.5; // true or false
    };

    // ist Tot
    isDead() {
        return this.energy == 0;
    };

    //spielt Animation ab für Bewegungen ab 
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    /**
     * bei jedem aufrufen der function wird der wert von Speed (0,2px) an der X-Koordinate erhöht 
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

    // Sprung    
    jump() {
        this.speedY = 30; // definiert die Geschwindigkeit in Y
    };
};