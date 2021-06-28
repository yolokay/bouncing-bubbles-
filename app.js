
let balls = []; 


function setup() {
   
  let canvas = createCanvas(windowWidth,  windowHeight);
  
  for (let index = 1; index < 20; index++) {
    balls.push(new Ball());
  }
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(175, 100, 125);
  }

function draw() {
  
 
  background(0);
  balls.forEach(ball => {
    ball.move();
    ball.display();
    ball.bounce();
  });
  
  console.log(getFrameRate());
   
}