var wall;
var  bullet,speed,weight;
 
 
 function setup() {
  createCanvas(1600, 400);
   
  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225);


  wall=createSprite(1000, 400, 45, height/1);
  wall.shapecolor=color(80,80,80);
  
}

function draw() {
  background(0);  
    if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
   var damage=0.5 , weight , speed , speed22509;
   if(damage>10)
   {
       wall.shapeColor=color(225,0,0);
   }
    
   if(damage<10)
   {
      wall.shapeColor=color(0,250,0);
   }
    
   
  }
  drawSprites();
}













