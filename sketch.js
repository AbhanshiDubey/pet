//Create variables here
var  dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  scale(0.1);
  happyDog = loadImage ("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
 foodStock = database.ref('Food');
 foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);

}

  drawSprites();
  //add styles here
  writeStock();

}

function writeStock (x){

  if(x<=0){
x=0;
  }else{
x=x-1;
  }
  database.ref('/').update({
Food:x
  })
}

function readStock (data){
  foodS = data.val();
}

function writeStock (x) {
  database.ref('/').update({
    Food:x
  })
}




