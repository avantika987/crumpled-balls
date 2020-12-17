class Paper{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{density:1.2});
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius);
            fill("yellow");
            pop();
    }
}