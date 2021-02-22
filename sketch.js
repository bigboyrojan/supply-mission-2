


	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dropzone, leftdropzone, rightdropzone,dropzonebody,leftdropzonebody,rightdropzonebody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 dropzoneY = 610;
	 dropzoneposition = width/2-100;

	 leftdropzone = (dropzoneposition,dropzoneY,20,100);
	 leftdropzone.shapeColor = (255,0,0);
	  leftdropzonebody = Bodies.rectangle(dropzoneposition+20,dropzoneY,20,100, {isStatic: true});
	  World.add(world, leftdropzonebody);

	  dropzone = (dropzoneposition+100,dropzoneY+40,200,20);
	 dropzone.shapeColor = (255,0,0);
	  dropzonebody = Bodies.rectangle(dropzoneposition+100,dropzoneY+45-20,200,20, {isStatic: true});
	 World.add(world, dropzonebody);

	  

	   rightdropzone = (dropzoneposition+200,dropzoneY,50,20,100);
	 rightdropzone.shapeColor = (255,0,0);
	 rightdropzonebody = (dropzoneposition+200-20,dropzoneY,20,100, {isStatic:true});
	 World.add(world, rightdropzonebody);
	



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  

	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  

  

	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }
