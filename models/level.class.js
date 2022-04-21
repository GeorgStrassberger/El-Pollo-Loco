"use strict"
class Level {
    constructor(enemies, clouds, backgroundObjects, coins, bottle) { //gleiche namens gebung um die lesbarkeit zu vereinfachen
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    };

    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    coins;
    bottles;

    //bottles; + in den Constructor übergeben
    /*  so würde es auch funktionieren
        constructor(a, b, c) {
            this.enemies = a;
            this.clouds = b;
            this.backgroundObjects = c;

        }
    */
};