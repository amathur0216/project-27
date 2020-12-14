
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(100, 400);
bob2 = new Bob(250, 400);
bob3 = new Bob(400, 400);
bob4 = new Bob(550, 400);
bob5 = new Bob(700, 400);

roof1 = new Roof(400, 100, 50, 20);

rope1 = new Rope(bob1.body, roof1.body, -bob1.radius*2, 0);
rope2 = new Rope(bob2.body, roof1.body, -bob2.radius*2, 0);
rope3 = new Rope(bob3.body, roof1.body, -bob3.radius*2, 0);
rope4 = new Rope(bob4.body, roof1.body, -bob4.radius*2, 0);
rope5 = new Rope(bob5.body, roof1.body, -bob5.radius*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  
  drawSprites();
 
}



