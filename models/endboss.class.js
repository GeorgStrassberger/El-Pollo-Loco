"use strict"
class Endboss extends MovableObject {

    constructor() {
        // das Bild für ChickenBoss laden
        super().loadImage(this.IMAGES_WALKING_BOSS[0]);
        this.loadImages(this.IMAGES_WALKING_BOSS);
        this.x = 2500;
        this.animate();
    };

    height = 400;
    width = 250;
    y = 45;

    IMAGES_WALKING_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING_BOSS);
        }, 1000 / 5);
    };
};