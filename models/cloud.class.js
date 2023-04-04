class Cloud extends MovableObject {
	IMAGES_CLOUDS = [
		"../img/backgounds/clouds/cloud1.png",
		"../img/backgounds/clouds/cloud2.png",
	];

	constructor(x) {
		super().loadImage(this.IMAGES_CLOUDS[0]);
		this.loadImages(this.IMAGES_CLOUDS);
		this.x = x;
		this.y = 20;
		this.height = 250;
		this.width = 500;
		this.speed = 0.2;
		this.animate();
	}

	animate() {
		setInterval(() => {
			super.moveLeft();
		}, 1000 / 60);
	}
}
