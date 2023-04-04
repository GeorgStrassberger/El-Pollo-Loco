class Level {
	enemies;
	endboss;
	clouds;
	backgroundObjects;
	level_end_x = 4850;
	coins;
	bottles;

	constructor(chickens, endboss, clouds, backgroundObjects, coins, bottles) {
		this.enemies = chickens;
		this.endboss = endboss;
		this.clouds = clouds;
		this.backgroundObjects = backgroundObjects;
		this.coins = coins;
		this.bottles = bottles;
	}
}
