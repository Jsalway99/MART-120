class Rectangle
{

    //constructor
    // x = x-coorfinate, y = y-coordinate, w= width, h = height, r = red, g = green
    constructor(x,y,w,h,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b,);
        rect(this.x, this.y, this.w, this.h);
    }
}
class Square
{

    constructor(x,y,w,h,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display()
    {
        fill(this.r, this.g, this.b,);
        square(this.x, this.y, this.w);
    }
}

class Circle
{

    constructor(x,y,w,d,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display()
    {
        fill(this.r, this.g, this.b,)
        circle(this.x, this.y, this.w, this.d);
    }
}

