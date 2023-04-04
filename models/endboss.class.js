class Endboss extends MovableObject {
	IMAGES_WALKING_BOSS = [
		"../img/enemies/rooster/boss_walk/G1.png",
		"../img/enemies/rooster/boss_walk/G2.png",
		"../img/enemies/rooster/boss_walk/G3.png",
		"../img/enemies/rooster/boss_walk/G4.png",
	];
	IMAGES_ALERT_BOSS = [
		"../img/enemies/rooster/boss_alert/G5.png",
		"../img/enemies/rooster/boss_alert/G6.png",
		"../img/enemies/rooster/boss_alert/G7.png",
		"../img/enemies/rooster/boss_alert/G8.png",
		"../img/enemies/rooster/boss_alert/G9.png",
		"../img/enemies/rooster/boss_alert/G10.png",
		"../img/enemies/rooster/boss_alert/G11.png",
		"../img/enemies/rooster/boss_alert/G12.png",
	];
	IMAGES_ATTECKING_BOSS = [
		"../img/enemies/rooster/boss_attack/G13.png",
		"../img/enemies/rooster/boss_attack/G14.png",
		"../img/enemies/rooster/boss_attack/G15.png",
		"../img/enemies/rooster/boss_attack/G16.png",
		"../img/enemies/rooster/boss_attack/G17.png",
		"../img/enemies/rooster/boss_attack/G18.png",
		"../img/enemies/rooster/boss_attack/G19.png",
		"../img/enemies/rooster/boss_attack/G20.png",
	];
	IMAGES_HURT_BOSS = [
		"../img/enemies/rooster/boss_hurt/G21.png",
		"../img/enemies/rooster/boss_hurt/G22.png",
		"../img/enemies/rooster/boss_hurt/G23.png",
	];
	IMAGES_DEAD_BOSS = [
		"../img/enemies/rooster/boss_dead/G24.png",
		"../img/enemies/rooster/boss_dead/G25.png",
		"../img/enemies/rooster/boss_dead/G26.png",
	];

	x;
	y = 45;
	height = 400;
	width = 250;
	energy = 100;
	speed = 15;
	x_movement_speed = 2;
	lastHit = 0;
	invulnerableTime = 1.0;
	isMovingLeft = false;
	isMovingRight = false;

	constructor(x) {
		super().loadImage(this.IMAGES_ALERT_BOSS[0]);
		this.loadImages(this.IMAGES_ALERT_BOSS);
		this.loadImages(this.IMAGES_WALKING_BOSS);
		this.loadImages(this.IMAGES_ATTECKING_BOSS);
		this.loadImages(this.IMAGES_HURT_BOSS);
		this.loadImages(this.IMAGES_DEAD_BOSS);
		this.animate();
		this.x = x;
	}

	animate() {
		this.endbossAnimation = setInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD_BOSS);
				setTimeout(() => {
					this.gameOver();
				}, 1500);
			} else if (this.energy === 100) {
				this.playAnimation(this.IMAGES_ALERT_BOSS);
			} else if (this.isHurt(this.invulnerableTime)) {
				this.isMovingLeft = true;
				this.playAnimation(this.IMAGES_HURT_BOSS);
			} else if (
				this.energy < 100 &&
				!this.isDead() &&
				!this.isHurt(this.invulnerableTime)
			) {
				this.attacking();
			}
		}, 1000 / 5);
	}

	moveEndboss() {
		if (this.isMovingLeft) {
			this.moveLeft();
		}
		if (this.isMovingRight) {
			this.moveRight();
		}
	}

	attacking() {
		this.moveEndboss();
		this.playAnimation(this.IMAGES_ATTECKING_BOSS);
		setTimeout(() => {
			this.isMovingLeft = false;
			this.isMovingRight = true;
			setTimeout(() => {
				this.isMovingRight = false;
				this.isMovingLeft = false;
			}, 1500);
		}, 2000);
	}

	gameOver() {
		stopGame();

		clearInterval(this.endbossAnimation);
		win_sound.play();
		document.getElementById("cover").classList.remove("d-none"); // blende start bild aus
		document.getElementById("endframe").classList.remove("d-none");
		document.getElementById("startframe").classList.add("d-none");
		document.getElementById("coverimg").src = "../img/backgounds/gameover.png";
	}
}
