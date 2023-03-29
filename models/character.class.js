class Character extends MovableObject {
	// Images
	IMAGES_WALKING = [
		"../img/Pepe/walk/W-21.png",
		"../img/Pepe/walk/W-22.png",
		"../img/Pepe/walk/W-23.png",
		"../img/Pepe/walk/W-24.png",
		"../img/Pepe/walk/W-25.png",
		"../img/Pepe/walk/W-26.png",
	];
	IMAGES_JUMPING = [
		"../img/Pepe/jump/J-31.png",
		"../img/Pepe/jump/J-32.png",
		"../img/Pepe/jump/J-33.png",
		"../img/Pepe/jump/J-34.png",
		"../img/Pepe/jump/J-35.png",
		"../img/Pepe/jump/J-36.png",
		"../img/Pepe/jump/J-37.png",
		"../img/Pepe/jump/J-38.png",
		"../img/Pepe/jump/J-39.png",
	];
	IMAGES_DEAD = [
		"../img/Pepe/dead/D-51.png",
		"../img/Pepe/dead/D-52.png",
		"../img/Pepe/dead/D-53.png",
		"../img/Pepe/dead/D-54.png",
		"../img/Pepe/dead/D-55.png",
		"../img/Pepe/dead/D-56.png",
	];
	IMAGES_HURT = [
		"../img/Pepe/hurt/H-41.png",
		"../img/Pepe/hurt/H-42.png",
		"../img/Pepe/hurt/H-43.png",
	];
	IMAGES_WAIT = [
		"../img/Pepe/wait/I-1.png",
		"../img/Pepe/wait/I-2.png",
		"../img/Pepe/wait/I-3.png",
		"../img/Pepe/wait/I-4.png",
		"../img/Pepe/wait/I-5.png",
		"../img/Pepe/wait/I-6.png",
		"../img/Pepe/wait/I-7.png",
		"../img/Pepe/wait/I-8.png",
		"../img/Pepe/wait/I-9.png",
		"../img/Pepe/wait/I-10.png",
	];
	IMAGES_SLEEP = [
		"../img/Pepe/sleep/I-11.png",
		"../img/Pepe/sleep/I-12.png",
		"../img/Pepe/sleep/I-13.png",
		"../img/Pepe/sleep/I-14.png",
		"../img/Pepe/sleep/I-15.png",
		"../img/Pepe/sleep/I-16.png",
		"../img/Pepe/sleep/I-17.png",
		"../img/Pepe/sleep/I-18.png",
		"../img/Pepe/sleep/I-19.png",
		"../img/Pepe/sleep/I-20.png",
	];
	world;
	x = 120;
	y = 235;
	height = 200;
	width = 100;
	energy = 100;
	speed = 10;
	invulnerableTime = 0.5;

	constructor(world) {
		super().loadImage(this.IMAGES_WALKING[0]);
		super.loadImages(this.IMAGES_WALKING);
		super.loadImages(this.IMAGES_JUMPING);
		super.loadImages(this.IMAGES_DEAD);
		super.loadImages(this.IMAGES_HURT);
		super.loadImages(this.IMAGES_WAIT);
		super.loadImages(this.IMAGES_SLEEP);
		this.world = world;
		super.applyGravity();
		this.animate();
	}

	//Animation Character
	animate() {
		this.characterMovments();
		this.characterPresentation();
	}

	characterMovments() {
		this.characterMovement = setInterval(() => {
			walking_sound.pause();
			if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
				super.moveRight();
				this.otherDirection = false;
				if (!super.isInAir()) {
					walking_sound.play();
				}
			}
			if (this.world.keyboard.LEFT && this.x > 0) {
				super.moveLeft();
				this.otherDirection = true;
				if (!super.isInAir()) {
					walking_sound.play();
				}
			}
			if (this.world.keyboard.UP && !super.isInAir()) {
				super.jump();
				jumping_sound.play();
			}
			this.world.camera_x = -this.x + 100; // Character weiter nach rechts setzen -> Abstand zum rand
		}, 1000 / 60);
	}

	characterPresentation() {
		// Presentation (Darstellung)
		setInterval(() => {
			if (super.isDead()) {
				super.playAnimation(this.IMAGES_DEAD);
				hurt_sound.pause();
				walking_sound.pause();
				this.gameLost();
			} else if (super.isHurt(this.invulnerableTime)) {
				super.playAnimation(this.IMAGES_HURT);
				hurt_sound.play();
			} else if (super.isInAir()) {
				super.playAnimation(this.IMAGES_JUMPING);
			} else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
				super.playAnimation(this.IMAGES_WALKING);
			} else {
				super.playAnimation(this.IMAGES_WAIT);
			}
			// afk animation fehlt noch mit SLEEPING ARRAY
		}, 1000 / 10);
	}

	//Wenn Character Tot ist
	gameLost() {
		clearInterval(this.characterMovement);
		// Ton abspielen fehlt noch
		document.getElementById("cover").classList.remove("d-none"); // blende start bild aus
		document.getElementById("endframe").classList.remove("d-none");
		document.getElementById("startframe").classList.add("d-none");
		document.getElementById(
			"coverimg"
		).src = `../img/9.IntroOutroImage/GameOverScreen/1.you lost.png`;
	}
}
