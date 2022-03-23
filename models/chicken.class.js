"use strict"
class Chicken extends MovableObject {

    height = 80;
    width = 80;
    y = 350;
    IMAGES_WALKING = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];


    constructor() {

        // das Bild für Chicken laden
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        //Start Koordinate in X-Richtung angeben 
        this.x = 1000 + (Math.random() * 1000); //Normale Mathe regeln "Punkt vor Stricht", 200 + (0-1) * 500 ## min. 200 - max. 700. 
        this.speed = this.speed + Math.random() * 0.25; // speed wird überschrieben mit speed 0.2 + zufall * 0.25; Jedes Huhn ist uneterschiedlich schnell
        // lässt die Hünchen nach links laufen,
        //    this.moveChickensLeft();
        this.animate();
    };

    /**
     *  Alle Hühnchen laufen nach links in dem alle 60 FPS die x-Koordinate verschoben wird und bei X -79 werden sie wieder an den anfang bei 700 + random gesetzt.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.x < -79) {
                this.x = (Math.random() * 10) + 2000;
            }
            this.x -= this.speed;
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 5);
    };









}