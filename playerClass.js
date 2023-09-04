class player {
    constructor(x, y, hp, Animator) {
        this._x = x;
        this._y = y;
        this._hp = hp;
        this._Animator=Animator;
        this.canShoot = false;
        this.bullets=[];
    }
    move() {
        let _xvel = 0;
        _xvel += keyIsDown(68) * (deltaTime/5); //d
        _xvel += keyIsDown(65) * -(deltaTime/5); //a
        this._x += _xvel;
    }
    display() {
        if (this.bullets.length>0) {
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].updateBullet();
                
            }
        }

        this._Animator.drawFrame(this._x,this._y)
    }
    shoot() {
        print("Bang!");
        this.bullets.push(new bullet(this._x,this._y-(this._Animator.animSize/2)*0.65,0,-1,"Normal"));
    }
    updatePlayer() {
        this.move();
        this.display();
        if (mouseIsPressed) {
            if (this.canShoot == true) {
                this.shoot();
                this.canShoot = false;
            }
        } else {
            this.canShoot = true;
        }
    }
    
}