class Chicken extends MovableObject {
	IMAGES_WALKING_CHICKEN = [
		"../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png",
		"../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png",
		"../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png",
	];
	IMAGES_DEAD_CHICKEN = [
		"../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png",
	];
	x;
	y = 350;
	height = 80;
	width = 80;
	energy = 20;
	x_movement_speed = 2;
	speed = this.x_movement_speed + Math.random() * 6.0;
	lastHit = 0;
	invulnerableTime = 1;
	id;

	constructor(x, id) {
		super().loadImage(this.IMAGES_WALKING_CHICKEN[0]);
		this.loadImages(this.IMAGES_WALKING_CHICKEN);
		this.loadImages(this.IMAGES_DEAD_CHICKEN);
		this.animate();
		this.x = x;
		this.id = id;
	}

	animate() {
		setInterval(() => {
			if (super.isDead()) {
				super.playAnimation(this.IMAGES_DEAD_CHICKEN);
			} else {
				super.playAnimation(this.IMAGES_WALKING_CHICKEN);
				super.moveLeft();
			}
		}, 1000 / 10);
	}
}
