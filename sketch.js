var stone,sand,iron,hammer,ground;
var hammer,rubber;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(700,340,70,70);
  iron=new Iron(920,320,60,40);
  
  ground=new Ground(600,height,1200,30);    
  hammer = new Hammer(200,200,100,50);
  rubber = new Rubber(300,400,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  stone.display();
  hammer.display();
  rubber.display();
  iron.display();
  drawSprites();
 
}



