var bgimage
var bg
var godzillaImage 
var godzilla
function preload(){
  bgimage=loadAnimation('./city.gif')
  godzillaImage=loadAnimation('1.png','2.png','3.png','4.png')
}
function setup() 
{
  createCanvas(1000,400);
/*bg=createSprite(0,0,1000,400)
bg.addAnimation('shitty',bgimage)
bg.scale=1.5*/
godzilla=createSprite(150,150)
godzilla.addAnimation('GODZILLA', godzillaImage)
godzilla.scale = 0.5
}

function draw() 
{
  background('white');
  drawSprites()
}

 

