img ="";

function preload()
{
  img = loadImage("three.jpg");
}

function setup()
{

    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Pen", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(340, 20, 150,400);
}
function back()
{
 window.location = "start.html";
}