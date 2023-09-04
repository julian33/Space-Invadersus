class bullet {
    constructor(x,y,xvel,yvel,type) {
        this._x=x;
        this._xvel=xvel;
        this._y=y;
        this._yvel=yvel;
        this._type=type;
    }
    move(){
        this._x+=this._xvel*deltaTime;
        this._y+=this._yvel*deltaTime;
    }
    updateBullet(){
        this.move();
        this.display();
    }
    display(){
        circle(this._x,this._y,10);
    }
}