class swarm {
    constructor(squid_Cols, crab_Cols, octopus_Cols, rows) {
      this.squid_Cols = squid_Cols;
      this.crab_Cols = crab_Cols;
      this.octopus_Cols = octopus_Cols;
      this.aliens = [];
      this.x_vel=-0.3;
      this.x_pos=0;
      this.rows=rows;
      this.spacing = 50;
      let height = 25;
      const offset = (width - ((this.rows-1) * this.spacing))/2
      //Generate Squids
      for (let i = 0; i < squid_Cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          this.aliens.push(new squid(j * this.spacing + offset, height, squidAnimator))
        }
        height+=this.spacing;
      }
      //Generate Crabs
      for (let i = 0; i < crab_Cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          this.aliens.push(new crab(j * this.spacing + offset, height, crabAnimator))
        }
        height+=this.spacing;
      }
      //Generate Octopi
      for (let i = 0; i < octopus_Cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          this.aliens.push(new octopus(j * this.spacing + offset, height, octopusAnimator))
        }
        height+=this.spacing;
      }
      //print(this.aliens)
    }
  
    display(){
      for (let i = 0; i < this.aliens.length; i++) {
        this.aliens[i].display();
        
      }
    }
  
    updateSwarm(){
      if (this.x_pos>130){
        this.x_vel*=-1
  
        for (let i = 0; i < this.aliens.length; i++) {
          this.aliens[i].move(0,30)
          
        }
      }else if (this.x_pos<-130){
        this.x_vel*=-1
  
        for (let i = 0; i < this.aliens.length; i++) {
          this.aliens[i].move(0,30)
          
        }
      }
  
      for (let i = 0; i < this.aliens.length; i++) {
        this.aliens[i].move(this.x_vel,0)
        
      }
      this.x_pos-=this.x_vel;
    }
  }
  
  