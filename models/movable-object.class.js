class MovableObject extends Collision {
	invulnerableTime = 1;
	speed;
	speedY = 0;

	otherDirection = false;
	acceleration = 2.5; //Beschleunigung
	lastHit = 0;

	// Schwerkraft anwenden
	applyGravity() {
		setInterval(() => {
			if (this.isInAir() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
			}
		}, 1000 / 25);
	}

	/**
	 *
	 * @returns {boolean}
	 */
	isInAir() {
		if (this instanceof ThrowableObject) {
			//WENN es aus der klasse TO kommt soll es bis .. fallen
			return this.y < 375;
		} else {
			return this.y < 235;
		}
	}

	// Treffer mit (Schaden) wird abgezogen
	hit(dmg) {
		this.energy -= dmg;
		if (this.energy <= 0) {
			this.energy = 0;
		} else {
			this.lastHit = new Date().getTime();
		}
	}

	// ist Verletzt
	isHurt(invulnerableTime) {
		let timepassed = new Date().getTime() - this.lastHit;
		timepassed = timepassed / 1000;
		return timepassed < invulnerableTime;
	}

	// istTot
	isDead() {
		return this.energy <= 0;
	}

	//spielt Animation ab für Bewegungen ab
	playAnimation(images) {
		let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
		// i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ...;
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
	}

	/**
	 * bei jedem aufrufen der function wird der wert von Speed um (0,2px) an der X-Koordinate erhöht
	 */
	moveRight() {
		this.x += this.speed;
	}

	/**
	 * bei jedem aufrufen der function wird der wert von Speed (0,2px) an der X-Koordinate abgezogen
	 */
	moveLeft() {
		this.x -= this.speed;
	}

	/**
	 * set the speed for Y
	 */
	jump() {
		this.speedY = 30;
	}
}
