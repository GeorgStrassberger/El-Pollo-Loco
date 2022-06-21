class Endboss extends MovableObject {

    constructor(x) { //Start Koordinate in X-Richtung wird überangeben von level1
        // das Bild für ChickenBoss laden
        super().loadImage(this.IMAGES_ALERT_BOSS[0]);
        this.loadImages(this.IMAGES_ALERT_BOSS);
        this.loadImages(this.IMAGES_WALKING_BOSS);
        this.loadImages(this.IMAGES_ATTECKING_BOSS);
        this.loadImages(this.IMAGES_HURT_BOSS);
        this.loadImages(this.IMAGES_DEAD_BOSS);
        this.animate();
        //this.isAttacking();
        this.x = x;
        this.y = 45;
        this.height = 400;
        this.width = 250;
        this.energy = 100;
        this.speed = 15;
        this.vulnerable = 1.5;
    };

    IMAGES_WALKING_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];
    IMAGES_ALERT_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];
    IMAGES_ATTECKING_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];
    IMAGES_HURT_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];
    IMAGES_DEAD_BOSS = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png#',
    ];

    //Sounds
    win_sound = new Audio('../audio/win.mp3');

    //Var
    x_movement_speed = 2;
    moving = true;

    // Animation Endboss
    animate() {
        this.endbossAnimation = setInterval(() => {
            if (super.isDead()) {
                super.playAnimation(this.IMAGES_DEAD_BOSS);
                console.log('Boss isDead');
                setTimeout(() => {
                    this.gameOver();
                }, 1500);
            } else if (super.isHurt()) {
                clearInterval(this.attack);
                super.playAnimation(this.IMAGES_HURT_BOSS);
                console.log('Boss isHurt');
            } else if (this.energy == 100) {
                super.playAnimation(this.IMAGES_ALERT_BOSS);
                console.log('Boss isALERT');
            } else {
                this.isAttacking();
                console.log('isAttacking');
            }
        }, 1000 / 5);
    };

    // Angriff 
    // wenn er verletzt wird geht er kurz vor und dann wieder  zurück
    isAttacking() {
        if (this.moving) {
            console.log('Lauf los nach links');
            super.playAnimation(this.IMAGES_ATTECKING_BOSS);
            super.moveLeft();
            setTimeout(() => this.moving = false, 3000);
        } else {
            console.log('Lauf los nach rechts');
            super.playAnimation(this.IMAGES_WALKING_BOSS);
            super.moveRight();
            setTimeout(() => this.moving = true, 1000);
        };
    };

    //Wenn Endboss Tot ist 
    gameOver() {
        clearInterval(this.endbossAnimation);
        this.win_sound.play();
        document.getElementById('cover').classList.remove('d-none'); // blende start bild aus
        document.getElementById('endframe').classList.remove('d-none');
        document.getElementById('startframe').classList.add('d-none');
        document.getElementById('coverimg').src = `../img/9.IntroOutroImage/GameOverScreen/3.Game over.png`;
    };
};