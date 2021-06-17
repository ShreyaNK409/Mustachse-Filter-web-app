nose_x=0;
nose_y=0;


function preload()
{
 reindeer_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png") ;
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);

}

function modelLoaded() {
  console.log("model Loaded!");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    nose_x=results[0].pose.nose.x-23;
    nose_y=results[0].pose.nose.y+1;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(reindeer_nose,nose_x,nose_y,55,50);
}

function takesnapshot() 
{
  save("myReindierSelfie.png");
}