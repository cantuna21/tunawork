function setup() {
  createCanvas(1280, 968);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX-80, mouseY, 80, 80);
  ellipse(mouseX+80, mouseY, 80, 80);
}
