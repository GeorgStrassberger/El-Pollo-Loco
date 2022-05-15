"use strict";
class Bottle extends DrawableObject {
    constructor(x, y) {
        super().loadImage('../img/6.botella/2.Botella_enterrada1.png'); // Start Bild der Coin Animation
        this.x = x;
        this.y = y;
    };

    width = 80; //Breite Coin
    height = 80; // Höhe Coin

    amountBottles = 0; // Anzahl der eingesammelten Münzen
};