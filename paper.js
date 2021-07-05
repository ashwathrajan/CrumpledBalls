class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.image = loadImage("paper.png")
      this.r = radius;
      this.body = Bodies.circle(x,y,radius,options)
      World.add(world, this.body);
      }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      imageMode(CENTER)
      image(this.image,40,25,this.r,this.r)
      pop();
    }
    };