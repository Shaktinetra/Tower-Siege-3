const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var stand1, stand2, ground, polygon, slingshot, score;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);
  rectMode(CENTER);
  ellipseMode(CENTER);

  block1 = new Box(280, 180);
  block2 = new Box(300, 180);
  block3 = new Box(320, 180);
  block4 = new Box(290, 160);
  block5 = new Box(310, 160);
  block6 = new Box(300, 140);
  block7 = new Box(580, 80);
  block8 = new Box(600, 80);
  block9 = new Box(620, 80);
  block10 = new Box(590, 60);
  block11 = new Box(610, 60);
  block12 = new Box(600, 40);

  polygon = new Polygon(100, 100);

  slingshot = new SlingShot(polygon.body, {x: 100, y: 100})

  stand1 = new Ground(300, 200, 100, 10, 'white');
  stand2 = new Ground(600, 100, 100, 10, 'white');
  ground = new Ground(400, height, width, 10, 'black');
  score = 0;
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  stroke("white");
  background(0);  

  Engine.update(engine);

  text ("SCORE: " + score, 700, 40);

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  polygon.display();

  slingshot.display();

  stand1.display();
  stand2.display();
  ground.display();
}

function mouseDragged() {
  Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}