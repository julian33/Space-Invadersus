class particleSystem{

}

class particle{
    constructor(_x,_y,_xvel,_yvel,_lifetime,_decayTime,_gravityState,_gravityStrength, _size, _col,_drag,_idx){
        this.x=_x;
        this.y=_y;
        this.xvel=_xvel;
        this.yvel=_yvel;
        this.lifetime=_lifetime;
        this.decayTime=_decayTime;
        this.spawnTime = millis();
        this.idx=_idx;
        this.gravityState=_gravityState;
        this.gravityStrength=_gravityStrength;
        this.size=_size;
        this.col=_col;
        this.drag=_drag;
    }

    //Runs all the primary functions in the particle
    updateParticle(){
        this.checkDelete();
        if (this.gravityState==true) {
            this.gravity();
        }
        this.move();
        this.decay();
        this.display();
    }

    //Renders the particle
    display(){
        fill(this.col);
        rect(this.x, this.y, this.size, this.size);
    }

    //Moves the particle by its velocity.
    move(){
        this.x+=this.xvel*deltaTime;
        this.y+=this.yvel*deltaTime;
    }

    //Deletes the particle when the lifetime runs out.
    checkDelete(){
        if (this.lifetime<millis()-this.spawnTime) {
            print("Delete this particle")
        }
    }

    //Applies gravity to the velocity
    gravity(){
        this.yvel+=this.gravityStrength*deltaTime;
    }

    //If the decayTime has elapsed it will set the alpha of the particle color to the percentage of the remaining lifetime of the particle from the decaytime
    decay(){
        if (condition) {
            print("Decaying");
        }
    }
}