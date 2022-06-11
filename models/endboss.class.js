"use strict"
class Endboss extends MovableObject {

    constructor(x) { //Start Koordinate in X-Richtung wird überangeben von level1
        // das Bild für ChickenBoss laden
        super().loadImage(this.IMAGES_ALERT_BOSS[0]);
        this.loadImages(this.IMAGES_ALERT_BOSS);
        this.loadImages(this.IMAGES_WALKING_BOSS);
        this.loadImages(this.IMAGES_ATTECKING_BOSS);
        this.loadImages(this.IMAGES_HURT_BOSS);
        this.loadImages(this.IMAGES_DEAD_BOSS);
        this.animate();
        this.x = x;
        this.y = 45;
        this.height = 400;
        this.width = 250;
        this.energy = 100;
        this.speed = 5;
    };

    IMAGES_WALKING_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];
    IMAGES_ALERT_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];
    IMAGES_ATTECKING_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];
    IMAGES_HURT_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];
    IMAGES_DEAD_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png#',
    ];

    animate() {
        setInterval(() => {
            super.playAnimation(this.IMAGES_ALERT_BOSS);
        }, 1000 / 5);
    };

    // benötigt noch eine HP pool bzw - min 3 falschen colisionen
};