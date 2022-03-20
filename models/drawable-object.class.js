class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    draw(ctx) {
        //Contect Zeichne Build (BIld, Start X, StartY, Breite, Höhe)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImage(path) { // loadImage('img/test.png')
        this.img = new Image(); // this.img = document.getElementById('Image') <img id="image">
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr -['img/image1.png', 'img/image3.png', ...] 
     */
    loadImages(arr) { // läd alle Bilder in das JSON rein.
        arr.forEach((path) => { // forEach -> fürJeden, durch das JSON durch Iterieren.
            let img = new Image();
            img.src = path;
            img.style = 'transform: scalex(-1)';
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) { // Rand wird nur noch auf die beiden Objecte CHARATER & CHICKEN angewannt
            // Blue rectangle
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


}