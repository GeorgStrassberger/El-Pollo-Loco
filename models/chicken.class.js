class Chicken extends MovableObject {



    height = 80;
    width = 80;
    y = 350;
    IMAGES_WALKING_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];


    constructor() {

        // das Bild für Chicken laden
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING_CHICKEN);
        //Start Koordinate in X-Richtung angeben 
        this.x = 200 + Math.random() * 500; //Normale Mathe regeln "Punkt vor Stricht", 200 + (0-1) * 500 ## min. 200 - max. 700. 
        // lässt die Hünchen nach links laufen,
        this.moveChickensLeft();
        this.animateChickensWaking();
    }

    moveChickensLeft() {
        setInterval(() => {
            if (this.x < -79) {
                this.x = 720;
            }
            this.x -= 0.5;
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.
    };

    animateChickensWaking() {
        setInterval(() => {
            let i = this.currentWalkingImage % this.IMAGES_WALKING_CHICKEN.length; // let i = 7 % 6; => 1, Rest 1
            // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...; 
            let path = this.IMAGES_WALKING_CHICKEN[i];
            this.img = this.imageCache[path];
            this.currentWalkingImage++;
        }, 1000 / 5);
    }




}