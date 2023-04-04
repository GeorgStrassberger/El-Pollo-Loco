class LittleChicken extends MovableObject {
	IMAGES_WALKING_LITTLE_CHICKEN = [
		"../img/enemies/chick/chick_walk0.png",
		"../img/enemies/chick/chick_walk1.png",
		"../img/enemies/chick/chick_walk2.png",
	];

	IMAGES_DEAD_LITTLE_CHICKEN = ["../img/enemies/chick/chick_dead.png"];

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
