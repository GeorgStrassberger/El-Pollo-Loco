class CoinBar extends DrawableObject {
	IMAGES = [
		"../img/statusbars/coinbars/green/0_.png",
		"../img/statusbars/coinbars/green/20_.png",
		"../img/statusbars/coinbars/green/40_.png",
		"../img/statusbars/coinbars/green/60_.png",
		"../img/statusbars/coinbars/green/80_.png",
		"../img/statusbars/coinbars/green/100_.png",
	];
	collectedCoins = 0;

	constructor() {
		super();
		this.loadImages(this.IMAGES);
		this.x = 40; //Start Punkt in X zum einfügen des Bildes
		this.y = 50; //Start Punkt in Y zum einfügen des Bildes
		this.height = 60; // Bild höhe
		this.width = 200; //Bild breite
		this.setCoinBar(0); // Übergibt den start wert 0
	}

	collectCoin() {
		this.collectedCoins += 1;
		if (this.collectedCoins > 5) {
			this.collectedCoins = 5;
		}
	}
	setCoinBar() {
		let path = this.IMAGES[this.resolveImageIndex()];
		this.img = this.imageCache[path];
	}

	resolveImageIndex() {
		if (this.collectedCoins == 0) {
			return 0;
		} else if (this.collectedCoins == 1) {
			return 1;
		} else if (this.collectedCoins == 2) {
			return 2;
		} else if (this.collectedCoins == 3) {
			return 3;
		} else if (this.collectedCoins == 4) {
			return 4;
		} else if (this.collectedCoins == 5) {
			return 5;
		}
	}
}
