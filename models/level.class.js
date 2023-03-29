class Level {
	enemies;
	endboss;
	clouds;
	backgroundObjects;
	level_end_x = 4850;
	coin;
	bottles;

	constructor(chickens, endboss, clouds, backgroundObjects, coins, bottles) {
		this.enemies = chickens;
		this.endboss = endboss;
		this.clouds = clouds;
		this.backgroundObjects = backgroundObjects;
		this.coin = coins;
		this.bottles = bottles;
	}
}
