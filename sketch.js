
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    ground = new Ground(800,680,1600,20)
	paper = new Paper(200,450,70)
	dustBin1 = new dustBin(1100,680,150,20)
	dustBin2 = new dustBin(1045,615,20,150)
	dustBin3 = new dustBin(1155,615,20,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000})
	}
}



