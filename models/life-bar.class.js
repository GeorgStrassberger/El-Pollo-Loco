class LifeBar extends DrawableObject {
	IMAGES_LIFE = [
		"../img/7.Marcadores/Barra/Marcador vida/azul/0_.png",
		"../img/7.Marcadores/Barra/Marcador vida/azul/20_.png",
		"../img/7.Marcadores/Barra/Marcador vida/azul/40_.png",
		"../img/7.Marcadores/Barra/Marcador vida/azul/60_.png",
		"../img/7.Marcadores/Barra/Marcador vida/azul/80_.png",
		"../img/7.Marcadores/Barra/Marcador vida/azul/100_.png",
	];
	percentageHealthPoints = 100;

	constructor() {
		super();
		this.loadImages(this.IMAGES_LIFE);
		this.setLifeBar(100);
		this.x = 40;
		this.y = 0;
		this.width = 200;
		this.height = 60;
	}

	/**
	 * Update Lifebar image by changing the sourcepath
	 * with resolving the index
	 * @param {number} percentageHealthPoints
	 */
	setLifeBar(percentageHealthPoints) {
		this.percentageHealthPoints = percentageHealthPoints;
		let path = this.IMAGES_LIFE[this.resolveImageIndex()];
		this.img = this.imageCache[path];
	}

	/**
	 * to divided into 5 equal parts
	 * returns the number of the current part
	 * @returns {number}
	 */
	resolveImageIndex() {
		if (this.percentageHealthPoints >= 100) {
			return 5;
		} else if (this.percentageHealthPoints >= 80) {
			return 4;
		} else if (this.percentageHealthPoints >= 60) {
			return 3;
		} else if (this.percentageHealthPoints >= 40) {
			return 2;
		} else if (this.percentageHealthPoints >= 20) {
			return 1;
		} else {
			return 0;
		}
	}
}
