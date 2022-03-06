class Chicken extends MovableObject {


    y = 350;
    height = 80;
    width = 80;

    constructor() {

        // das Bild für Chicken laden
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        //Start Koordinate in X-Richtung angeben 
        this.x = 200 + Math.random() * 500; //Normale Mathe regeln "Punkt vor Stricht", 200 + (0-1) * 500 ## min. 200 - max. 700. 

    }
}