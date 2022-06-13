class Chicken extends MovableObject {

    constructor(x) {
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING_CHICKEN);
        this.loadImages(this.IMAGES_DEAD_CHICKEN);
        this.animate();
        this.x = x;
        this.y = 350;
        this.height = 80;
        this.width = 80;
        this.energy = 19;
        this.speed = this.x_movement_speed + Math.random() * 0.25; // speed wird überschrieben mit x_movement_speed + zufall * 0.25; Jedes Huhn ist uneterschiedlich schnell
    };

    x_movement_speed = 2;
    is_Dead = false;
    //bottle_hits = false;
    IMAGES_WALKING_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];
    IMAGES_DEAD_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    /**
     *  Alle Hühnchen laufen nach links in dem alle 60 FPS die X-Koordinate verschoben
     */
    animate() {
        /*
        setInterval(() => {
            super.moveLeft();
            if (this.x < -79) { //WENN das Bild X-79 erreicht
                this.x = (Math.random() * x_movement) + 2000; // setze es wieder auf X ... zurück
            }
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.
*/
        setInterval(() => {
            if (super.isDead()) {
                super.playAnimation(this.IMAGES_DEAD_CHICKEN);
                //setTimeout(() => this.y = -100, 250); // schiebt das bild aus der Leihnwand nach unten
            } else {
                super.playAnimation(this.IMAGES_WALKING_CHICKEN);
                super.moveLeft();
            }
        }, 1000 / 10);
    };
};