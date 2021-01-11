class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.birdpos=[];
    this.smoke= loadImage("sprites/smoke.png")
  }

  display() {
    if(this.body.position.x>200&&this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y]
      this.birdpos.push(position)
    }
    for(var i=0;i<this.birdpos.length;i++){
image(this.smoke,this.birdpos[i][0],this.birdpos[i][1])

    }
  
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
