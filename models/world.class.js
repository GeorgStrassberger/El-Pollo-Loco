class World {

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.timeToCheckCollisions();
        this.timeBetweenToThrowObjects();
    };

    canvas; // canvas.getContext ## Leihnwand zusammenhang
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    life_bar = new LifeBar();
    coin_bar = new CoinBar();
    bottle_bar = new BottleBar();
    throwableObjects = []; // bei kolisieon wird das Array gefüllt
    amountOfBottlesToThrow = 0; // hilfszähler 
    throw_sound = new Audio('../audio/throw.mp3');
    coin_sound = new Audio('../audio/coin.wav');
    bottle_sound = new Audio('../audio/bottle.mp3');
    throw_sound = new Audio('../audio/throw.mp3');
    chicken_hit = new Audio('../audio/chicken_hit.mp3');
    bottle_hits = false;
    // Verbindung zwischen World und Character .class
    // Übergibt THIS als Objetct in WORLD
    setWorld() {
        this.character.world = this;
    };

    //Spiel wird neu geladen
    restartGame() {
        location.reload();
    };

    // Zeit zwischen dem Flaschen wurft 
    timeBetweenToThrowObjects() {
        setInterval(() => {
            this.throwObjects();
        }, 100);
    };

    // Flasche werfen wenn eine gesammelt wurde
    throwObjects() {
        if (this.keyboard.SPACE && this.amountOfBottlesToThrow > 0) {
            this.throw_sound.play(); //Sound für Werfen abspielen
            let bottle = new ThrowableObject(this.character.x + 30, this.character.y + 40) // erstelle neues FlasschenObject an der Koordinate x Y // this.character.y + 140 mit OriginalBild
            this.throwableObjects.push(bottle); // pushed bottle (throwableObject) in den array throwabloObjects[];
            this.amountOfBottlesToThrow -= 1; //verringere hilfszähler
            this.bottle_bar.collectedBottles -= 1; // //verringere zähler
            setTimeout(() => this.throwableObjects.splice(0, 1), 1000); // entferne im array an der stelle 0 um 1 
            this.bottle_bar.setBottleBar(); // flaschenAnzeige neu aufrufen zu aktuallisieren
        };
    };

    // Zeit fürs abfragen der Kollisionen
    timeToCheckCollisions() {
        setInterval(() => {
            this.checkCollisionsWithEnemies();
            this.collisionWithObjects();
        }, 100);
    };

    // Kollisionen mit Gegnern
    checkCollisionsWithEnemies() {
        this.bottleWithChickens();
        this.bottleWithEndboss();
        this.characterWithChickens();
        this.characterWithEndboss();
    };

    //Flasche trifft hühnchen
    bottleWithChickens() {
        this.throwableObjects.forEach(bottle => {
            this.level.enemies.forEach(chicken => {
                if (bottle.isCollidingWith(chicken)) {
                    chicken.hit(20);
                    bottle.bottle_hits = true;
                    setTimeout(() => {
                        let index = this.level.enemies.indexOf(chicken);
                        this.level.enemies.splice(index, 1)
                    }, 500);
                };
            });
        });
    };

    //Flasche trifft BOSS
    bottleWithEndboss() {
        this.throwableObjects.forEach(bottle => {
            this.level.endboss.forEach(boss => {
                if (bottle.isCollidingWith(boss) && !boss.isHurt()) {
                    if (boss.isDead()) {
                        this.chicken_hit.pause();
                        setTimeout(() => {
                            this.level.endboss.splice(0, 1);
                        }, 1000);
                    } else {
                        boss.hit(18);
                        //Ton abspielen
                        this.chicken_hit.play();
                        console.log('Flasche trifft Endboss: ', boss.energy, 'HP');
                    };
                };
            });
        });
    };

    //CHARACTER MIT HÜHNCHEN
    characterWithChickens() {
        this.level.enemies.forEach((chicken) => {
            if (!chicken.isDead() && !this.character.isDead() && !this.character.isHurt() && this.character.isCollidingWith(chicken)) {
                if (this.character.isCollidingFromTopWith(chicken)) {
                    chicken.hit(30);
                    setTimeout(() => {
                        let index = this.level.enemies.indexOf(chicken);
                        this.level.enemies.splice(index, 1)
                    }, 500);
                } else {
                    this.character.hit(5);
                    console.log('Pepe hat noch: ', this.character.energy, 'HP übrig');
                    this.life_bar.setLifeBar(this.character.energy);
                };
            };
        });
    };

    //CHARACTER MIT ENDBOSS
    characterWithEndboss() {
        this.level.endboss.forEach((bossenemy) => {
            if (this.character.isCollidingWith(bossenemy) && !this.character.isAboveGround() && !this.character.isHurt()) {
                this.character.hit(10); // wird noch zuschnell abgefragt 
                console.log('Kollision mit Endboss Pepe hat noch: ', this.character.energy, 'HP übrig');
                this.life_bar.setLifeBar(this.character.energy);
            };
        });
    };

    //EINSAMMELN VON OBJEKTEN
    collisionWithObjects() {
        this.collisionsWithBottles();
        this.collisionsWithCoins();
    };

    //EINSAMMELN VON FLASCHEN
    collisionsWithBottles() {
        this.level.bottle.forEach((bottles, index) => { // checkt alle 0,1sek alle flaschen im level
            if (this.character.isCollidingWith(bottles) && this.amountOfBottlesToThrow < 5) { // wenn eine collision zwischen char und flasche eintritt UND weniger als 5 flschen gesammelt wurden
                this.bottle_sound.play();
                this.level.bottle.splice(index, 1); // entferne die flasche aus dem level
                this.bottle_bar.collectBottle(); // führe sammelFlasche aus und erhöhe um 1
                this.bottle_bar.setBottleBar(); // aktuallisiere flaschenBar mit dem wert von collectedBottles.
                this.amountOfBottlesToThrow += 1; // erhöhe meine hilfsvariable um 1.
            };
        });
    };
    //EINSAMMELN VON MÜNZEN
    collisionsWithCoins() {
        this.level.coin.forEach((coins, index) => {
            if (this.character.isCollidingWith(coins)) {
                this.coin_sound.play();
                this.level.coin.splice(index, 1);
                this.coin_bar.collectCoin();
                this.coin_bar.setCoinBar(this.coin_bar.collectedCoins);
            };
        });
    };

    //Zeichne
    draw() { // es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas from x,y ,x+breit, y+höhe (koordienaten = leihnwand größe)

        this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links.
        this.addObjectsToMap(this.level.backgroundObjects); // draw the backgroundObjects
        this.ctx.translate(-this.camera_x, 0); // Back

        // ----Space for FIXED Objects ------
        this.addToMap(this.life_bar);
        this.addToMap(this.coin_bar);
        this.addToMap(this.bottle_bar);
        // -----------------------------------

        this.ctx.translate(this.camera_x, 0); // Forwards
        this.addToMap(this.character); // draw the Character        
        this.addObjectsToMap(this.level.clouds); // draw the clouds
        this.addObjectsToMap(this.level.enemies); // draw the chicken enemies
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects); // draw the throwableObjects (Bottle'S)

        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottle);

        this.ctx.translate(-this.camera_x, 0); // verschiebt das CTX wieder zurück, um den hintergrund zu begewegen

        // Draw wird immer wieder aufgerufen so oft wie die Garfikkarte kann -> fps
        let self = this; //requestAnimationFrame kennt die this methode nicht und wird deshalb in eine Variable gepackt.
        requestAnimationFrame(function() {
            self.draw();
        });
    };

    //Füge Objekt hinzu
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    };


    addToMap(mo) { // MO = Movable Objects
        if (mo.otherDirection) {
            this.flipImage(mo);
        };
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        };
    };
    // Spielgel das Bild um 180°
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };
    //Spiegel das Bild zurück auf 0°
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };
};