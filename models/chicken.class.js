class Chicken extends MovableObject {
	IMAGES_WALKING_CHICKEN = [
		"../img/enemies/chicken/chicken_walk0.png",
		"../img/enemies/chicken/chicken_walk1.png",
		"../img/enemies/chicken/chicken_walk2.png",
	];
	IMAGES_DEAD_CHICKEN = ["../img/enemies/chicken/chicken_dead.png"];

	x;
	y = 350;
	height = 80;
	width = 80;
	energy = 20;
	x_movement_speed = 2;
	speed = this.x_movement_speed + Math.random() * 6.0;
	lastHit = 0;
	invulnerableTime = 1;

	constructor(x) {
		super().loadImage(this.IMAGES_WALKING_CHICKEN[0]);
		this.loadImages(this.IMAGES_WALKING_CHICKEN);
		this.loadImages(this.IMAGES_DEAD_CHICKEN);
		this.animate();
		this.x = x;
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
