"use strict"
class Character extends MovableObject {

    constructor() {
        super().loadImage('../img/Pepe/walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WAIT);
        this.loadImages(this.IMAGES_SLEEP);
        this.animate();
        this.applyGravity();
    };

    height = 200; // standart 300 mit original Bild
    width = 100;
    y = 235; // standart 35 mit original Bild
    speed = 10;

    IMAGES_WALKING = [
        '../img/Pepe/walk/W-21.png',
        '../img/Pepe/walk/W-22.png',
        '../img/Pepe/walk/W-23.png',
        '../img/Pepe/walk/W-24.png',
        '../img/Pepe/walk/W-25.png',
        '../img/Pepe/walk/W-26.png'
        //Original Bilder
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    IMAGES_JUMPING = [
        '../img/Pepe/jump/J-31.png',
        '../img/Pepe/jump/J-32.png',
        '../img/Pepe/jump/J-33.png',
        '../img/Pepe/jump/J-34.png',
        '../img/Pepe/jump/J-35.png',
        '../img/Pepe/jump/J-36.png',
        '../img/Pepe/jump/J-37.png',
        '../img/Pepe/jump/J-38.png',
        '../img/Pepe/jump/J-39.png',
        //Original Bilder
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        //    '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        //   '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ];
    IMAGES_DEAD = [
        '../img/Pepe/dead/D-51.png',
        '../img/Pepe/dead/D-52.png',
        '../img/Pepe/dead/D-53.png',
        '../img/Pepe/dead/D-54.png',
        '../img/Pepe/dead/D-55.png',
        '../img/Pepe/dead/D-56.png',
        //Original Bilder
        //'../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        //'../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        //   '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        //   '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        //   '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        //   '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
    ];
    IMAGES_HURT = [
        '../img/Pepe/hurt/H-41.png',
        '../img/Pepe/hurt/H-42.png',
        '../img/Pepe/hurt/H-43.png'
        //  Original Bilder
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];
    IMAGES_WAIT = [
        '../img/Pepe/wait/I-1.png',
        '../img/Pepe/wait/I-2.png',
        '../img/Pepe/wait/I-3.png',
        '../img/Pepe/wait/I-4.png',
        '../img/Pepe/wait/I-5.png',
        '../img/Pepe/wait/I-6.png',
        '../img/Pepe/wait/I-7.png',
        '../img/Pepe/wait/I-8.png',
        '../img/Pepe/wait/I-9.png',
        '../img/Pepe/wait/I-10.png',
        //Original Bilder
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        //        '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
    ];
    IMAGES_SLEEP = [
        '../img/Pepe/sleep/I-11.png',
        '../img/Pepe/sleep/I-12.png',
        '../img/Pepe/sleep/I-13.png',
        '../img/Pepe/sleep/I-14.png',
        '../img/Pepe/sleep/I-15.png',
        '../img/Pepe/sleep/I-16.png',
        '../img/Pepe/sleep/I-17.png',
        '../img/Pepe/sleep/I-18.png',
        '../img/Pepe/sleep/I-19.png',
        '../img/Pepe/sleep/I-20.png',
        //  Original Bilder
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        //  '../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png',
    ];
    world;
    walking_sound = new Audio('../audio/walking.mp3');
    jumping_sound = new Audio('../audio/jump.mp3');
    hurt_sound = new Audio('../audio/hurt.mp3');


    /**
     * animate the Character move- and soundset
     */
    animate() {
        setInterval(() => {
            this.walking_sound.pause(); //pausiere den TON immer wieder
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { //WENN taste rechts &UND& X-Koordinate nicht größer als _end_x
                super.moveRight(); //bewege Character nach rechts
                this.otherDirection = false; // setze die variabele auf false
                if (!super.isAboveGround()) { //WENN nicht in der luft
                    this.walking_sound.play(); // spiele TON ab fürs laufen
                };
            };
            if (this.world.keyboard.LEFT && this.x > 0) { // WENN taste links && X-Koordinate ist größer als 0 --> bei NULL wird die (bedingung) FALSE und der Character kann nicht weiter Links laufen.
                super.moveLeft(); // bewege Character nach links
                this.otherDirection = true; // spiegelt das bild des characters 
                if (!super.isAboveGround()) { // wenn nicht in der Luft
                    this.walking_sound.play(); // spiele TON ab fürs laufen
                };
            };
            if (this.world.keyboard.UP && !super.isAboveGround()) { //WENN taste jump &UND& ist nicht auf dem Boden
                super.jump(); // bewege Character nach oben 
                this.jumping_sound.play(); // und spiele TON ab fürs Hüpfen
            };
            this.world.camera_x = -this.x + 100; // Character weiter nach rechts setzen -> Abstand zum rand
        }, 1000 / 60); // wird alle 1000/60 millisekunden aufgerufen (ausgeführt / 60FPS)

        setInterval(() => {
            if (super.isDead()) { // WENN die function isDead() true zurückgiebt
                super.playAnimation(this.IMAGES_DEAD); // starte playAnimation( mit diesem Bilder array)
                this.hurt_sound.pause(); // pauseire den TON für die trefferabfrage
            } else if (super.isHurt()) { // WENN die function isHurt() true zurückgiebt
                super.playAnimation(this.IMAGES_HURT); // starte playAnimation( mit diesem Bilder array)
                this.hurt_sound.play(); // spiele TON ab für treffer
            } else if (super.isAboveGround()) { // WENN die function isAboveGround() true zurückgiebt
                super.playAnimation(this.IMAGES_JUMPING); // starte playAnimation( mit diesem Bilder array) 
            } else { // SONST
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { //WENN  taste rechts |ODER| taste links gedrückt wird
                    super.playAnimation(this.IMAGES_WALKING); // starte playAnimation( mit diesem Bilder array)
                };
            };
        }, 1000 / 10); // wird alle 1000/60 millisekunden aufgerufen (ausgeführt / 60FPS)
    };
};