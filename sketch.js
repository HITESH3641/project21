var bullet,thickness;
var wall,damage;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  weight=random(30,52)
  speed=random(223,321);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  bullet.velocityX=speed;
 
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0,0,0);  
  
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 
    if(hasCollided(bullet,wall)&&damage>10){
      bullet.shapeColor = "red";
      bullet.velocityX=0
    }
    if(hasCollided(bullet,wall)&&damage<10){
      bullet.shapeColor = "green";
      bullet.velocityX=0
    }
    
    
  
  
 
 
  drawSprites();
}
