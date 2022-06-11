"use strict"
class Coin extends MovableObject {

    constructor(x, y) { // X, Y Koordinate
        super().loadImage('../img/8.Coin/Moneda1.png'); // Start Bild der Coin Animation
        this.loadImages(this.IMAGES_COIN); //Array mit allen Bildern für die Münz Animation übergeben
        this.animate();
        this.x = x;
        this.y = y;
        this.height = 100; // Höhe Coin
        this.width = 100; //Breite Coin
    };

    IMAGES_COIN = [ // Array für die Münzanimation
        '../img/8.Coin/Moneda1.png',
        '../img/8.Coin/Moneda2.png',
    ];

    animate() {
        setInterval(() => {
            super.playAnimation(this.IMAGES_COIN);
        }, 400);
    };
};