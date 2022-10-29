const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var paper;

function preload(){
//find the bug in the below code
	//dustbinImg = createImg('dustbin.png');
	//paperImg = createImg('paper.png');
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	//dustbinImg = createImg('dustbin.png');
	paper = new Ground(150,320,25,25);
	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);
	

	Engine.run(engine);
}


function draw() {
	background(200);
	Engine.update(engine);

	//rectMode(CENTER);

	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();


	imageMode(CENTER);
	//use image() command to add paper image to the ball
    ellipse(ball.position.x,ball.position.y,radius,radius);
	// use image() command to add dustbin image in the canvas.
	//image(dustbin, 570, 200,200);
	//image(dustbinImg,1200,570,200,200);
	//paper.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
       // Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
  	}
}