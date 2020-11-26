function Ball() {
    if(getGameDir() == "L"){
        this.x = 700;
    }
    else{
        this.x = 150;
    }
    
    this.y = 370;

    this.r = 16; //Radius of ball

    if(getGameDir() == "L"){
        this.angle = 50;
    }
    else{
        this.angle = -50;
    }
    
    this.jumpspeed = -3;
    this.speed = this.jumpspeed;
    
    this.color = "#006666";
    this.g = 0.4;
    this.jumping = false;
    this.image = document.getElementById("ball");
    var hitground = document.getElementById("audiohitground");
}

Ball.prototype.draw = function (context) {
    /*context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();*/
    
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.drawImage(this.image, -this.r, -this.r,this.r*2,this.r*2);
    context.restore();
};

Ball.prototype.update = function () {
    if (this.jumping){
        this.y += this.speed;
        this.speed += this.g;
        
        if (this.y < 0){
            this.jumping = true;
            this.y = 30;
            return false;
        }

        if (this.y > 430){
            this.jumping = false;
            this.y = 420;
            return true;
        }
    }
    else {
        this.angle += -0.5;
    }

    return false;
 };

Ball.prototype.jump = function () {
    if (this.jumping == false){
        this.jumping = true;
    }

    this.speed = this.jumpspeed;
 }
 
Ball.prototype.getRect = function () {
  return new Rectangle(this.x - this.r, this.y - this.r, this.r*2, this.r*2);
}
