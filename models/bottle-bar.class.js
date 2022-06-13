class BottleBar extends DrawableObject {

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setBottleBar();
        this.x = 40;
        this.y = 100;
        this.height = 60;
        this.width = 200;
    };

    IMAGES = [
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png',
    ];
    collectedBottles = 0;

    collectBottle() {
        this.collectedBottles += 1;
        if (this.collectedBottles > 5) {
            this.collectedBottles = 5;
        }
    };

    setBottleBar() {
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };
    resolveImageIndex() {
        if (this.collectedBottles == 0) {
            return 0;
        } else if (this.collectedBottles == 1) {
            return 1;
        } else if (this.collectedBottles == 2) {
            return 2;
        } else if (this.collectedBottles == 3) {
            return 3;
        } else if (this.collectedBottles == 4) {
            return 4;
        } else if (this.collectedBottles == 5) {
            return 5;
        };
    };
};