var crabAnimator;
var squidAnimator;
var octopusAnimator;
var playerAnimator;
var mySwarm;
var myPlayer;
var global=20;

function preload() {
  //Initialize the Animators (Preloads the animated sprites)
  crabAnimator = new animator("Crab", 6, 2, 100 * 0.5)
  squidAnimator = new animator("Squid", 6, 6, 70 * 0.5)
  octopusAnimator = new animator("Octopus", 10, 4, 60 * 0.5)
  playerAnimator = new animator("Player", 250, 30, 350)
}

function setup() {
  createCanvas(1080, 1080);



  myPlayer = new player(540,540,10, playerAnimator);
  mySwarm = new swarm(1,2,2,11);
}

function draw() {
  background(0);
  mySwarm.updateSwarm();
  mySwarm.display();
  myPlayer.updatePlayer();
}

