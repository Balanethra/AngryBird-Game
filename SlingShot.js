class SlingShot {
    constructor(bodyA,pointB){
        var options ={
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            pointB:pointB,
        } 
        this.pointB=pointB;
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
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
            push();
            stroke(48,22,8);
       if(pointA.x<220){
        strokeWeight(8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+25,pointB.y);
        image(this.sling3,pointA.x-25,pointA.y-5,15,20);
       }
       else{
        strokeWeight(4);
        line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+20,pointA.y,pointB.x+ 25,pointB.y);
        image(this.sling3,pointA.x+25,pointA.y-5,15,20);
       }
       pop();  
        }
        image(this.sling1,200,20);
        image(this.sling2,170,20)
       
    }
}