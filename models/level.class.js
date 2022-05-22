"use strict"
class Level {
    constructor(enemies, clouds, backgroundObjects, coins, bottles) { //gleiche namens gebung um die lesbarkeit zu vereinfachen
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coin = coins;
        this.bottle = bottles;
    };

    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    coin;
    bottle;
};