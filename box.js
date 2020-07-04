class Box {

    constructor(x, y, color){
      var options = {
        'restitution': 0.3,
        'friction': 1.0,
        'density': 0.3
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.color = color;
      World.add(world, this.body);
    }
  
    display() {
      fill(this.color);
      rect(this.body.position.x, this.body.position.y, 20, 20);
      noFill();
    }
  };