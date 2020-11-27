const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/circle11.png");
 circle2img = loadImage("images/circle22.png");
 ballimg = loadImage("images/Basketball.png");
}
function setup() {
  createCanvas(displayWidth - 100, displayHeight);
  engine = Engine.create();
  world = engine.world;
  myteam = createGroup();
  opponentteam = createGroup();
  circle1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 200, 10, 10);
  circle1.addImage("circle1", circle1img);
  circle1.scale = 0.1;
  opponentteam.add(circle1);
  circle2 = createSprite(displayWidth/2 + 250, displayHeight/2 - 200, 10, 10);
  circle2.addImage("circle2", circle1img);
  circle2.scale = 0.1;
  opponentteam.add(circle2);
  circle3 = createSprite(displayWidth/2 - 300, displayHeight/2 + 200, 10, 10);
  circle3.addImage("circle3", circle2img);
  circle3.scale = 0.1;
  myteam.add(circle3);
  circle4 = createSprite(displayWidth/2 + 250, displayHeight/2 + 200, 10, 10);
  circle4.addImage("circle4", circle2img);
  circle4.scale = 0.1;
  myteam.add(circle4);
  ball = createSprite(displayWidth/2 - 50, displayHeight/2 - 30, 10, 10);
  ball.addImage("ball", ballimg);
  ball.scale = 0.1;
}
function draw() {
  background(courtimg);
  Engine.update(engine);
  drawSprites();
}