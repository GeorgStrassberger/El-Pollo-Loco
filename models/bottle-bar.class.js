class BottleBar extends DrawableObject {

    IMAGES = [
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png',
    ];
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setBottleBar(0);
        this.x = 40;
        this.y = 100;
        this.height = 60;
        this.width = 200;
    };


    setBottleBar(number) {
        let path = this.IMAGES[this.resolveImageIndex(number)];
        this.img = this.imageCache[path];
    };
    resolveImageIndex(number) {
        if (number === 0) {
            return 0;
        } else if (number === 1) {
            return 1;
        } else if (number === 2) {
            return 2;
        } else if (number === 3) {
            return 3;
        } else if (number === 4) {
            return 4;
        } else if (number === 5) {
            return 5;
        };
    };
};