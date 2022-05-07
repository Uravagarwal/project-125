
diffrence= 0;
rightWrist= 0;
leftWrist= 0;

function setup()
{
    vidio = createCapture(VIDEO);
    vidio.size(510,500);
    vidio.position(50)

    canvas = createCanvas(550,450)
    canvas.position(800)

    posenet = ml5.poseNet(vidio,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("hi");
}

function gotPoses(results)
{
  if(results.length>0)
  {
      console.log(results);
      rightWrist = results[0].pose.rightWrist.x;
      leftWrist = results[0].pose.leftWrist.x;
      diffrence = floor(leftWrist-rightWrist);
      console.log("rightWrist = "+rightWrist+"leftWrist = "+leftWrist+"diffrence = "+diffrence);
  }
}

function draw()
{
    background("yellow");
    textSize(diffrence);
    fill("red");
    text('Malthi',10 ,250);
    document.getElementById("square_size").innerHTML ="The Width and Hight of the square = "+diffrence+"px"
}

