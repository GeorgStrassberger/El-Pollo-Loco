class Character extends MovableObject {
	IMAGES_WALKING = [
		"../img/pepe/walk/W-21.png",
		"../img/pepe/walk/W-22.png",
		"../img/pepe/walk/W-23.png",
		"../img/pepe/walk/W-24.png",
		"../img/pepe/walk/W-25.png",
		"../img/pepe/walk/W-26.png",
	];
	IMAGES_JUMPING = [
		"../img/pepe/jump/J-31.png",
		"../img/pepe/jump/J-32.png",
		"../img/pepe/jump/J-33.png",
		"../img/pepe/jump/J-34.png",
		"../img/pepe/jump/J-35.png",
		"../img/pepe/jump/J-36.png",
		"../img/pepe/jump/J-37.png",
		"../img/pepe/jump/J-38.png",
		"../img/pepe/jump/J-39.png",
	];
	IMAGES_DEAD = [
		"../img/pepe/dead/D-51.png",
		"../img/pepe/dead/D-52.png",
		"../img/pepe/dead/D-53.png",
		"../img/pepe/dead/D-54.png",
		"../img/pepe/dead/D-55.png",
		"../img/pepe/dead/D-56.png",
	];
	IMAGES_HURT = [
		"../img/pepe/hurt/H-41.png",
		"../img/pepe/hurt/H-42.png",
		"../img/pepe/hurt/H-43.png",
	];
	IMAGES_WAIT = [
		"../img/pepe/wait/I-1.png",
		"../img/pepe/wait/I-2.png",
		"../img/pepe/wait/I-3.png",
		"../img/pepe/wait/I-4.png",
		"../img/pepe/wait/I-5.png",
		"../img/pepe/wait/I-6.png",
		"../img/pepe/wait/I-7.png",
		"../img/pepe/wait/I-8.png",
		"../img/pepe/wait/I-9.png",
		"../img/pepe/wait/I-10.png",
	];
	IMAGES_SLEEP = [
		"../img/pepe/sleep/I-11.png",
		"../img/pepe/sleep/I-12.png",
		"../img/pepe/sleep/I-13.png",
		"../img/pepe/sleep/I-14.png",
		"../img/pepe/sleep/I-15.png",
		"../img/pepe/sleep/I-16.png",
		"../img/pepe/sleep/I-17.png",
		"../img/pepe/sleep/I-18.png",
		"../img/pepe/sleep/I-19.png",
		"../img/pepe/sleep/I-20.png",
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
			this.world.camera_x = -this.x + 100;
		}, 1000 / 60);
	}

	characterPresentation() {
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
		}, 1000 / 10);
	}

	gameLost() {
		stopGame();
		clearInterval(this.characterMovement);
		document.getElementById("cover").classList.remove("d-none");
		document.getElementById("endframe").classList.remove("d-none");
		document.getElementById("startframe").classList.add("d-none");
		document.getElementById("coverimg").src = "../img/backgounds/you-lost.png";
	}
}
