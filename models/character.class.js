class Character extends MovableObject {


    height = 300;
    width = 100;
    y = 135;
    IMAGES_WALKING_CHARACTER = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];



    constructor() {
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING_CHARACTER);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentWalkingImage % this.IMAGES_WALKING_CHARACTER.length; // let i = 7 % 6; => 1, Rest 1
            // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
            let path = this.IMAGES_WALKING_CHARACTER[i];
            this.img = this.imageCache[path];
            this.currentWalkingImage++;
        }, 1000 / 4);
    }

    jump() {

    }

}