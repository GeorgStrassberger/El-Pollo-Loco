class DrawableObject {
	img;
	imageCache = {};
	currentImage = 0;
	x;
	y;
	height;
	width;

	draw(ctx) {
		//Context Zeichne Bild (Bild, Start X, StartY, Breite, Höhe)
		try {
			ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		} catch (error) {
			console.warn("Draw Error: ", error);
			console.warn("imagePath: ", this.img.src);
		}
	}

	/**
	 * to Load single Image
	 * Create a instanz of a image and add the sourcepath
	 * @param {string} path
	 */
	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**#
	 * to lade all Images
	 * Create a instanz for each image and add the sourcepath
	 * @param {Array} arr
	 */
	loadImages(arr) {
		arr.forEach((path) => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}

	/**
	 * Diplays border from the images to view the Hitbox for better collision handling
	 * @param {object} ctx Canvas Object
	 */
	drawFrame(ctx) {
		if (this instanceof Character || this instanceof Chicken) {
			ctx.beginPath();
			ctx.lineWidth = "1";
			ctx.strokeStyle = "blue";
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.stroke();
		}
	}
}
