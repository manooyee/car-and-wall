var car,wall;
var speed, weight;

function setup() {
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = (80,80,80);

  speed = random(10,50);
  weight = random(400,1700)
}

function draw() {
  background(255,255,255);
  background("black");

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22500;
    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  car.collide(wall);
  car.velocityX = speed;
 

  drawSprites();
}