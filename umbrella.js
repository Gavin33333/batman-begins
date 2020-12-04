class Umbrella{
    constructor(x,y){
var options = {
    isStatic: false
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius
World.add(world, this.body);
this.image=loadImage("walking_1.png")
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
    }
    
}