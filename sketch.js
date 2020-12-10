
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground= new Ground(0,640,1600,20);
	wall1 =new Box(500,570,20,100);
	wall2 =new Box(700,570,20,100);
	wall3 =new Box(600,620,200,20);
	ball= new Ball(100,300,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  drawSprites();
 
}



