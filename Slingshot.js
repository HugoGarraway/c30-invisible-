class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,28,8)
            if(pointA.x<220) {
                strokeWeight(7.8758);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
                image(sling3,pointA.x-30,pointA.y-10,15,30)

            }
 else{
    strokeWeight(4.6767);
    stroke("red")
    line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
    image(sling3,pointA.x+25,pointA.y-10,15,30)
 } pop()        
        }
    }
    
}