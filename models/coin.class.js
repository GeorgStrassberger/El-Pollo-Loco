class Coin extends MovableObject {
	IMAGES_COIN = ["../img/8.Coin/Moneda1.png", "../img/8.Coin/Moneda2.png"];

	constructor(x, y) {
		super().loadImage("../img/8.Coin/Moneda1.png");
		this.loadImages(this.IMAGES_COIN);
		this.animate();
		this.x = x;
		this.y = y;
		this.height = 100;
		this.width = 100;
	}

	animate() {
		setInterval(() => {
			super.playAnimation(this.IMAGES_COIN);
		}, 400);
	}
}
