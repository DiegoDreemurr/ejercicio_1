var caja
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(400,400)
 caja = createSprite (200,200,20,20);
  //create a trex sprite
 
}

function draw(){
  background("black")
  
if (keyIsDown(RIGHT_ARROW)){
caja.position.x = caja.position.x +2;
}
if (keyIsDown(LEFT_ARROW)){
  caja.position.x = caja.position.x -2
}
drawSprites();
if (keyIsDown(UP_ARROW)){
  caja.position.y = 
}
]
}
