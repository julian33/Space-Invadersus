var crabAnimator;
var squidAnimator;
var octopusAnimator;
var playerAnimator;
var mySwarm;
var myPlayer;

function preload() {
  //Initialize the Animators (Preloads the animated sprites)
  crabAnimator = new animator("Crab", 6, 2, 100 * 0.5);
  squidAnimator = new animator("Squid", 6, 6, 70 * 0.5);
  octopusAnimator = new animator("Octopus", 10, 4, 60 * 0.5);
  playerAnimator = new animator("Player", 10, 30, 200);
}

function setup() {
  createCanvas(700, 700);


  //creates the player
  myPlayer = new player(540, 540, 10, playerAnimator);

  //creates the aliens
  mySwarm = new swarm(1, 2, 2, 11);
}

function draw() {
  background(0);
  //updates all player and enemies
  mySwarm.updateSwarm();
  myPlayer.updatePlayer();
}



