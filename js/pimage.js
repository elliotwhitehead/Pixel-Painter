function setup() {
    createCanvas(640, 480);
  }
  
  function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        noFill();
    }
  }