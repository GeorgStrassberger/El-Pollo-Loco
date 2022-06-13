class Chicken extends MovableObject {

    constructor(x) {
        super().loadImage(this.IMAGES_WALKING_CHICKEN[0]);
        this.loadImages(this.IMAGES_WALKING_CHICKEN);
        this.loadImages(this.IMAGES_DEAD_CHICKEN);
        this.animate();
        this.x = x;
        this.y = 350;
        this.height = 80;
        this.width = 80;
        this.energy = 20;
        this.speed = this.x_movement_speed + Math.random() * 0.25; // speed wird überschrieben mit x_movement_speed + zufall * 0.25; Jedes Huhn ist uneterschiedlich schnell
        this.vulnerable = 1;
    };

    //Var
    x_movement_speed = 2;

    IMAGES_WALKING_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];
    IMAGES_DEAD_CHICKEN = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    //Animation der Hühnchen
    animate() {
        setInterval(() => {
            if (super.isDead()) {
                super.playAnimation(this.IMAGES_DEAD_CHICKEN);
            } else {
                super.playAnimation(this.IMAGES_WALKING_CHICKEN);
                super.moveLeft();
            }
        }, 1000 / 10);
    };
};