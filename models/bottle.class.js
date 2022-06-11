"use strict";
class Bottle extends DrawableObject {

    constructor(x, y, j) { // X, Y Koordinate und array pos. übergeben
        super().loadImage(this.IMAGES_BOTTLES[j]);
        this.j = j; // Array Position 0 or 1
        this.x = x; // X Koordinate 
        this.y = y; // Y Koordinate
        this.height = 80; // Höhe Flasche
        this.width = 80; // Breite Flasche
    };

    IMAGES_BOTTLES = [ // Array für die Flaschentypen L & R
        '../img/6.botella/2.Botella_enterrada1.png',
        '../img/6.botella/2.Botella_enterrada2.png',
    ];
};