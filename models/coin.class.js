"use strict"
class Coin extends MovableObject {

    constructor(x, y) {
        super().loadImage('../img/8.Coin/Moneda1.png'); // Start Bild der Coin Animation
        this.loadImages(this.IMAGES_COIN); //Array mit allen Bildern für die Münz Animation übergeben
        this.x = x;
        this.y = y;
        this.animate();
    };

    width = 100; //Breite Coin
    height = 100; // Höhe Coin
    IMAGES_COIN = [ // Array für die Münzanimation
        '../img/8.Coin/Moneda1.png',
        '../img/8.Coin/Moneda2.png',
    ];

    amountCoin = 0; // Anzahl der eingesammelten Münzen

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 400);
    };
};