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
		this.collisionQuery();
		this.throwQuery();
	}

	// Zeit zwischen dem Flaschen wurft
	throwQuery() {
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
	collisionQuery() {
		setInterval(() => {
			this.allCharacterCollisions();
			this.allBottleCollisions();
		}, 100);
	}

	// Kollisionen mit Gegnern
	allCharacterCollisions() {
		this.characterWithLittleChickens();
		this.characterWithChickens();
		this.characterWithEndboss();
		this.characterWithCollectables();
	}

	// Kollisionen mit Flaschen
	allBottleCollisions() {
		this.bottleWithLittleChickens();
		this.bottleWithChickens();
		this.bottleWithEndboss();
		this.bottleWithGround();
	}

	//Flasche trifft kleines hühnchen
	bottleWithLittleChickens() {
		const bottles = this.throwedBottle;
		const littleCickens = this.spawnChickens;

		bottles.forEach((bottle) => {
			littleCickens.forEach((littleCicken) => {
				if (
					bottle.isCollidingWith(littleCicken) &&
					!littleCicken.isDead() &&
					!bottle.bottle_hits
				) {
					bottle.bottle_hits = true;
					littleCicken.hit(20);
					chicken_hit.play();
					removeObjTimer(bottles, bottle, 200);
					if (littleCicken.isDead()) {
						removeObjTimer(littleCickens, littleCicken, 200);
					}
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
				if (
					bottle.isCollidingWith(chicken) &&
					!chicken.isDead() &&
					!bottle.bottle_hits
				) {
					bottle.bottle_hits = true;
					chicken.hit(20);
					chicken_hit.play();
					removeObjTimer(bottles, bottle, 200);
					if (chicken.isDead()) {
						removeObjTimer(chickens, chicken, 200);
					}
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
				if (
					bottle.isCollidingWith(boss) &&
					!bottle.bottle_hits &&
					!boss.isDead() &&
					!boss.isHurt(boss.invulnerableTime)
				) {
					bottle.bottle_hits = true;
					boss.hit(18);
					chicken_hit.play();
					this.spawnLittleChicken();
					removeObjTimer(bottles, bottle, 200);
					if (boss.isDead()) {
						removeObjTimer(endboss, boss, 1000);
					}
				}
			});
		});
	}

	// Falsche trifft nix
	bottleWithGround() {
		const bottles = this.throwedBottle;
		bottles.forEach((bottle) => {
			if (!bottle.isInAir() && !bottle.bottle_hits) {
				removeObjTimer(bottles, bottle, 200);
			}
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
					this.character.bounce();
				} else {
					this.character.hit(10);
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
					this.character.bounce();
				} else {
					this.character.hit(10);
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
	characterWithCollectables() {
		this.characterWithBottles();
		this.characterWithCoins();
	}

	//EINSAMMELN VON FLASCHEN
	characterWithBottles() {
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
	characterWithCoins() {
		const coins = this.level.coins;
		coins.forEach((coin) => {
			if (this.character.isCollidingWith(coin)) {
				coin_sound.play();
				removeObjTimer(coins, coin, 0);
				this.coin_bar.collectCoin();
				this.coin_bar.setCoinBar(this.coin_bar.collectedCoins);
			}
		});
	}

	// LET SPAWN A LITTLECHICKEN
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

		this.addObjectsToMap(this.level.coins);
		this.addObjectsToMap(this.level.bottles);

		this.ctx.translate(-this.camera_x, 0); // verschiebt das CTX wieder zurück, um den hintergrund zu begewegen

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
		// mo.drawFrame(this.ctx);
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
