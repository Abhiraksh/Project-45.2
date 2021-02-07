
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var commander, alien, mAlien, asteroid, Agroup;

var c_img, laser, atd_img;
 
function preload()
{
  c_img = loadImage("images/gship.png");
  atd_img = loadImage("images/asteroidS.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    commander = createSprite(400,540,10,10);
    commander.addImage(c_img);
    commander.scale = 0.6;

    Agroup = createGroup();
    

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  commander.x = mouseX;
  lasers();
  asteroids();
  if(Agroup.isTouching(laser)){
    Agroup.destroyEach();
  }
  
  drawSprites();
 
}
function lasers(){
  if(keyWentDown("space")){
    laser = createSprite(commander.x,commander.y,5,50);
    laser.shapeColor = "red";
    laser.velocityY = -10;
    laser.lifetime = 100;
    
  }
}
function asteroids(){
  if(frameCount%150 === 0){
  asteroid = createSprite(random(50,750),-10,10,10);
  asteroid.addImage(atd_img);
  asteroid.scale = 0.5;
  asteroid.velocityY = 10;
  
  Agroup.add(asteroid);
  }
}


