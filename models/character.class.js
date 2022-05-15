"use strict"
class Character extends MovableObject {

    constructor() {
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WAIT);
        this.loadImages(this.IMAGES_SLEEP);
        this.animate();
        this.applyGravity();
    };

    height = 300;
    width = 100;
    y = 35;
    speed = 10;
    IMAGES_WALKING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    IMAGES_JUMPING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ];
    IMAGES_DEAD = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
    ];
    IMAGES_HURT = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];
    IMAGES_WAIT = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
    ];
    IMAGES_SLEEP = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png',
    ];
    world;
    walking_sound = new Audio('../audio/walking.mp3');
    jumping_sound = new Audio('../audio/jump.mp3');
    hurt_sound = new Audio('../audio/hurt.mp3');
    lastPushAt = 0;

    /**
     * animate the Character move- and soundset
     */
    animate() {
        setInterval(() => {
            this.walking_sound.pause(); //pausiere den TON immer wieder
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { //WENN taste rechts &UND& X-Koordinate nicht größer als _end_x
                this.moveRight(); //bewege Character nach rechts
                this.otherDirection = false; // setze die variabele auf false
                if (!this.isAboveGround()) { //WENN nicht in der luft
                    this.walking_sound.play(); // spiele TON ab fürs laufen
                };
            };
            if (this.world.keyboard.LEFT && this.x > 0) { // WENN taste links && X-Koordinate ist größer als 0 --> bei NULL wird die (bedingung) FALSE und der Character kann nicht weiter Links laufen.
                this.moveLeft(); // bewege Character nach links
                this.otherDirection = true; // spiegelt das bild des characters 
                if (!this.isAboveGround()) { // wenn nicht in der Luft
                    this.walking_sound.play(); // spiele TON ab fürs laufen
                };
            };
            if (this.world.keyboard.UP && !this.isAboveGround()) { //WENN taste jump &UND& ist nicht auf dem Boden
                this.jump(); // bewege Character nach oben 
                this.jumping_sound.play(); // und spiele TON ab fürs Hüpfen
            };
            this.world.camera_x = -this.x + 100; // Character weiter nach rechts setzen -> Abstand zum rand
        }, 1000 / 60); // wird alle 1000/60 millisekunden aufgerufen (ausgeführt / 60FPS)

        setInterval(() => {
            if (this.isDead()) { // WENN die function isDead() true zurückgiebt
                this.playAnimation(this.IMAGES_DEAD); // starte playAnimation( mit diesem Bilder array)
                this.hurt_sound.pause(); // pauseire den TON für die trefferabfrage
            } else if (this.isHurt()) { // WENN die function isHurt() true zurückgiebt
                this.playAnimation(this.IMAGES_HURT); // starte playAnimation( mit diesem Bilder array)
                this.hurt_sound.play(); // spiele TON ab für treffer
            } else if (this.isAboveGround()) { // WENN die function isAboveGround() true zurückgiebt
                this.playAnimation(this.IMAGES_JUMPING); // starte playAnimation( mit diesem Bilder array) 
            } else { // SONST
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { //WENN  taste rechts |ODER| taste links gedrückt wird
                    this.playAnimation(this.IMAGES_WALKING); // starte playAnimation( mit diesem Bilder array)
                };
            };
        }, 1000 / 10); // wird alle 1000/60 millisekunden aufgerufen (ausgeführt / 60FPS)
    };
};


// // waiting() {
// //     setInterval(() => {
// //         let currentTimeInSeconds = new Date().getTime() / 1000;
// //         // // let lastPushAt = 0;
// //         let waitTimer = lastPushAt + 2;
// //         let sleepTimer = lastPushAt + 5;
// //         // Wird eine Taste gedrückt?
// //         if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.SPACE) {
// //             console.log('YouPushed!');
// //             //Zeit rauslesen
// //             lastPushAt = new Date().getTime() / 1000;
// //             waitTimer = lastPushAt + 2;
// //             sleepTimer = lastPushAt + 5;
// //             //Zeit anzeigen
// //             console.log('lastPushAt; ', lastPushAt);
// //             console.log('waitTime: ', waitTimer);
// //         }
// //         //Zeit abfragen
// //         if (waitTimer < currentTimeInSeconds) {
// //             console.log('Warte jetzt');
// //             // this.playAnimation(this.IMAGES_WAIT);
// //         } else if (sleepTimer < currentTimeInSeconds) {
// //             console.log('Schlafe jetzt');
// //             // this.playAnimation(this.IMAGES_SLEEP);
// //         }
// //     }, 1000 / 60);
// // }