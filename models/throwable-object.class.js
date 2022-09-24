class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage(this.IMAGES_BOTTLES_THROWING[0]);
        this.loadImages(this.IMAGES_BOTTLES_THROWING);
        this.loadImages(this.IMAGES_BOTTLES_SPLASH);
        this.directionToThrow();
        this.animate();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
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
    // bottle_hits = false;
    x_movement = 10;

    // wurf Richtung
    directionToThrow() {
        if (world.character.otherDirection) {
            this.throwLeft();
        } else {
            this.throwRight();
        };
    };

    // wirft nach Links
    throwRight() {
        this.speedY = 20;
        super.applyGravity();
        // geschwindigkeit der Flasche in + X richtung
        setInterval(() => {
            this.x += this.x_movement;
        }, 25);
    };

    // wirft nach Rechts
    throwLeft() {
        this.speedY = 20;
        super.applyGravity();
        // geschwindigkeit der Flasche in - X richtung
        setInterval(() => {
            this.x -= this.x_movement;
        }, 25);
    };

    // Animation der Falsche
    animate() {
        // console.log('Animate Flasche');
        setInterval(() => {
            if (this.bottle_hits || !super.isAboveGround()) { // 
                super.playAnimation(this.IMAGES_BOTTLES_SPLASH);
                this.x_movement = 2; //SPLASH verläuft nach rechts
                this.speedY = -2; //SPLASH verläuft nach unten
            } else {
                super.playAnimation(this.IMAGES_BOTTLES_THROWING);
                // console.log('Animate Flasche Drehen');
            }
        }, 50);
    };
};