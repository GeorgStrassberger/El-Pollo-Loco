class ThrowableObject extends MovableObject {

    IMAGES_BOTTLES = [
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];


    constructor(x, y) { // übergibt die X & Y koordinaten an THIS.X & This.Y
        super().loadImage('../img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }


    throw () {
        this.speedY = 30;
        this.applyGravity();
        // geschwindigkeit der Flasche in X richtung
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

}