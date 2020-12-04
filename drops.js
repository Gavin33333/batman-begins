class Drops{
    constructor(x,y,radius){
var options = {
    friction: 1
}
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    ellipseMode(CENTER);
    pop();
}
update(){
if(this.rain.position.y > height){
MediaStreamTrackEvent.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
}
}
}
