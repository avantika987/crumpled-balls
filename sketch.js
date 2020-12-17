
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-40,width,10);

	box1 = new box(width/2,height-70,120,20);
	box2 = new box(width/2-60,height-120,20,80);
	box3 = new box(width/2 +60,height-120,20,80);

	paper = new Paper(50,50,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-100});
	}
}


