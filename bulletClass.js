class bullet {
    constructor(x, y, xvel, yvel, type) {
        this._x = x;
        this._xvel = xvel;
        this._y = y;
        this._yvel = yvel;
        this._type = type;

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
    }

    //Displays the bullet.
    display() {
        circle(this._x, this._y, 10);
    }

    //Checks if bullet hit alien and removes itself along said alien.
    hitCheck(_flock) {
        for (let i = 0; i < _flock.aliens.length; i++) {
            let _distance = this.distanceToAlien(_flock.aliens[i]);
            if (_distance < _flock.aliens[i].Animator.animSize / 1.6) {
                _flock.aliens[i].Life = false;
                myPlayer.bullets.splice(myPlayer.bullets.indexOf(this), myPlayer.bullets.indexOf(this)); //Sletter
            }
        }
    }

    //Finds the distance to alien
    distanceToAlien(_alien) {
        let x_dist = this._x - _alien.x;
        let y_dist = this._y - _alien.y;
        let total_dist = sqrt((x_dist * x_dist) + (y_dist * y_dist));
        return (total_dist);
    }
}