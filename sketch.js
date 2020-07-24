var paper,dustbin,ground;
Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;
paper = new Paper(100,500,25);
dustbin = new Dustbin(600,640); 
ground = new Ground(400,660,800,20);
}
  
function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();
}
function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-27.9})
}
}