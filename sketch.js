let x = 100;
let y = 100;

var enemys = []

var enemy;
var player;
var inven;

var data = {}; // Global object to hold results from the loadJSON call
var sword = []; // Global array to hold all bubble objects

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  data = loadJSON('player/item.json');
}

function setup() {
  createCanvas(windowWidth*0.75, windowWidth/3);
  background(51);

player1Colour = new colour(255,0,0)



  player = new Player(width - 25, 100,  player1Colour)
  enemy = new Enemy(600, 100);
  inven = new Inventory(data);
  // enemy2 = new enemy(200, 300);

  // enemy.x = random(0, windowWidth )
  // enemy.y = random(0, 600)

  for(var i=0; i<=3; i++) {
    enemys.push(new Enemy(random(1, width), random(1, height)));
  }

  noStroke()
}
  


function draw() {
    noStroke()
  
  background(51);
  
  if (player.lifePoints <= 0){
    noLoop()
    console.log('GameOver')
  }
    
for(e = 0; e<=enemys.length-1; e++) {
  enemys[e].draw()
  enemys[e].move(player)

  player.lifePointsCount(enemys[e]);
}

    // enemy.draw();
    // // enemy2.draw();
    // enemy.3 .l mnkjgijb,n,o ;p.[-,move(player);
    // // enemy2.move();


    player.draw();
    player.move(enemys[e]);
    
    
    inven.activeItem()
    inven.show()

 
}
function update(){
    
  
    

}
  