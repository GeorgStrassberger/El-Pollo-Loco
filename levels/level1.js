function levelOne() {
	const level1 = new Level(
		[
			new Chicken(1700, 1),
			new Chicken(2000, 2),
			new Chicken(2300, 3),
			new Chicken(2600, 4),
			new Chicken(2900, 5),
			new Chicken(3200, 6),
			new Chicken(3600, 7),
			new Chicken(3800, 8),
			new Chicken(4100, 9),
			new Chicken(4350, 10),
			new Chicken(4600, 11),
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
			new Coin(400, 350),
			new Coin(450, 100),
			new Coin(650, 300),
			new Coin(850, 250),
			new Coin(1200, 100),
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
	return level1;
}
