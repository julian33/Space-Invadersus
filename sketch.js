var amongusAnimator;

function preload() {
    amongusAnimator = new animator("Amongus",6,48)
    amongusAnimator2 = new animator("Amongus",6,24)
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let x=width / 2+sin(millis()/150)*100
  let y=height / 2+cos(millis()/300)*100
  let size = 100
  amongusAnimator.drawFrame(x,y,size)
  amongusAnimator2.drawFrame(100,100,size)
  
}

