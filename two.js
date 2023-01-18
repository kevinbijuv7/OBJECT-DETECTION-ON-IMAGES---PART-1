img ="";

function preload()
{
  img = loadImage("two.jpg");
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
    text("Laptop", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(20, 20, 600,400);
}
function back()
{
 window.location = "start.html";
}