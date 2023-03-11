input_text = "";
status = "";
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();  
	video = createCapture(VIDEO);
	video.hide();
  video.size(300,290);
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  input_text = document.getElementById("input").value;
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}