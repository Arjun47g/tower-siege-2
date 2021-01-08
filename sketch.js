const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform1, platform2;
var block1, hexagon;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  
  hexagon = Bodies.rectangle(100, 200, 40, 40);
  World.add(world, hexagon)

  ground = new Ground (390, 300, 250, 10);
  ground2 = new Ground (770, 220, 250, 10);

  string = new Chain(this.hexagon, {x:100, y:200});

  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40)
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  block16 = new Block(390, 155, 30, 40);

  block17 = new Block(680, 195, 30, 40);
  block18 = new Block(710, 195, 30, 40);
  block19 = new Block(740, 195, 30, 40);
  block20 = new Block(770, 195, 30, 40);
  block21 = new Block(800, 195, 30, 40)
  block22 = new Block(830, 195, 30, 40);
  block23 = new Block(860, 195, 30, 40);
  block24 = new Block(710, 155, 30, 40);
  block25 = new Block(740, 155, 30, 40);
  block26 = new Block(770, 155, 30, 40);
  block27 = new Block(800, 155, 30, 40);
  block28 = new Block(830, 155, 30, 40);
  block29 = new Block(740, 115, 30, 40);
  block30 = new Block(770, 115, 30, 40);
  block31 = new Block(800, 115, 30, 40);
  block32 = new Block(770, 75, 30, 40);


}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(hexagon.position.x, hexagon.position.y, 30, 30);

  ground.display();
  ground2.display();
 
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("green");
  block13.display();
  block14.display();
  block15.display();

  fill("blue");
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  string.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});

}

function mouseReleased () {
  string.fly();
}

function keyPressed(){

  if (keyCode === 32) {
    Matter.Body.setPosition(this.hexagon, {x:100, y:200});
    string.attach(this.hexagon);
    
  }

}