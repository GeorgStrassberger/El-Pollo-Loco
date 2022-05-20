"use strict"
class Chicken extends MovableObject {

    constructor(x) {
        // das Bild für Chicken laden
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING_CHICKEN);
        //Start Koordinate in X-Richtung angeben 
        this.x = x;
        this.speed = this.speed + Math.random() * 0.25; // speed wird überschrieben mit speed 0.2 + zufall * 0.25; Jedes Huhn ist uneterschiedlich schnell
        this.animate();
    };

    height = 80;
    width = 80;
    y = 350;
    IMAGES_WALKING_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];
    /**
     *  Alle Hühnchen laufen nach links in dem alle 60 FPS die X-Koordinate verschoben wird und bei X -79 werden sie wieder an den anfang bei 700 + random gesetzt.
     */
    animate() {
        setInterval(() => {
            super.moveLeft();
            if (this.x < -79) { //WENN das Bild X-79 erreicht
                this.x = (Math.random() * 10) + 2000; // setze es wieder auf X ... zurück
            }
            this.x -= this.speed;
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.

        setInterval(() => {
            super.playAnimation(this.IMAGES_WALKING_CHICKEN); // wiederhole die function playAnimate mit den Bilder aus diesem Array
        }, 1000 / 5);
    };
};