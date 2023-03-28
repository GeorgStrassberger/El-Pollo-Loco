class Collision extends DrawableObject {
	//istKollidiertMit (MovableObject)
	isCollidingWith(mo) {
		// mo *aka* movableObject
		return (
			this.x + this.width > mo.x && // true sobald sich 1 MO links vom Character befindet;
			this.x < mo.x + mo.width && // true solange sich rechts vom Character noch 1 MO befindet;
			this.y + this.height > mo.y && // true sobald die füße vom Character unterhalb vom kopf des MO sind
			this.y < mo.y + mo.height
		); // true solange der Kopf vom Character über den Füßen vom MO ist  in dem fall nur für die COINS wichtig
	}

	//istKollidiertVonObenMit (MovableObject)
	isCollidingFromTopWith(mo) {
		return (
			this.y + this.height > mo.y &&
			this.y + this.height < mo.y + mo.height &&
			this.x + this.width > mo.x &&
			this.x + this.width < mo.x + mo.width + 50
		);
	}
}
