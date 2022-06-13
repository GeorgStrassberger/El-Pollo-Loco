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
                if (bottle.isCollidingWith(chicken) && !bottle.bottle_hits) {
                    console.log('Flasche trifft Hünchen mit ', chicken.energy, 'HP');
                    chicken.hit(20); // wurf schadeneinfügen noch zuschnell abgefragt 
                    //chicken.is_Dead = true; // wqill ich nicht brauchen sollte über HIT() gehen
                    bottle.bottle_hits = true; // für den ANimations wechsel
                    console.log('Flasche trifft Hünchen mit ', chicken.energy, 'HP');
                }
                if (chicken.isDead()) {
                    console.log('hendl is dod');
                    setTimeout(() => this.level.enemies.splice(chicken, 1), 300); // entfernt mehrere hühnchen ???WHY???? 
                }
            });
        });
    };

    //Flasche trifft BOSS
    bottleWithEndboss() {
        this.throwableObjects.forEach(bottle => {
            this.level.endboss.forEach(boss => {
                if (bottle.isCollidingWith(boss) && !bottle.bottle_hits) {
                    boss.hit(15); //  zugefügter schaden 
                    bottle.bottle_hits = true;
                    console.log('Flasche hit Endboss und hat: ', boss.energy, 'HP');
                }
                if (boss.isDead()) {
                    console.log('Hi is a :', boss.energy, 'HP');
                    setTimeout(() => this.level.endboss.splice(boss, 1), 500);
                }
            });
        });
    }


    //CHARACTER MIT HÜHNCHEN
    characterWithChickens() {
        this.level.enemies.forEach((chicken) => {
            switch (true) {
                case (this.character.isCollidingFromTopWith(chicken)):
                    chicken.hit(30);
                    break;
                case (chicken.isDead()):
                    setTimeout(() => this.level.enemies.splice(chicken, 1), 300);
                    break;
                case (this.character.isCollidingWith(chicken) && !this.character.isAboveGround() && !chicken.isDead()):
                    this.character.hit(5); // wird noch zu schnell abgefragt!""
                    console.log('Pepe: ', this.character.energy, 'HP');
                    this.life_bar.setLifeBar(this.character.energy);
                    break;
            };
        });
    };

    //CHARACTER MIT ENDBOSS
    characterWithEndboss() {
        this.level.endboss.forEach((bossenemy) => {
            if (this.character.isCollidingWith(bossenemy) && !this.character.isAboveGround()) {
                this.character.hit(10); // wird noch zuschnell abgefragt 
                console.log('Kollision mit Endboss Pepe hat noch: ', this.character.energy, 'HP');
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



    draw() { // es wird der reihe nach gezeichnet. -> 0)leer zeichnen 1) background 2) cloud 3) enemy 4) character.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the Canvas from x,y ,x+breit, y+höhe (koordienaten = leihnwand größe)

        this.ctx.translate(this.camera_x, 0); // verschiebt das CTX nach links.
        this.addObjectsToMap(this.level.backgroundObjects); // draw the backgroundObjects
        this.ctx.translate(-this.camera_x, 0); // Back

        // ----Spoace for FIXED Objects ------
        this.addToMap(this.life_bar);
        this.addToMap(this.coin_bar);
        this.addToMap(this.bottle_bar);

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
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };
};