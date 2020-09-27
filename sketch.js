var cube;
var cube1;
var ground;
var obstacles;
var obstacles1;
var gamestate;
gamestate=1;
function preload(){
cube1=loadImage("Monkey_05.png");
obstacles1=loadImages("stone.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
 cube = createSprite(1197,52750,50);
 ground = createSprite(600,400,1000,400);
 


}

function draw(){
    cube=addImage(cube1);
    background("red");
    ground.velocityX = -10;
    if(ground.x=0){
        ground.x=600
    }
if(gamestate===1){
    cube.velocityY=25;
    if(keyWentDown(UP_ARROW)){
        cube.velocityY=-35;
    }
}
if(gamestate===0){
    ground.velocityX=0;
}

 drawSprites;
}


function obstacles(){
    obstacles = createSprite(1200,498,Random(24,45));
    obstacles.velocityX=-15;
    obstacles=addImage(obstacles1)
    if(obstacles.isTouching(cube)){
        gamestate=0
    }
    if(gamestate===0){
        obstacles.velocityX=0;
        obstacles.x=1200;
    }
}