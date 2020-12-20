class paper {
    constructor(x,y,radius){
        var options = {
            'restitution' : 0.8,
        'friction' : 0.3,
        'density' : 1.2
        
    }
this.body = Matter.Bodies.circle(x,y,radius,{options},{maxSides})

World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        ellipse(0,0,radius);
        pop();

    }
}