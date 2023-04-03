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
	 * Create a instanz of a image and add the source path
	 * fn playAnimation() set the path
	 * @param {string} path
	 */
	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**
	 * 1) Create a instanz for each image and add the source path
	 * 2) Store the newImage with path of a class instanz in an Object
	 * 3) and store it in imageChache as Object
	 * example {'../img/pepe.3.png': img}
	 * @param {string[]} arr
	 */
	loadImages(arr) {
		arr.forEach((path) => {
			this.loadImage(path);
			// let img = new Image();
			// img.src = path;
			this.imageCache[path] = this.img;
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
