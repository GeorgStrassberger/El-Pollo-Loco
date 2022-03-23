"use strict"
class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects) { //gleiche namens gebung um die lesbarkeit zu vereinfachen
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }

    /*  so würde es auch funktionieren
        constructor(a, b, c) {
            this.enemies = a;
            this.clouds = b;
            this.backgroundObjects = c;

        }
    */
}