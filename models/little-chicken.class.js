class LittleChicken extends MovableObject {

    constructor(x, y) {
        super().loadImage(this.IMAGES_WALKING_LITTLE_CHICKEN[0]);
        this.loadImages(this.IMAGES_WALKING_LITTLE_CHICKEN);
        this.loadImages(this.IMAGES_DEAD_LITTLE_CHICKEN);
        this.animate();
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.energy = 10;
        this.speed = this.x_movement_speed + Math.random() * 4.5; // speed wird überschrieben mit x_movement_speed + zufall * 0.25; Jedes Huhn ist uneterschiedlich schnell
        this.vulnerable = 1;
    };
    //Var
    x_movement_speed = 2;

    IMAGES_WALKING_LITTLE_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];
    IMAGES_DEAD_LITTLE_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ];


    //Animation der Kleinen Hühnchen
    animate() {
        setInterval(() => {
            if (super.isDead()) {
                super.playAnimation(this.IMAGES_DEAD_LITTLE_CHICKEN);
            } else {
                super.playAnimation(this.IMAGES_WALKING_LITTLE_CHICKEN);
                super.moveLeft();
            }
        }, 1000 / 10);
    };
}