"use strict"
class World {
    canvas; // canvas.getContext ## Leihnwand zusammenhang
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    statusbar = new Statusbar();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.timeToCheckCollisions();
        this.timeToThrowObjects();

    }

    // Verbindung zwischen World und Character .class
    setWorld() {
        this.character.world = this;
    }

    timeToCheckCollisions() {
        setInterval(() => {
            this.checkCollisions();

        }, 100);
    }
    timeToThrowObjects() {
        setInterval(() => {
            this.checkThrowObjects();
        }, 100);
    }



    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 40, this.character.y + 140)
            this.throwableObjects.push(bottle); // pushed bottle (throwableObject) in den array throwabloObjects[];
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
                console.log('Collision with Character: ', this.character.energy); // logt mir die aktuelle energy anzeige raus.
            }
        });
    }

    draw() { // es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas from x,y ,x+breit, y+höhe (koordienaten = leihnwand größe)

        this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links.
        this.addObjectsToMap(this.level.backgroundObjects); // draw the backgroundObjects
        this.ctx.translate(-this.camera_x, 0); // Back
        // ----Spoace for FIXED Objects ------
        this.addToMap(this.statusbar);
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addToMap(this.character); // draw the Character
        this.addObjectsToMap(this.level.clouds); // draw the clouds
        this.addObjectsToMap(this.level.enemies); // draw the chicken enemies
        this.addObjectsToMap(this.throwableObjects)
        this.ctx.translate(-this.camera_x, 0); // verschiebt das CTX wieder zurück, um den hintergrund zu begewegen

        // Draw wird immer wieder aufgerufen so oft wie die Garfikkarte kann -> fps
        let self = this; //requestAnimationFrame kennt die this methode nicht und wird deshalb in eine Variable gepackt.
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) { // MO = Movable Objects
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}