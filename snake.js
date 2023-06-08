function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];
  this.score = 0;

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  // update
  this.update = function () {
    // adds the tail to the snake
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  // show
  this.show = function () {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };

  // eat
  this.eat = function (position) {
    var d = dist(this.x, this.y, position.x, position.y);
    if (d < 1) {
      this.total++;
      this.score++;
      return true;
    } else {
      return false;
    }
  };

  // death
  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var position = this.tail[i];
      var d = dist(this.x, this.y, position.x, position.y);
      if (d < 1) {
        console.log("starting over");
        this.total = 0;
        this.tail = [];
      }
    }
  };
}
