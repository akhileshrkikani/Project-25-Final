
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperImg,paperSprite;
var world;

function preload(){
paperImg=loadImage("paper.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	
	
	
    engine = Engine.create();
	world = engine.world;

	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperSprite= new Paper(200,620,60,60)
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();

  groundObject.display();
  paperSprite.display();
  dustbinObj.display();



  Engine.update(engine)


  
  
drawSprites();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position, {x:10,y:-15}); 
	}
	} 
