class World {
    canvas; // canvas.getContext ## Leihnwand zusammenhang
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [new Cloud()];
    backgroundObjects = [
        new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
        new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    // Verbindung zwischen World und Character .class
    setWorld() {
        this.character.world = this;
    }

    draw() { // es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas 

        this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links. 

        this.addObjectsToMap(this.backgroundObjects); // draw the backgroundObjects
        this.addObjectsToMap(this.clouds); // draw the clouds
        this.addObjectsToMap(this.enemies); // draw the chicken enemies
        this.addToMap(this.character); // draw the Character

        this.ctx.translate(-this.camera_x, 0);

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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }





}