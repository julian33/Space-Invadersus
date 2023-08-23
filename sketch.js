var crabAnimator;
var squidAnimator;
var octopusAnimator;
var Aliens =[];
var mySquid

function preload() {
  //Initialize the Animators (Preloads the animated sprites)
    crabAnimator = new animator("Crab",6,2,100*0.5)
    squidAnimator = new animator("Squid",6,6,70*0.5)
    octopusAnimator = new animator("Octopus",10,4,60*0.5)
}

function setup() {
  createCanvas(600, 600);
  
  mySquid = new squid(300,300,squidAnimator)
  myCrab = new crab(300,200,crabAnimator)
  myOctopus = new octopus(300,100,octopusAnimator)
}

function draw() {
  background(0);
  mySquid.display();
  myCrab.display();
  myOctopus.display();
  
}

