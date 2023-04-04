class Coin extends MovableObject {
	IMAGES_COIN = ["../img/coins/coin1.png", "../img/coins/coin1.png"];

	constructor(x, y) {
		super().loadImage("../img/coins/coin1.png");
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
