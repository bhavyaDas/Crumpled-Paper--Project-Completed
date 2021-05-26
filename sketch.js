////////////////////////////////Code Started/////////////////////////////

//Created variable and set the value
const Engine = Matter.Engine;

//Created variable and set the value
const World = Matter.World;

//Created variable and set the value
const Bodies = Matter.Bodies;

//Created variable and set the value
const Body = Matter.Body;

//Created variables
var engine, world, ground, backgroundImg, dustbin, paper

////////////////////////////////function-Preload Started/////////////////////////////

//Images-storage Function (pre-defined function: function preload())
function preload() {

	//Loaded an image under the variable backgroundImg 
	backgroundImg = loadImage("background.png")

}

////////////////////////////////function-Preload Ended/////////////////////////////


////////////////////////////////function-setup Started/////////////////////////////

//Pre-defined function: setup Function
function setup() {

	//Created canvas with width=windowWidth and height=windowHeight-10
	createCanvas(windowWidth, windowHeight - 10)

	//Created (Engine) inside the variable engine
	engine = Engine.create()

	//Set the value of world equal to engine.world
	//Means put the World inside the Engine
	world = engine.world

	//Made an object(ground) using the Ground class inside (ground.js file)
	ground = new Ground(width / 2, 730, width, 20)

	//Made an object(paper) using the Paper class inside (paper.js file)
	paper = new Paper(200, 400)

	//Made an object(dustbin) using the Dustbin class inside (dustbin.js file)
	dustbin = new Dustbin(1200, 715)

}

////////////////////////////////function-setup Ended/////////////////////////////


////////////////////////////////function-draw Started/////////////////////////////

//Pre-defined function (repeatation)
function draw() {

	//Added an image to the background of canvas
	background(backgroundImg)

	//Updated the engine
	Engine.update(engine);

	//Displayed the object : ground.display()
	ground.display()

	//Displayed the object : dustbin.display()
	dustbin.display()

	//Displayed the object : paper.display()
	paper.display()

}

////////////////////////////////function-draw Ended/////////////////////////////


////////////////////////////////function-keyPressed Started/////////////////////////////

//Pre-defined function: function keyPressed()
function keyPressed() {

	//Put a condition if keyCode is equal to UP_ARROW
	if (keyCode === UP_ARROW) {

		//Applied the force on the paper object: (paper.body) with x:130 & y:-145
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 130, y: -145 })

	}

	//Put a condition if keyCode is equal to DOWN_ARROW
	if (keyCode === DOWN_ARROW) {

		//Applied the force on the paper object: (paper.body) with x:-130 & y:145	
		Matter.Body.applyForce(paper.body, paper.body.position, { x: -130, y: 145 })

	}

	//Put a condition if keyCode is equal to LEFT_ARROW
	if (keyCode === LEFT_ARROW) {

		//Applied the force on the paper object: (paper.body) with x:-130  & y:-145
		Matter.Body.applyForce(paper.body, paper.body.position, { x: -130, y: -145 })

	}

	//Put a condition if keyCode is equal to RIGHT_ARROW
	if (keyCode === RIGHT_ARROW) {

		//Applied the force on the paper object: (paper.body) with x:130 & y:145
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 130, y: 145 })

	}

}

////////////////////////////////function-keyPressed Started/////////////////////////////


////////////////////////////////Code Ended/////////////////////////////