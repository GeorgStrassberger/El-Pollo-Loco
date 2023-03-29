class Endboss extends MovableObject {
	IMAGES_WALKING_BOSS = [
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png",
	];
	IMAGES_ALERT_BOSS = [
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png",
	];
	IMAGES_ATTECKING_BOSS = [
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png",
	];
	IMAGES_HURT_BOSS = [
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png",
	];
	IMAGES_DEAD_BOSS = [
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png",
		"../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png#",
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
		document.getElementById(
			"coverimg"
		).src = `../img/9.IntroOutroImage/GameOverScreen/3.Game over.png`;
	}
}
