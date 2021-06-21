var backGround;
var cat, catimg1, catimg2, catimg3
var mouse, mouseimg1, mouseimg2, mouseimg3
function preload() {
    backGround = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseimg3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite (870, 600, 400, 300)
    cat.addAnimation("sleepingCat", catimg1)
    cat.scale = 0.2
    mouse = createSprite (200, 600, 400,300)
    mouse.addAnimation("standingMouse", mouseimg1)
    mouse.scale = 0.15

}

function draw() {

    background(backGround);
    if (cat.x-mouse.x < cat.width/2-mouse.width/2) {
        cat.velocityX=0
        cat.addAnimation("lastCat", catimg3)
        cat.x=300
        cat.changeAnimation("lastCat")
        mouse.addAnimation("lastMouse", mouseimg3)
        mouse.changeAnimation("lastMouse")
    }

    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW) {
    cat.velocityX=-5
    cat.addAnimation("runningCat", catimg2)
    cat.changeAnimation("runningCat")
    mouse.addAnimation("teasingMouse", mouseimg2)
    mouse.frameDelay=25
    mouse.changeAnimation("teasingMouse")
}


}
