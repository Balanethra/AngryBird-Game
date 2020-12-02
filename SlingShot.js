class SlingShot {
    constructor(bodyA,pointB){
        var options ={
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            pointB:pointB,
        } 
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);      
     }
     fly(){
        this.sling.bodyA=null;
     }

    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}