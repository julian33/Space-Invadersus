class player {
    constructor(x, y, hp, Animator) {
        this._x = x;
        this._y = y;
        this._hp = hp;
        this._Animator = Animator;
        this.canShoot = false;
        this.bullets = [];
    }

    //Moves the player based on input of a & d.
    move() {
        let _xvel = 0;
        _xvel += keyIsDown(68) * (deltaTime / 5); //d
        _xvel += keyIsDown(65) * -(deltaTime / 5); //a
        this._x += _xvel;
    }

    //Displays the players bullets & itself
    display() {
        if (this.bullets.length > 0) {
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].updateBullet();

            }
        }
        this._Animator.drawFrame(this._x, this._y)
    }

    //Spawns a bullet at its position.
    shoot() {
        print("Bang!");
        this.bullets.push(new bullet(this._x, this._y - (this._Animator.animSize / 2) * 0.65, 0, -0.25, "Normal"));
    }

    //Runs the methods required for it to work. Also runs the shoot method if the mouse is clicked.
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