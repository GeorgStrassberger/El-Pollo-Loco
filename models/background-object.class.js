class BackgroundObject extends MovableObject {
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
        this.height = 480; // Canvas Höhe
        this.width = 720; // Canvas Breite
    };
}