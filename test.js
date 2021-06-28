class Ball {
    constructor() {
        //coordinates of the origo
      this.x = random(300,1500); 
      this.y = random(300,700);
      this.color = color(random(0,255),random(0,255),random(0,255));
        //diameter of the circle
      this.size = random(10,80);

      this.xMove = random(-5,6);
      this.yMove = random(-5,6);
      
      //this.Speed = random(0.1, 5);
      //console.log("Circle created")
    }
    
    move() {
      this.x += this.xMove;
      this.y += this.yMove;
    }
  
    bounce(){
        if (this.x + (this.size/2) >= windowWidth|| this.x -(this.size/2) <= 0) {
            this.xMove*= -1;
            //console.log("bounce from side walls");
        }
        if (this.y + (this.size/2) >= windowHeight || this.y - (this.size/2) <= 0) {
            this.yMove*= -1;
            //console.log("bounce from floor and ceiling ")
        }
    }

    display() {
      ellipseMode(CENTER);
      noFill();
      stroke(this.color);
      strokeWeight(5);
      ellipse(this.x, this.y, this.size);
    }

   
  
  }

  