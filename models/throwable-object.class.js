class ThrowableObject extends MovableObject {
	IMAGES_BOTTLES_SPLASH = [
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png",
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png",
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png",
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png",
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png",
		"../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png",
	];
	IMAGES_BOTTLES_THROWING = [
		"../img/6.botella/Rotación/Mesa de trabajo3.png",
		"../img/6.botella/Rotación/Mesa de trabajo4.png",
		"../img/6.botella/Rotación/Mesa de trabajo5.png",
		"../img/6.botella/Rotación/Mesa de trabajo6.png",
	];
	triggerd = false;
	x_movement = 20;
	bottle_hits = false;

	constructor(x, y) {
		super().loadImage(this.IMAGES_BOTTLES_THROWING[0]);
		this.loadImages(this.IMAGES_BOTTLES_THROWING);
		this.loadImages(this.IMAGES_BOTTLES_SPLASH);
		this.throwDirection();
		this.x = x;
		this.y = y;
		this.height = 60;
		this.width = 60;
	}

	throwDirection() {
		if (world.character.otherDirection) {
			this.throwLeft();
		} else {
			this.throwRight();
		}
	}

	throwRight() {
		this.speedY = 20;
		super.applyGravity();
		const rightAni = setInterval(() => {
			this.x += this.x_movement;
			this.animate(rightAni);
		}, 50);
	}

	throwLeft() {
		this.speedY = 20;
		super.applyGravity();
		const leftAni = setInterval(() => {
			this.x -= this.x_movement;
			this.animate(leftAni);
		}, 50);
	}

	animate(animation) {
		if (!this.isInAir() || this.bottle_hits) {
			this.playAnimation(this.IMAGES_BOTTLES_SPLASH);
			setTimeout(() => {
				clearTimeout(animation);
			}, 250);
		} else {
			super.playAnimation(this.IMAGES_BOTTLES_THROWING);
		}
	}
}
