class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    canvas;
    ctx;
    clouds = [
        new Cloud(),
    ];
    backgroundObjects = [
        new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/1.png')
    ];





    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas 

        this.addToMap(this.character); // draw the Character
        this.addObjectsToMap(this.backgroundObjects); // draw the backgroundObjects
        this.addObjectsToMap(this.clouds); // draw the clouds
        this.addObjectsToMap(this.enemies); // draw the chicken enemies

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

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }





}