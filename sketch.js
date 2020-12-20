
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

Paper,dustbin1,dusbin2,dustbin3,Ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Paper = new paper (150,300,10);
	ground= new Ground(400,700,750,10);
	dustbin1= new dustbin (650,650,60,20);
	dustbin2= new dustbin (630,640,20,60);
	dustbin3= new dustbin (670,640,20,60);

	paper.velocityX = 3;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper.display();
  Ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  keyPressed();
  drawSprites();
 
}
function keyPressed {

	if (keyCode === "UP_ARROW"){

		Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85});
	}
}



