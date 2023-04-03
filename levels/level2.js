function levelTwo() {
	const level2 = new Level(
		[
			new LittleChicken(1000, 375),
			new Chicken(1700),
			new LittleChicken(2000, 375),
			new Chicken(2000),
			new Chicken(2300),
			new LittleChicken(2500, 375),
			new Chicken(2600),
			new Chicken(2900),
			new Chicken(3200),
			new Chicken(3600),
			new LittleChicken(3700, 375),
			new Chicken(3800),
			new Chicken(4100),
			new Chicken(4350),
			new Chicken(4600),
		],
		[new Endboss(4000)],
		[
			new Cloud(0),
			new Cloud(600),
			new Cloud(1200),
			new Cloud(1800),
			new Cloud(2200),
		],
		[
			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				-719
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/2.png", -719),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/2.png", -719),
			new BackgroundObject("../img/5.Fondo/Capas/1.suelo-fondo1/2.png", -719),

			new BackgroundObject("../img/5.Fondo/Capas/5.cielo_1920-1080px.png", 0),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/1.png", 0),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/1.png", 0),
			new BackgroundObject("../img/5.Fondo/Capas/1.suelo-fondo1/1.png", 0),
			new BackgroundObject("../img/5.Fondo/Capas/5.cielo_1920-1080px.png", 719),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/2.png", 719),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/2.png", 719),
			new BackgroundObject("../img/5.Fondo/Capas/1.suelo-fondo1/2.png", 719),

			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 2
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/1.png", 719 * 2),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/1.png", 719 * 2),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/1.png",
				719 * 2
			),
			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 3
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/2.png", 719 * 3),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/2.png", 719 * 3),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/2.png",
				719 * 3
			),

			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 4
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/1.png", 719 * 4),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/1.png", 719 * 4),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/1.png",
				719 * 4
			),
			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 5
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/2.png", 719 * 5),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/2.png", 719 * 5),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/2.png",
				719 * 5
			),

			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 6
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/1.png", 719 * 6),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/1.png", 719 * 6),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/1.png",
				719 * 6
			),
			new BackgroundObject(
				"../img/5.Fondo/Capas/5.cielo_1920-1080px.png",
				719 * 7
			),
			new BackgroundObject("../img/5.Fondo/Capas/3.Fondo3/2.png", 719 * 7),
			new BackgroundObject("../img/5.Fondo/Capas/2.Fondo2/2.png", 719 * 7),
			new BackgroundObject(
				"../img/5.Fondo/Capas/1.suelo-fondo1/2.png",
				719 * 7
			),
		],
		[
			new Coin(250, 250),
			new Coin(450, 250),
			new Coin(650, 250),
			new Coin(850, 250),
			new Coin(1050, 300),
		],
		[
			new Bottle(350, 350, 0),
			new Bottle(550, 380, 1),
			new Bottle(750, 360, 0),
			new Bottle(950, 380, 1),
			new Bottle(1250, 350, 0),
			new Bottle(1450, 370, 1),
			new Bottle(1650, 350, 0),
			new Bottle(1850, 380, 1),
			new Bottle(2050, 350, 1),
			new Bottle(2250, 370, 0),
			new Bottle(2450, 380, 0),
			new Bottle(2650, 350, 1),
			new Bottle(2850, 360, 0),
			new Bottle(3050, 360, 1),
			new Bottle(3350, 380, 1),
			new Bottle(3650, 350, 0),
			new Bottle(4000, 370, 0),
			new Bottle(4200, 380, 1),
			new Bottle(4400, 360, 0),
			new Bottle(4600, 350, 1),
		]
	);
	return level2;
}
