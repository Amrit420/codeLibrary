var fixedRect,movingRect

function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
 fixedRect.velocityX=-5
  movingRect=createSprite(400,400,80,30);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  movingRect.velocityX=5
 // console.log(movingRect.x-fixedRect.x);
 



 gameObject1 = createSprite(100, 100, 50, 50);
 gameObject1.shapeColor = "green";
 gameObject1.velocityX=2;
 gameObject2 = createSprite(200, 100, 50, 50);
 gameObject2.shapeColor = "green";
 gameObject2.velocityX=-2;
 gameObject3 = createSprite(300, 100, 50, 50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400, 100, 50, 50);
 gameObject4.shapeColor = "green";


  }

function draw() {
  background(255,255,255);  
 // console.log(movingRect.x-fixedRect.x);
//movingRect.x=mouseX
//movingRect.y=mouseY

if(isTouching(movingRect,gameObject2))
{
  movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green"

    
}


bounceOff(movingRect,fixedRect)
  bounceOff(gameObject1,gameObject2)
  drawSprites();

}

