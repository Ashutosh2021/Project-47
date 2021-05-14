class Ball{

    constructor(x,y,radius){

       

        this.body=Bodies.circle(x,y,radius/2);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("images/polygon.png");

        World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);

    }


}