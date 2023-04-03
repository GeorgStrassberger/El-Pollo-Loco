class LittleChicken extends MovableObject {
	IMAGES_WALKING_LITTLE_CHICKEN = [
		"../img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png",
		"../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png",
		"../img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png",
	];

	IMAGES_DEAD_LITTLE_CHICKEN = [
		"../img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png",
	];

	x;
	y = 375;
	height = 50;
	width = 50;
	x_movement_speed = 2;
	energy = 10;
	speed = this.x_movement_speed + Math.random() * 8.0;
	lastHit = 0;
	invulnerableTime = 1;

	constructor(x, y) {
		super().loadImage(this.IMAGES_WALKING_LITTLE_CHICKEN[0]);
		this.loadImages(this.IMAGES_WALKING_LITTLE_CHICKEN);
		this.loadImages(this.IMAGES_DEAD_LITTLE_CHICKEN);
		this.animate();
		this.x = x;
		this.y = y;
	}

	animate() {
		setInterval(() => {
			if (super.isDead()) {
				super.playAnimation(this.IMAGES_DEAD_LITTLE_CHICKEN);
			} else {
				super.playAnimation(this.IMAGES_WALKING_LITTLE_CHICKEN);
				super.moveLeft();
			}
		}, 1000 / 10);
	}
}
