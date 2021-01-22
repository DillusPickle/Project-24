
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper(200,450,40);
	ground = new Ground(800,670,1600,20);
	box1 = new Dustbin(1200,650);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.run(engine);

  paper1.display();
  ground.display();
  box1.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}


