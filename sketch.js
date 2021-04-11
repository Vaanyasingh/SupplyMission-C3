var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var zone1,zone2, zone3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="fly";

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	zone1Sprite=createSprite(335,610,20,90)
	zone1Sprite.color="red";
	zone2Sprite=createSprite(width/2,height-35,150,20);
	zone2Sprite.color="red";
	zone3Sprite=createSprite(465,610,20,90);
	zone3Sprite.color="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(packageSprite.x , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}
keyPressed();

function draw() {
  rectMode(CENTER);
  background(0);
  if(gameState==="fly"){
	  console.log("package")
  packageSprite.x= helicopterSprite.position.x ;
  packageSprite.y= packageBody.position.y; 
}
if(packageSprite.collide(groundSprite)){
	packageSprite.x= packageBody.position.x
}
 
  drawSprites();
 //Engine.update(engine);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//Matter.Body.applyForce(packageSprite.body,package.body.position, {x:85,y:-85})
	Matter.Body.setStatic(packageBody,false);

}


}



