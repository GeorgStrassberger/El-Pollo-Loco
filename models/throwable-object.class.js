"use strict"
class ThrowableObject extends MovableObject {

    constructor(x, y) { // übergibt die X & Y koordinaten an THIS.X & This.Y
        super().loadImage('../img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.directionToThrow();
    };

    IMAGES_BOTTLES = [
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];

    throw_sound = new Audio('../audio/throw.mp3');
    // Richtung zu werfen
    // Abfrage: ob der Cjaracter nach Links oder Rechts sieht
    directionToThrow() {
        if (world.character.otherDirection === true) {
            this.throwLeft();
        } else {
            this.throwRight();
        };
    };

    // wirft nach Links
    throwRight() {
        this.speedY = 30;
        this.applyGravity();
        // geschwindigkeit der Flasche in X richtung
        setInterval(() => {
            this.x += 10;
        }, 25);
    };

    // wirft nach Rechts
    throwLeft() {
        this.speedY = 30;
        this.applyGravity();
        // geschwindigkeit der Flasche in X richtung
        setInterval(() => {
            this.x -= 10;
        }, 25);
    };
};