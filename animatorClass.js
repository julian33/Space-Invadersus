class animator {
    constructor(spriteName, animFrameCount, animFPS) {
      this.animFrames = []; //List of all the PNGs in the animation
      this.animFrameCount = animFrameCount; //Total amount of frames in animation
      this.animFPS = animFPS; //Animation Speed FPS
  
      //This loop puts all the animation frames into the "animFrames" variable
      for (let i = 0; i < this.animFrameCount; i++) {
        this.animFrames.push(loadImage(`Sprites/${spriteName}/Img${i + 1}.png`));
      }
    }
  
    //Draws the current animation frame at specified location
    drawFrame(x, y, size) {
      const imgIndex = this.getAnimationFrame(this.totalFrames, this.animFPS);
      const img = this.animFrames[imgIndex];
      drawImage(img, x, y, size);
    }
  
    //Gets the current Frame in the animation
    getAnimationFrame() {
      const animFrame =
        Math.floor((millis() / 1000) * this.animFPS) % this.animFrameCount;
      return animFrame;
    }
  }