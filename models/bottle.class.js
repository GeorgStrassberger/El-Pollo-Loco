class Bottle extends DrawableObject {
	IMAGES_BOTTLES = [
		"../img/6.botella/2.Botella_enterrada1.png",
		"../img/6.botella/2.Botella_enterrada2.png",
	];
	constructor(x, y, j) {
		super().loadImage(this.IMAGES_BOTTLES[j]);
		this.x = x;
		this.y = y;
		this.height = 80;
		this.width = 80;
	}
}
