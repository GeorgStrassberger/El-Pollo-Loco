"use strict"

let level1;
let level2;

function initLevel1() {
    level1 = new Level(
        [
            new Chicken(700), //Die Start Koordinate X wird hier festgelegt
            new Chicken(1000),
            new Chicken(1300),
            new Chicken(1600),
            new Chicken(1900),
            new Chicken(2200),
            new Endboss(2500),
        ], [
            new Cloud(0),
            new Cloud(600),
            new Cloud(1200),
            new Cloud(1800),
            new Cloud(2200),
        ], [
            new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
            new BackgroundObject('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('../img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('../img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
        ], [
            new Coin(250, 250), // X, Y Koordinate 
            new Coin(450, 350),
            new Coin(450, 100),
            new Coin(650, 250),
            new Coin(1200, 100),
        ], [
            new Bottle(350, 350),
            new Bottle(550, 380),
            new Bottle(750, 360),
            new Bottle(950, 380),
            new Bottle(1250, 350),
            new Bottle(1450, 370),
            new Bottle(1650, 350),
            new Bottle(1850, 380),
        ]
    );
}