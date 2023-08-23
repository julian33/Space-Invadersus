class alien {
    constructor(x,y,Animator){
        this.x=x;
        this.y=y;
        this.Animator=Animator
    }

    move(x_amount,y_amount){
        this.x += x_amount
        this.y += y_amount
    }

    setPos(newX,newY){
        this.x = newX;
        this.y = newY;
    }

    display(){
        this.Animator.drawFrame(this.x,this.y)
    }
}