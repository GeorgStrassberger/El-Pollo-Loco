"use strict"
class World {

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.timeToCheckCollisions();
        this.timeToThrowObjects();
    };

    canvas; // canvas.getContext ## Leihnwand zusammenhang
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    life_bar = new LifeBar();
    coin_bar = new CoinBar();
    bottle_bar = new BottleBar();
    throwableObjects = []; // muss noch gefüllt werden wenn Char mit Falschen colidiert
    amountOfBottlesToThrow = 0;
    throw_sound = new Audio('../audio/throw.mp3');
    coin_sound = new Audio('../audio/coin.wav');
    bottle_sound = new Audio('../audio/bottle.mp3');

    // Verbindung zwischen World und Character .class
    // Übergibt THIS als Objetct in WORLD
    setWorld() {
        this.character.world = this;
    };

    timeToCheckCollisions() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsWithBottles();
            this.checkCollisionsWithCoins();
        }, 100);
    };


    timeToThrowObjects() {
        setInterval(() => {
            this.throwObjects();
        }, 500);
    };

    // Überprüfe Werfe Objekt (Flasche)
    // Abfrage: -aktuell- Flasche werfen wenn die Leertaste gedrückt wird.
    // Später: wenn Array gefüllt ist UND die Taste aktiv ist.

    throwObjects() {
        if (this.keyboard.SPACE && this.amountOfBottlesToThrow > 0) {
            this.throw_sound.play(); // abspiele wurf sound
            let bottle = new ThrowableObject(this.character.x + 40, this.character.y + 140) // erstelle neues FlasschenObject an der Koordinate x Y 
            this.throwableObjects.push(bottle); // pushed bottle (throwableObject) in den array throwabloObjects[];
            this.amountOfBottlesToThrow -= 1; //verringere hilfszähler
            this.bottle_bar.collectedBottles -= 1; // //verringere zähler
            setTimeout(() => this.throwableObjects.splice(0, 1), 1300); // entferne im array an der stelle 0 um 1 
            this.bottle_bar.setBottleBar(); // flaschenAnzeige neu aufrufen zu aktuallisieren
        };
    };

    // Überprüfe Kollisionenen
    // Abrage: Schleife geht alle Gegner durch ob eine Kollision besteht.
    // wenn ja(true)
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.life_bar.setLifeBar(this.character.energy);
                // console.log('Collision with Character: ', this.character.energy); // logt mir die aktuelle energy (HP) raus.
            };
        });
    };

    checkCollisionsWithBottles() {
        this.level.bottle.forEach((bottles, index) => { // checkt alle 0,1sek alle flaschen im level
            if (this.character.isColliding(bottles)) { // wenn eine collision zwischen char und flasche eintritt
                this.bottle_sound.play();
                this.level.bottle.splice(index, 1); // entferne die flasche aus dem level
                this.bottle_bar.collectBottle(); // führe sammelFlasche aus und erhöhe um 1
                this.bottle_bar.setBottleBar(); // aktuallisiere flaschenBar mit dem wert von collectedBottles.
                this.amountOfBottlesToThrow += 1; // erhöhe meine hilfsvariable um 1.
            };
        });
    };

    checkCollisionsWithCoins() {
        this.level.coin.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.coin_sound.play();
                this.level.coin.splice(index, 1);
                this.coin_bar.collectCoin();
                this.coin_bar.setCoinBar(this.coin_bar.collectedCoins);
            };
        });
    };


    draw() { // es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas from x,y ,x+breit, y+höhe (koordienaten = leihnwand größe)

        this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links.
        this.addObjectsToMap(this.level.backgroundObjects); // draw the backgroundObjects
        this.ctx.translate(-this.camera_x, 0); // Back

        // ----Spoace for FIXED Objects ------
        this.addToMap(this.life_bar);
        this.addToMap(this.coin_bar);
        this.addToMap(this.bottle_bar);

        this.ctx.translate(this.camera_x, 0); // Forwards
        this.addToMap(this.character); // draw the Character        
        this.addObjectsToMap(this.level.clouds); // draw the clouds
        this.addObjectsToMap(this.level.enemies); // draw the chicken enemies
        this.addObjectsToMap(this.throwableObjects); // draw the throwableObjects (Bottle'S)

        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottle);

        this.ctx.translate(-this.camera_x, 0); // verschiebt das CTX wieder zurück, um den hintergrund zu begewegen

        // Draw wird immer wieder aufgerufen so oft wie die Garfikkarte kann -> fps
        let self = this; //requestAnimationFrame kennt die this methode nicht und wird deshalb in eine Variable gepackt.
        requestAnimationFrame(function() {
            self.draw();
        });
    };
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    };
    addToMap(mo) { // MO = Movable Objects
        if (mo.otherDirection) {
            this.flipImage(mo);
        };

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        };
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };
};