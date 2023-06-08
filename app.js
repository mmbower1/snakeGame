var score = document.getElementById("score");
var s; // short for snake
var scl = 20; // short for scale
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(8); // slows the snake down to normal speed
  pickLocation();
  updateCount();
}

function draw() {
  background(51);
  // auto relocates the food when a game is won
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  //   s.eat(food);
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

// keeps the snake and food equally on the same grid so its not un-even when they collide
function pickLocation() {
  var columns = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(columns)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function updateCount() {
  score.innerHTML = score + 1;
  console.log((score.innerHTML = score.length));
}
