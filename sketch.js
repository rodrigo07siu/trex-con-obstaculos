
var trex ,trex_running;
var suelo;
var suelofijo;
var sueloinvisible;
var nube;
var nubeimagen;
var obstaculo;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
function preload(){
trex_running =loadAnimation("trex1.png","trex3.png","trex4.png")  
suelofijo =loadImage("ground2.png");
  nubeimagen =loadImage("cloud.png");
  obs1 =loadImage("obstacle1.png");
  obs2 =loadImage("obstacle2.png");
  obs3 =loadImage("obstacle3.png");
  obs4 =loadImage("obstacle4.png");
  obs5 =loadImage("obstacle5.png");
  obs6 =loadImage("obstacle6.png");
  
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);
trex.scale=0.5;
 suelo =createSprite(40,180,200,20);
 suelo.addImage(suelofijo);
 suelo.velocityX =-5;
 sueloinvisible =createSprite(200,190,400,10);
 sueloinvisible.visible=false;
}

function draw(){
  background("white")
  if(suelo.x <0){
    suelo.x=suelo.width/2
  }
  spawnClouds();
  spawnObstacles();
  drawSprites();
if (keyDown("space")&& trex.y >=150){
  trex.velocityY = -10;
}
trex.velocityY =trex.velocityY +0.5;
trex.collide(sueloinvisible);
}
function spawnClouds(){
if (frameCount %60==0){
  nube = createSprite(550,50,20,10);
  nube.addImage(nubeimagen);
  nube.y = Math.round(random(10,60));
  nube.velocityX =-5;
  nube.scale=0.5;
  nube.lifetime = 200;
  nube.depth = trex.depth
  trex.depth = trex.depth +1;
}  

}

function spawnObstacles(){
  if(frameCount %60 == 0){
    obstaculo =createSprite(350,180,50,200);
obstaculo.velocityX = -3;
 var ramd = Math.round(random(1,6));
 switch(ramd){
  case 1: obstaculo.addImage(obs1);
  break;
  case 2: obstaculo.addImage(obs2);
  break;
  case 3: obstaculo.addImage(obs3);
  break;
  case 4: obstaculo.addImage(obs4);
  break;
  case 5: obstaculo.addImage(obs5);
  break;
  case 6: obstaculo.addImage(obs6);
  break;
  default:break;
 }
 obstaculo.scale=0.5;
 obstaculo.lifetime = 200;
  }

}