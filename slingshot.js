class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA) {
        Matter.Body.setPosition(bodyA, {x: 200, y: 50});
        this.sling.bodyA = bodyA;
    }

    display(){
        if(this.sling.bodyA){
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#D2FFFF");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }

    }

}
