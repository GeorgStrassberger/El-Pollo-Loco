class Bottle extends DrawableObject {
	IMAGES_BOTTLES = ["../img/bottle/bottle1.png", "../img/bottle/bottle2.png"];
	constructor(x, y, j) {
		super().loadImage(this.IMAGES_BOTTLES[j]);
		this.x = x;
		this.y = y;
		this.height = 80;
		this.width = 80;
	}
}
