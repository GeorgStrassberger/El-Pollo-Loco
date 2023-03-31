class World {
	canvas; // canvas.getContext ## Leihnwand zusammenhang
	ctx;
	keyboard;
	camera_x = 0;
	character = new Character(this);
	level;
	life_bar = new LifeBar();
	coin_bar = new CoinBar();
	bottle_bar = new BottleBar();
	collecdtedBottles = 0;
	spawnChickens = [];
	throwedBottle = [];

	constructor(canvas, keyboard, level) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.level = level;
		this.draw();
		this.timeToCheckCollisions();
		this.timeBetweenToThrowObjects();
	}

	// Zeit zwischen dem Flaschen wurft
	timeBetweenToThrowObjects() {
		setInterval(() => {
			this.throwObjects();
		}, 100);
	}

	// Flasche werfen wenn eine gesammelt wurde
	throwObjects() {
		if (this.keyboard.SPACE && this.collecdtedBottles > 0) {
			throw_sound.play();

			this.throwedBottle.push(
				new ThrowableObject(this.character.x + 30, this.character.y + 40)
			);

			this.collecdtedBottles--;
			this.bottle_bar.setBottleBar(this.collecdtedBottles);
		}
	}

	// Zeit fürs abfragen der Kollisionen
	timeToCheckCollisions() {
		setInterval(() => {
			this.checkCollisionsWithEnemies();
			this.collisionWithObjects();
		}, 100);
	}

	// Kollisionen mit Gegnern
	checkCollisionsWithEnemies() {
		this.bottleWithLittleChickens();
		this.bottleWithChickens();
		this.bottleWithEndboss();
		this.characterWithLittleChickens();
		this.characterWithChickens();
		this.characterWithEndboss();
	}

	//Flasche trifft kleines hühnchen
	bottleWithLittleChickens() {
		const bottles = this.throwedBottle;
		const littleCickens = this.spawnChickens;
		bottles.forEach((bottle) => {
			littleCickens.forEach((littleCicken) => {
				if (bottle.isCollidingWith(littleCicken)) {
					bottle.bottle_hits = true;
					littleCicken.hit(20);
					chicken_hit.play();
					removeObjTimer(bottles, bottle, 200);
				}
				if (littleCicken.isDead()) {
					removeObjTimer(littleCickens, littleCicken, 200);
				}
			});
		});
	}

	//Flasche trifft hühnchen
	bottleWithChickens() {
		const chickens = this.level.enemies;
		const bottles = this.throwedBottle;
		bottles.forEach((bottle) => {
			chickens.forEach((chicken) => {
				if (bottle.isCollidingWith(chicken)) {
					bottle.bottle_hits = true;
					chicken.hit(20);
					chicken_hit.play();
					removeObjTimer(bottles, bottle, 200);
				}
				if (chicken.isDead()) {
					removeObjTimer(chickens, chicken, 200);
				}
			});
		});
	}

	//Flasche trifft Endboss
	bottleWithEndboss() {
		const bottles = this.throwedBottle;
		const endboss = this.level.endboss;
		bottles.forEach((bottle) => {
			endboss.forEach((boss) => {
				if (!bottle.isInAir() && !bottle.bottle_hits && !boss.isDead()) {
					removeObjTimer(bottles, bottle, 200);
				} else if (
					!boss.isDead() &&
					boss.isCollidingWith(bottle) &&
					!bottle.bottle_hits &&
					!boss.isHurt(boss.invulnerableTime)
				) {
					bottle.bottle_hits = true;
					boss.hit(18);
					chicken_hit.play();
					this.spawnLittleChicken();
					removeObjTimer(bottles, bottle, 200);
				} else if (boss.isDead()) {
					removeObjTimer(endboss, boss, 1000);
				}
			});
		});
	}

	//CHARACTER MIT KLEINEN HÜHNCHEN
	characterWithLittleChickens() {
		const littleCickens = this.spawnChickens;
		littleCickens.forEach((littlechicken) => {
			if (
				!littlechicken.isDead() &&
				!this.character.isDead() &&
				!this.character.isHurt() &&
				this.character.isCollidingWith(littlechicken)
			) {
				if (this.character.isCollidingFromTopWith(littlechicken)) {
					littlechicken.hit(15);
					chicken_hit.play();
					removeObjTimer(littleCickens, littlechicken, 200);
				} else {
					this.character.hit(5);
					this.life_bar.setLifeBar(this.character.energy);
				}
			}
		});
	}

	//CHARACTER MIT HÜHNCHEN
	characterWithChickens() {
		const chickens = this.level.enemies;
		chickens.forEach((chicken) => {
			if (
				!chicken.isDead() &&
				!this.character.isDead() &&
				!this.character.isHurt(this.character.invulnerableTime) &&
				this.character.isCollidingWith(chicken)
			) {
				if (this.character.isCollidingFromTopWith(chicken)) {
					chicken.hit(30);
					chicken_hit.play();
					removeObjTimer(chickens, chicken, 200);
				} else {
					this.character.hit(5);
					this.life_bar.setLifeBar(this.character.energy);
				}
			}
		});
	}

	//CHARACTER MIT ENDBOSS
	characterWithEndboss() {
		this.level.endboss.forEach((boss) => {
			if (
				this.character.isCollidingWith(boss) &&
				!this.character.isInAir() &&
				!this.character.isHurt(this.character.invulnerableTime)
			) {
				this.character.hit(10);
				boss.hit(5);
				this.life_bar.setLifeBar(this.character.energy);
			}
		});
	}

	//EINSAMMELN VON OBJEKTEN
	collisionWithObjects() {
		this.collisionsWithBottles();
		this.collisionsWithCoins();
	}

	//EINSAMMELN VON FLASCHEN
	collisionsWithBottles() {
		const bottles = this.level.bottles;
		bottles.forEach((bottle) => {
			if (
				this.character.isCollidingWith(bottle) &&
				this.collecdtedBottles < 5
			) {
				bottle_sound.play();
				this.collecdtedBottles++;
				removeObjTimer(bottles, bottle, 0);
				this.bottle_bar.setBottleBar(this.collecdtedBottles);
			}
		});
	}

	//EINSAMMELN VON MÜNZEN
	collisionsWithCoins() {
		const coins = this.level.coin;
		coins.forEach((coin) => {
			if (this.character.isCollidingWith(coin)) {
				coin_sound.play();
				removeObjTimer(coins, coin, 0);
				this.coin_bar.collectCoin();
				this.coin_bar.setCoinBar(this.coin_bar.collectedCoins);
			}
		});
	}

	// LET SPAWN LITTLECHICKEN
	spawnLittleChicken() {
		const boss = this.level.endboss[0];
		const littleCicken = new LittleChicken(boss.x + 100, boss.y + 330);
		this.spawnChickens.push(littleCicken);
	}

	//Zeichne
	draw() {
		// es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas from x,y ,x+breit, y+höhe (koordienaten = leihnwand größe)

		this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links.
		this.addObjectsToMap(this.level.backgroundObjects); // draw the backgroundObjects
		this.ctx.translate(-this.camera_x, 0); // Back
		this.addObjectsToMap(this.level.clouds);
		// ----Space for FIXED Objects ------
		this.addToMap(this.life_bar);
		this.addToMap(this.coin_bar);
		this.addToMap(this.bottle_bar);
		// -----------------------------------

		this.ctx.translate(this.camera_x, 0);
		this.addToMap(this.character);

		this.addObjectsToMap(this.level.enemies);
		this.addObjectsToMap(this.level.endboss);
		this.addObjectsToMap(this.throwedBottle);
		this.addObjectsToMap(this.spawnChickens);

		this.addObjectsToMap(this.level.coin);
		this.addObjectsToMap(this.level.bottles);

		this.ctx.translate(-this.camera_x, 0); // verschiebt das CTX wieder zurück, um den hintergrund zu begewegen

		// let self = this; //requestAnimationFrame kennt die this methode nicht und wird deshalb in eine Variable gepackt.
		requestAnimationFrame(() => {
			this.draw();
		});
	}

	//Füge Objekt hinzu
	addObjectsToMap(objects) {
		if (objects) {
			objects.forEach((o) => {
				this.addToMap(o);
			});
		}
	}

	addToMap(mo) {
		// MO = Movable Objects
		if (mo.otherDirection) {
			this.flipImage(mo);
		}
		mo.draw(this.ctx);
		mo.drawFrame(this.ctx);
		if (mo.otherDirection) {
			this.flipImageBack(mo);
		}
	}
	// Spielgel das Bild um 180°
	flipImage(mo) {
		this.ctx.save();
		this.ctx.translate(mo.width, 0);
		this.ctx.scale(-1, 1);
		mo.x = mo.x * -1;
	}
	//Spiegel das Bild zurück auf 0°
	flipImageBack(mo) {
		mo.x = mo.x * -1;
		this.ctx.restore();
	}
}
