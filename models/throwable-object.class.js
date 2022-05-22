"use strict"
class ThrowableObject extends MovableObject {

    constructor(x, y) { // übergibt die X & Y koordinaten an THIS.X & This.Y
        super().loadImage('../img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_BOTTLES_THROWING);
        this.loadImages(this.IMAGES_BOTTLES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.directionToThrow();
        this.animate();
    };
    IMAGES_BOTTLES_SPLASH = [
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];
    IMAGES_BOTTLES_THROWING = [
        '../img/6.botella/Rotación/Mesa de trabajo3.png',
        '../img/6.botella/Rotación/Mesa de trabajo4.png',
        '../img/6.botella/Rotación/Mesa de trabajo5.png',
        '../img/6.botella/Rotación/Mesa de trabajo6.png',
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
        this.speedY = 20;
        super.applyGravity();
        // geschwindigkeit der Flasche in X richtung
        setInterval(() => {
            this.x += 10;
        }, 25);
    };

    // wirft nach Rechts
    throwLeft() {
        this.speedY = 20;
        super.applyGravity();
        // geschwindigkeit der Flasche in X richtung
        setInterval(() => {
            this.x -= 10;
        }, 25);
    };


    animate() {
        if (this.isAboveGround()) {
            setInterval(() => {
                super.playAnimation(this.IMAGES_BOTTLES_THROWING);
            }, 100);
        } else {
            setInterval(() => {
                super.playAnimation(this.IMAGES_BOTTLES_SPLASH);
            }, 100);
        };
    };
};