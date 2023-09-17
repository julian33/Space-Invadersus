class bullet {
    constructor(x, y, xvel, yvel, type) {
        this._x = x;
        this._xvel = xvel;
        this._y = y;
        this._yvel = yvel;
        this._type = type;
        this._hasHit=false;

    }

    //Moves the bullet.
    move() {
        this._x += this._xvel * deltaTime;
        this._y += this._yvel * deltaTime;
    }

    //Runs all bullet methods needed for it to function.
    updateBullet() {
        this.move();
        this.display();
        this.hitCheck(mySwarm);
        this.onScreen(myPlayer.bullets.indexOf(this));
    }

    //Displays the bullet.
    display() {
        if (this._hasHit==false) {
            fill(255,0,0);
            rectMode(CENTER);
            rect(this._x, this._y, 5, 25);
        }
    }

    //Checks if bullet hit alien and sets the hasHit boolean to true
    hitCheck(_flock) {
        for (let i = 0; i < _flock.aliens.length; i++) {
            let _distance = this.distanceToAlien(_flock.aliens[i]);
            if (_distance < _flock.aliens[i].Animator.animSize / 1.6 &&this._hasHit==false) {
                _flock.aliens[i].Life = false;
                this._hasHit=true
            }
        }
    }
    //Checks if the bullet is onscreen and deltes it if it isnt.
    onScreen(_idx) {
        //print(_idx)
        if (this._y < -25) {
            myPlayer.bullets.shift()

        }
    }

    //Finds the distance to alien
    distanceToAlien(_alien) {
        if (_alien.Life == true) {
            let x_dist = this._x - _alien.x;
            let y_dist = this._y - _alien.y;
            let total_dist = sqrt((x_dist * x_dist) + (y_dist * y_dist));
            return (total_dist);
        } else {
            return 9999999;
        }
    }
}