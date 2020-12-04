var umbrella;
var maxDrops=100;
var thunder, thunderImage
function preload(){
    thunderImage = loadImage("1.png");
}

function setup(){
    createCanvas(1200,600)
    umbrella = new Umbrella(600,500);
    thunder=createSprite(600,50);
    thunder.addImage(thunderImage)
}

function draw(){
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)))
    }
    umbrella.display();
    drops.display();
drawSprites();
}   

