class Rope{
    constructor(bodyA,PointB){
        Option = {bodyA:bodyA,pointB:PointB,length:300,stiffness:1.1}
        this.rope = Constraint.create(Option)
        World.add(world,this.rope)
    }
    display(){
        var pa = this.rope.bodyA.position
        var pb = this.rope.pointB
        strokeWeight(3)
        fill("red")
        line(pb.x,pb.y,pa.x,pa.y)

    }
}