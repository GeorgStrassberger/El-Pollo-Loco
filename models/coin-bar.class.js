"use strict"
class CoinBar extends DrawableObject {

    constructor() {
        super();
        this.loadImages(this.IMAGES); // function aus DrawableObject 
        this.x = 40; //Start Punkt in X zum einfügen des Bildes
        this.y = 50; //Start Punkt in Y zum einfügen des Bildes
        this.width = 200; //Bild breite
        this.height = 60; // Bild höhe
        this.setStatusBar(0); // Übergibt den start wert 0
    };

    IMAGES = [
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/20_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/40_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/60_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/80_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/Verde/100_.png',
    ];
    amountCoins = 0;

    setStatusBar(amountCoins) {
        this.amountCoins = amountCoins; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };
    // 
    resolveImageIndex() {
        if (this.amountCoins == 1) {
            return 1;
        } else if (this.amountCoins == 2) {
            return 2;
        } else if (this.amountCoins == 3) {
            return 3;
        } else if (this.amountCoins == 4) {
            return 4;
        } else if (this.amountCoins == 5) {
            return 5;
        } else {
            return 0;
        };
    };
};