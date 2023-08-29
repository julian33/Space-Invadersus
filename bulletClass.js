class bullet {
    constructor(x,y,xvel,yvel,type) {
        this._x=x;
        this._xvel=xvel;
        this._y=y;
        this._yvel=yvel;
        this._type=type;
    }
    move(){
        this._x+=this._xvel;
        this._x+=this._xvel;
    }
    updateBullet(){
        this.move();
    }
}