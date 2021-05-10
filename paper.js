class paper{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.body=Bodies.circle(x,y,r/2,options)
    World.add(world,this.body)
    this.image=loadImage("paper.png")
    this.r=r
}
display(){
    var pos=this.body.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.r,this.r)
    
}
}





   