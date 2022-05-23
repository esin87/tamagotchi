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

/*----- event listeners -----*/

/*----- functions -----*/
