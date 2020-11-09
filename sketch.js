var car,wall;
var speed, weight;

function setup() {
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = (80,80,80);

  speed = Math.round(random(10,100));
  weight = Math.round(random(400,1700));
}

function draw() {
  background(255,255,255);
  background("black");

  car.velocityX = speed;

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
 

  drawSprites();
}