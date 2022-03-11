class Cloud extends MovableObject {
    // werden fest deklariert , weil sie sich nicht ändern.
    y = 20;
    width = 500;
    height = 250;

    constructor() {

        // das Bild für Wolken laden
        super().loadImage('../img/5.Fondo/Capas/4.nubes/1.png');
        //Koordinate in X-Richtung angeben 
        this.x = Math.random() * 700; //Normale Mathe regeln "Punkt vor Stricht", (0-1) * 500 ## min. 00 - max. 700. 
        this.animateCloud();

    }


    animateCloud() {
        setInterval(() => {
            if (this.x < 0) {
                this.x = Math.random() * 700;
            }
            this.x -= 0.2;
        }, 1000 / 60); // 60 FPS -< 60 mal pro Sekunde aufgerufen.
    };

}