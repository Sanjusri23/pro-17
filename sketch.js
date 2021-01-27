var sword,swordimg,fruit1,fruit1img,fruit2,fruit2img,fruit3,fruit3img,fruit4,fruit4img,score,fruitGroup,EnemyGroup,monster_moving,gameover,gameoverimg,knifesound,gameoversound;
var PLAY=1;
var END=0;
var GameState=PLAY;

function preload(){
   swordimg  = loadImage("sword.png");
   fruit1img = loadImage("fruit1.png");
   fruit2img = loadImage("fruit2.png");
   fruit3img = loadImage("fruit3.png");
   fruit4img = loadImage("fruit4.png");
   monster_moving= loadImage("alien1.png","alien2.png");
   gameoverimg = loadImage("gameover.png");
   knifesound=loadSound("knifeSwooshSound.mp3");
   gameoversound=loadSound("gameover.mp3");
}
function setup(){
  createCanvas(400,400)
  
  sword = createSprite(350,200,30,10);
  sword.addImage(swordimg);
  sword.scale=0.6;
    
   gameover = createSprite(300,100,10,10);
   gameover.addImage(gameoverimg);
   gameover.visible = false;
  
fruitGroup=createGroup();
EnemyGroup=createGroup();
  
}
score=0;
function draw(){
     background(220);
  text("Score: "+ score, 300,50);
  
  sword.y = World.mouseY
  sword.x = World.mouseX
  
  
  
  if(GameState===PLAY){
  if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
     knifesound.play();
      score=score+2;
   }
    if(EnemyGroup.isTouching(sword)){
        GameState = END;
       gameoversound.play();
  }
    fruits();
    Enemy();
  
  }
   
  else if(GameState===END){
    gameover.addImage(gameoverimg);
    gameover.visible = true;
                
  }

    
  
  drawSprites();
}


function fruits(){
  if(World.frameCount%80===0){
    position=Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1img);
    } else if (r == 2) {
      fruit.addImage(fruit2img);
    } else if (r == 3) {
      fruit.addImage(fruit3img);
    } else {
      fruit.addImage(fruit4img);
    }
    
    fruit.y=Math.round(random(50,340));
   
   fruit.lifetime=100;
   
    

   
    if(position==1)
    {
      fruit.x=400;
      fruit.velocityX=-(7+(score/4));
    }
    else
      {
        if(position==2){
          fruit.x=0;
         fruit.velocityX=(7+(score/4));
      } 
      }
     fruitGroup.add(fruit);
  }
} 
function Enemy(){
   if(World.frameCount%200===0){
     monster=createSprite(400,200,20,20);
     monster.addImage("moving",monster_moving);
     monster.y=Math.round(random(100,300));
     monster.velocityX=-(8+(score/10));
     monster.setLifetime=50;
     EnemyGroup.add(monster);
   }
  
}
  































