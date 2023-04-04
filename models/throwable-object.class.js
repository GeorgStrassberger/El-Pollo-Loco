class ThrowableObject extends MovableObject {
	IMAGES_BOTTLES_SPLASH = [
		"../img/bottle/splash/splash0.png",
		"../img/bottle/splash/splash1.png",
		"../img/bottle/splash/splash2.png",
		"../img/bottle/splash/splash3.png",
		"../img/bottle/splash/splash4.png",
		"../img/bottle/splash/splash5.png",
	];
	IMAGES_BOTTLES_THROWING = [
		"../img/bottle/rotate/rotate0.png",
		"../img/bottle/rotate/rotate90.png",
		"../img/bottle/rotate/rotate180.png",
		"../img/bottle/rotate/rotate270.png",
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
			this.x_movement = 0;
			this.playAnimation(this.IMAGES_BOTTLES_SPLASH);
			setTimeout(() => {
				clearTimeout(animation);
			}, 250);
		} else {
			super.playAnimation(this.IMAGES_BOTTLES_THROWING);
		}
	}
}
