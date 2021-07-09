class Rubber
{
    constructor(x,y,r)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,r,option);
        World.add(world,this.body);
        
      
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        circle(0,0,this.radius);
        pop();     
    }
}