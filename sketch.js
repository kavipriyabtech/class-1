var box;

function setup() {
  createCanvas(500, 500);
  box = createSprite(200, 200, 100, 100);
  box.shapeColor = color(255); 
}

function draw() {
  background("plum");

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
    box.shapeColor = color(255, 0, 0); 
  } else if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    box.shapeColor = color(0, 255, 0); 
  } else if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    box.shapeColor = color(0, 0, 255); 
  } else if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    box.shapeColor = color(255, 255, 0); 
  } else {
    box.shapeColor = color(255); 
  }

  drawSprites();
}







