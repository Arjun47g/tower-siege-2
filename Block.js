class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed < 2){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

        }
        else{
         World.remove(world, this.body);
         push();
         this.visibility -= 1;
         pop();
        }

      }
}