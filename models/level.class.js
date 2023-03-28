class Level {
    constructor(chickens, endboss, clouds, backgroundObjects, coins, bottles) { //gleiche namens gebung um die lesbarkeit zu vereinfachen
        this.enemies = chickens;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coin = coins;
        this.bottles = bottles;
    };

    enemies;
    endboss;
    clouds;
    backgroundObjects;
    level_end_x = 4850;
    coin;
    bottles;
};