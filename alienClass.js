class alien {
    constructor(x, y, Animator, Life) {
        this.x = x;
        this.y = y;
        this.Life = true;
        this.Animator = Animator
    }

    //Moves the Alien x,y amount.
    move(x_amount, y_amount) {
        this.x += x_amount;
        this.y += y_amount;
    }

    //Sets the aliens x,y pos.
    setPos(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    //Display the alien.
    display() {
        if (this.Life == true) {
            this.Animator.drawFrame(this.x, this.y);
        }
    }
}