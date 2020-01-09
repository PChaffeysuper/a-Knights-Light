function Enemy(x, y){
    var x, y
        this.speed = random(1.5, 3.5);
        this.x = x;
        this.y = y;
        this.colour = (0,255,0);
        this.height= 37.5;
        this.width = 37.5;


    this.draw = function(){
        fill(0,255,0);
        ellipse(this.x, this.y, this.height, this.width);
    }
    this.move = function(p){

            if (this.x < p.x){
                this.x += this.speed;
            }
            if( this.x > p.x){
                this.x -= this.speed;
            }
            if( this.y > p.y){
                this.y -= this.speed;
            }
            if( this.y < p.y){
                this.y += this.speed;
            }

        
        
         
    
    }
}