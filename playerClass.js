class player {
    constructor(x, y, hp, Animator) {
        this._x = x;
        this._y = y;
        this._hp = hp;
        this._Animator=Animator;
        this.canShoot = false;
    }
    move() {
        let _xvel = 0;
        _xvel += keyIsDown(68) * (deltaTime/5); //d
        _xvel += keyIsDown(65) * -(deltaTime/5); //a
        this._x += _xvel;
    }
    display() {
        this._Animator.drawFrame(this._x,this._y)
        square(this._x, this._y, 1)
    }
    shoot() {
        print("Bang!")
    }
    updatePlayer() {
        this.move();
        this.display();
        if (mouseIsPressed) {
            if (this.canShoot == true) {
                this.shoot()
                this.canShoot = false;
            }
        } else {
            this.canShoot = true;
        }
    }
}