"use strict"
class Cloud extends MovableObject {

    constructor(x) {
        // das Bild für Wolken laden
        super().loadImage(this.IMAGES_CLOUDS[0]);
        this.loadImages(this.IMAGES_CLOUDS);
        //Koordinate in X-Richtung angeben 
        this.x = x; //Normale Mathe regeln "Punkt vor Stricht", (0-1) * 500 ## min. 00 - max. 700. 
        this.y = 20;
        this.height = 250;
        this.width = 500;
        this.speed = 0.2;
        this.animate();
    };
    // werden fest deklariert , weil sie sich nicht ändern.
    IMAGES_CLOUDS = [
        '../img/5.Fondo/Capas/4.nubes/1.png',
        '../img/5.Fondo/Capas/4.nubes/2.png',
    ];

    animate() {
        setInterval(() => {
            super.moveLeft();
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.
    };
};

/* So sieht die Funktion auas :D  
    moveLeft() {
        this.x -= this.speed;
    };
*/