"use strict"
class BackgroundObject extends MovableObject {
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // 480 - 480.
    };

    width = 720;
    height = 480;
}