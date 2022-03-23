"use strict"
class Cloud extends MovableObject {
    // werden fest deklariert , weil sie sich nicht ändern.
    y = 20;
    width = 500;
    height = 250;
    IMAGES_COUDS = [
        '../img/5.Fondo/Capas/4.nubes/1.png',
        '../img/5.Fondo/Capas/4.nubes/2.png',
    ];



    constructor(x) {

        // das Bild für Wolken laden
        super().loadImage(this.IMAGES_COUDS[0]);
        this.loadImages(this.IMAGES_COUDS);
        //Koordinate in X-Richtung angeben 
        this.x = x; //Normale Mathe regeln "Punkt vor Stricht", (0-1) * 500 ## min. 00 - max. 700. 
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.x < -79) {
                this.x = (Math.random() * 10) + 2500;
            }
            this.x -= (this.speed - 0.2);
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.

    }



}