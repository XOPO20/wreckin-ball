class Box{
    constructor(x,y,width,height){
         var Option = {restitution:0.8,friction:1,density:0.4}
         this.body = Bodies.rectangle(x,y,width,height,Option)
         this.width = width
         this.height = height
         World.add(world,this.body)
    }
display(){
var p = this.body.position
var a = this.body.angle
push()
translate(p.x,p.y)
rotate(a)
rectMode(CENTER)
fill("black")
rect(0,0,this.width,this.height) 
pop();
}
}