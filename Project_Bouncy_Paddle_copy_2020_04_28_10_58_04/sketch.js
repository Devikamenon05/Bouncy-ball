var ball,ballImage,paddle,paddleImage;
function preload() {
 ballImage = loadImage("ball.png");
paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,50,50);
  ball.addImage("ball",ballImage);
  
  paddle = createSprite(380,200,20,80);
  paddle.addImage("paddle",paddleImage);
  
 

}

function draw() {
  background(205,153,0);
  background("yellow");
 
  edges = createEdgeSprites();
  
  ball.velocityX = 5;
  
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3]) || ball.isTouching(edges[0]) ){
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[0]);
   
  }
  
  if(ball.isTouching(paddle)){
    ball.velocityX = ball.velocityX*(-1);
  }

    
 paddle.collide(edges[2]);
   paddle.collide(edges[3]);
  
  
  ball.velocityY = 5;
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y -20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+20;
  }
  drawSprites();
  
}

