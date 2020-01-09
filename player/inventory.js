function Inventory(data){
    //Pass data to local 
    this.data = data
    
    //declare local grid settings
    this.width = width/2 -  width*0.1;
    this.height = height - height*0.1;
    this.x = width*0.3;
    this.y = height*0.05;
    this.sepx = this.width/10;
    this.sepy = height/10;
    
    //displaying items buffer
    this.itemSepy = height/10 + 4;


    this.activeItem = function() {
        
        // var swordData = data['Swords'];
        // for (var i = 0; i < swordData.length; i++) {
        //     // Get each object in the array
            
        //     var sword = swordData[i];
        //     // Get a position object
        //     var position = sword['position'];
        //     var colour = sword['colour'];
        //     // Get this.x,y from position
        //     var x = position['x'];
        //     var y = position['y'];
            

        //     // fill(colour)
        //     // ellipse(this.x, this.y, 100, 100)
        //     // if (keyIsDown(69)){var key = 69}

        //     // if (sword['ID'] == key){
        //     //     this.swordName = sword['Name'];
        //     //     this.Damage = sword['Damage'];
        //     //     this.position = sword['x', 'y']
        //     // }
        // }
    }

    // var swordWidth = sword['width']
    // var swordHeight = sword['height']
    // var itemID = sword['ID']

    this.show = function(){
        if(keyIsDown(70)) {
            console.log(this.data);
        }
        if (keyIsDown(69)) {
            this.displayGrid()    
            this.displayItemsInGrid()
            // items
            //rect(this.x  + (itemSepy*itemID), this.y, swordWidth, swordHeight)
        } 
    }

    this.displayGrid = function() {
        fill(255, 255, 255, 1);
        stroke(255, 255, 255)
        strokeWeight(10)
        rect(this.x, this.y , this.width, this.height)
        
        noStroke()
        
        fill(255, 255, 255);
        // coloums
        rect(this.x+this.sepx, this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*2), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*3), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*4), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*5), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*6), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*7), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*8), this.y, this.width*0.01, this.height)
        rect(this.x+(this.sepx*9), this.y, this.width*0.01, this.height)

        // rows
        rect(this.x, this.y +(this.sepy*1), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*3), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*4), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*5), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*2), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*6), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*7), this.width, this.height*0.01)
        rect(this.x, this.y +(this.sepy*8), this.width, this.height*0.01)

    }

    this.displayItemsInGrid = function() {
        console.log("display Items", this.data);

        this.data.forEach((item) => {
            // console.log(item);
                console.log("voices")
        })
    }
}