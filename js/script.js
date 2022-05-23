/*----- constants -----*/
const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = './assets/child.webp';
const TEEN_IMAGE = './assets/teen.webp';
const ADULT_IMAGE = './assets/adult.webp';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 5;
const MAX_CHILD_AGE = 12;
const MAX_TEEN_AGE = 19;
const HUNGER_INTERVAL = 2000;
const SLEEP_INTERVAL = 3000;
const BOREDOM_INTERVAL = 4000;
const AGE_INTERVAL = 5000;

/*----- app's state (variables) -----*/
let age;
let hunger;
let boredom;
let sleepiness;
// don't do this:
// it might cause bugs if you calculate state values from other state values
// let gameOver = hunger > MAX_STAT

/*----- cached element references -----*/
const playBtnEl = document.querySelector('#js-play-btn');
const welcomeModalEl = document.querySelector('.modal-welcome');
const tamagotchiContainerEl = document.querySelector('.tamagotchi-container');
const ageEl = document.querySelector('#js-age');
const petImg = document.createElement('img');

/*----- event listeners -----*/
playBtnEl.addEventListener('click', init);

/*----- functions -----*/
function init() {
	console.log('you clicked me');
	// hide begin game modal
	welcomeModalEl.classList.add('hide');
	// Initialize pet's age at 0
	age = 0;
	// Initialize pet's other stats at 0 (hunger, sleepiness, boredom)
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
	// Create egg element
	initEgg();
	// Start age timer
	handleAgeInterval();
}

function initEgg() {
	// create an egg div
	const egg = document.createElement('div');
	// give it an egg class
	egg.setAttribute('class', 'egg');
	// create a spots div
	const spots = document.createElement('div');
	// give it a spots class
	spots.setAttribute('class', 'spots');
	// append the spots div to the egg div
	egg.appendChild(spots);
	// append the egg div to the tamagotchi-container
	tamagotchiContainerEl.append(egg);
}

function handleAgeInterval() {
	// Create the img element where our pet img is going to be
	const ageTimer = setInterval(function () {
		// update the state age data
		age++;
		// update the dom with the new age data
		ageEl.innerText = age;
		renderPet();
	}, AGE_INTERVAL);
}

function renderPet() {
	if (age === 1) {
		// Clear egg from the tamagotchi container
		tamagotchiContainerEl.innerHTML = '';
		// Give it the src attribute for the age appropriate img
		petImg.setAttribute('src', BABY_IMAGE);
		// Append it to the tamagotchi container element
		tamagotchiContainerEl.appendChild(petImg);
	} else if (age <= MAX_BABY_AGE) {
		// // - If age is 1-5, show baby image
		// // Clear egg from the tamagotchi container
		// tamagotchiContainerEl.innerHTML = '';
		// // Give it the src attribute for the age appropriate img
		// petImg.setAttribute('src', BABY_IMAGE);
		// // Append it to the tamagotchi container element
		// tamagotchiContainerEl.appendChild(petImg);
		return;
	} else if (age <= MAX_CHILD_AGE) {
		// - If age is 6-12, show child image
		// Give it the src attribute for the age appropriate img
		petImg.setAttribute('src', CHILD_IMAGE);
	} else if (age <= MAX_TEEN_AGE) {
		// - If age is 13-19, show teen image
		petImg.setAttribute('src', TEEN_IMAGE);
	} else {
		// - If age is >19, show adult image
		petImg.setAttribute('src', ADULT_IMAGE);
	}
}
