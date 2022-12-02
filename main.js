MoustacheX= ""
MoustacheY= ""

function preload()
{
   Moustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
canvas_1= createCanvas(450,400)
canvas_1.center()
myvideo = createCapture(VIDEO)
myvideo.hide()

myposeN= ml5.poseNet(myvideo,modelloaded)
myposeN.on("pose", myresults)
}

function draw()
{
image(myvideo,0,0,450,400)
//circle(noseX-90, noseY-35, 15)

image(Moustache,MoustacheX-130,MoustacheY-55,50,40)
}

function take_snapshot()
{
save("picture_canvas.jpg")
}

function modelloaded()
{
console.log("Pose net is initialized")
}

function myresults(result)
{
if(result.length > 0)
{
   console.log(result)
   MoustacheX= result[0].pose.nose.x
   MoustacheY= result[0].pose.nose.y
}
}