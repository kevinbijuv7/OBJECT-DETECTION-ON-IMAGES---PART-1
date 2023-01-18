img ="";

function preload()
{
  img = loadImage("four.jpg");
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
    text("Plant", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(20, 20, 450,350);
}
function back()
{
 window.location = "start.html";
}