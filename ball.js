class Ball{
    constructor(x,y,radius){
         var Option = {frictionAir:0.005,density:1}
         this.body = Bodies.circle(x,y,radius,Option)
         this.radius = radius
         World.add(world,this.body)
    }
display(){
var p = this.body.position
var a = this.body.angle
push()
translate(p.x,p.y)
rotate(a)
ellipseMode(RADIUS)
fill("green")
ellipse(0,0,this.radius) 
pop();
}
}