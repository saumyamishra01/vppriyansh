//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
	dogImg = loadImage("dog.png.png");
  dogImg1 = loadImage("happy.png.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,200,150,150)
  dog.addImage("dog",dogImg)
  dog.scale = 0.1
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock)
  
  
 
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog",dogImg1);
    
  }

  drawSprites()
  textSize(20)
  fill("black")
  text("Food Remaining : " + foodS, 170, 200)
  stroke(3)
  text("Note: Press UP_ARROW Key to Feed my Dog Drago Milk !!", 130, 10, 300, 20);

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



