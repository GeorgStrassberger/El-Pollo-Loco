class Character extends MovableObject {


    height = 300;
    width = 100;
    y = 135;
    speed = 10;
    IMAGES_WALKING_CHARACTER = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    world;
    walking_sound = new Audio("../audio/walking.mp3");

    constructor() {
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING_CHARACTER);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause(); // sound alle 1000/60 millisekunden anhalten & und wieder starten
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // && X-Koordinate größer als _end_x (bedingung) FALSE 
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) { // && X-Koordinate ist größer als 0 --> bei NULL wird die (bedingung) FALSE und der Character kann nicht weiter Links laufen.
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100; // Character weiter nach rechts setzen
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                let i = this.currentWalkingImage % this.IMAGES_WALKING_CHARACTER.length; // let i = 7 % 6; => 1, Rest 1
                // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
                let path = this.IMAGES_WALKING_CHARACTER[i];
                this.img = this.imageCache[path];
                this.currentWalkingImage++;
            }
        }, 1000 / 20);
    }

    jump() {

    }

}