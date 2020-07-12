class Box {

    constructor(x, y){
      var options = {
        'restitution': 0.3,
        'friction': 1.0,
        'density': 0.3
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.visibility = 255;
      this.image = loadImage ("square.png");
      World.add(world, this.body);
    }
  
    score() {
      if (this.visibility < 0 && this.visibility >- 105) {
        score++;
      }
    }

    display() {
      if (this.body.speed < 3) {
        image(this.image, this.body.position.x, this.body.position.y, 20, 20);
      } else {
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, 20, 20);
        pop();
     }
      
    }
    
  };