var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="green"

 fixedRect=createSprite(200,200,50,100)
 fixedRect.shapeColor="green"

 fixedRect.debug=true
 movingRect.debug=true
}

function draw() {
  background(0);
  movingRect.y=mouseY
  movingRect.x=mouseX

  if(istouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
  
}

