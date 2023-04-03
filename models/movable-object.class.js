class MovableObject extends Collision {
	invulnerableTime = 1;
	speed;
	speedY = 0;

	otherDirection = false;
	acceleration = 2.5; //Beschleunigung
	lastHit = 0;

	/**
	 * when the object is in air and has a SpeedY,
	 * it subtracts SpeedY from Y,
	 * then the acceleration from SpeedY.
	 * Which increases the fall speed more and more.
	 */
	applyGravity() {
		setInterval(() => {
			if (this.isInAir() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
			}
		}, 1000 / 25);
	}

	/**
	 * returns whether the object is still in the air.
	 * When it is an instanceof ThrowableObject,
	 * the ground is at a different height.
	 * @returns {boolean}
	 */
	isInAir() {
		if (this instanceof ThrowableObject) {
			return this.y < 375;
		} else {
			return this.y < 235;
		}
	}

	/**
	 * hit subtracts the passed dmg from the energy.
	 * If the energy is not 0,
	 * the time of the last hit is saved.
	 * @param {number} dmg
	 */
	hit(dmg) {
		this.energy -= dmg;
		if (this.energy <= 0) {
			this.energy = 0;
		} else {
			this.lastHit = new Date().getTime();
		}
	}

	/**
	 * whether it can be hurt again or not
	 * @param {number} invulnerableTime
	 * @returns {boolean}
	 */
	isHurt(invulnerableTime) {
		let timepassed = new Date().getTime() - this.lastHit;
		timepassed = timepassed / 1000;
		return timepassed < invulnerableTime;
	}

	/**
	 * whether the energy is 0 or less
	 * @returns {boolean}
	 */
	isDead() {
		return this.energy <= 0;
	}

	/**
	 * change the image by overwriting the current path,
	 * while iterating through the array.
	 * @param {string[]} images
	 */
	playAnimation(images) {
		let i = this.currentImage % images.length;
		// let i = 0 % 6; => 0, Rest 0
		// let i = 1 % 6; => 0, Rest 1
		// let i = 2 % 6; => 0, Rest 2
		// let i = 3 % 6; => 0, Rest 3
		// let i = 4 % 6; => 0, Rest 4
		// let i = 5 % 6; => 0, Rest 5
		// let i = 6 % 6; => 1, Rest 0
		// let i = 7 % 6; => 1, Rest 0
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
	}

	/**
	 * object move right
	 * Add SPEED to X to change current position
	 */
	moveRight() {
		this.x += this.speed;
	}

	/**
	 * object move left
	 * Subtract SPEED from X to change current position
	 */
	moveLeft() {
		this.x -= this.speed;
	}

	/**
	 * object jump
	 * set SPEEDY to change current position
	 */
	jump() {
		this.speedY = 30;
	}
	/**
	 * object bounce
	 * set SPEEDY to change current position
	 */
	bounce() {
		this.speedY = 15;
	}
}
