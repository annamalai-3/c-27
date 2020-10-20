class Slingshot{

constructor(OBJA,OBJB){
    var options={
    bodyA:OBJA ,
    bodyB:OBJB,
    stiffness:0.2,
    length:10


    }

 this.chain = Constraint.create(options);
 World.add(world,this.chain);



}
display(){
var a = this.chain.bodyA.position;
var b = this.chain.bodyB.position;

  line(a.x,a.y,b.x,b.y);


}




}