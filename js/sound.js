const allAudios = [];
const walking_sound = new Audio("../audio/walking.mp3");
const jumping_sound = new Audio("../audio/jump.mp3");
const hurt_sound = new Audio("../audio/hurt.mp3");
const throw_sound = new Audio("../audio/throw.mp3");
const coin_sound = new Audio("../audio/coin.wav");
const bottle_sound = new Audio("../audio/bottle.mp3");
const chicken_hit = new Audio("../audio/chicken_hit.mp3");
const win_sound = new Audio("../audio/win.mp3");
const backgroundSound = new Audio("../audio/mexicosound.mp3");
let allMute = false;
let bgSound = true;

backgroundSound.volume = 0.2;

/**
 * BackgroundMusic on/off
 */
function musicGame() {
	const menuSoundBtn = document.getElementById("menu_sound_btn");
	const gameSoundBtn = document.getElementById("game_sound_btn");
	bgSound = !bgSound;
	if (bgSound) {
		backgroundSound.pause();
		menuSoundBtn.innerHTML = `Music ON`;
		gameSoundBtn.src = "../img/icons/mute32.png";
	} else {
		backgroundSound.play();
		menuSoundBtn.innerHTML = `Music OFF`;
		gameSoundBtn.src = "../img/icons/volume32.png";
	}
}

function collectAllAudios() {
	allAudios.push(walking_sound);
	allAudios.push(jumping_sound);
	allAudios.push(hurt_sound);
	allAudios.push(throw_sound);
	allAudios.push(coin_sound);
	allAudios.push(bottle_sound);
	allAudios.push(chicken_hit);
	allAudios.push(win_sound);
	allAudios.push(backgroundSound);
}
collectAllAudios();
