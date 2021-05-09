class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
     this.body=Bodies.circle(x,y,60,options)
     this.r=30
     World.add(world,this.body)
    this.bo=loadImage("paper.png");
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill("red")
        image(this.bo,0,0,this.r,this.r);
        pop();
    }
}