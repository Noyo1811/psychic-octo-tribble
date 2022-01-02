lipstick = ""
moustache = ""
function setup(){
 canvas =   createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,ModelLoaded);
poseNet.on("pose",gotPoses)
}
function ts (){
    save("MyFilterPng.png")
}
function preload(){
    image1= loadImage("https://i.postimg.cc/L40NT3bj/lipstick-kiss-transparent-png.png");
    image2= loadImage("https://i.postimg.cc/wvnF66J0/41101-8-fake-moustache-download-hq-png.png")
}




function ModelLoaded(){
    console.log("poseNet is Initialized !!")

}
function gotPoses(results){
    if (results.length > 0){
    console.log(results);
    console.log("nose x =" +results[0].pose.nose.x)
    console.log("nose y =" +results[0].pose.nose.y) 
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    }
}

function draw(){
    image(video,0,0,400,400)
if (lipstick==true){
image(image1,noseX-20,noseY+20,50,20)
document.body.style.background= url("m.jpg")
}
if (moustache==true){
    image(image2,noseX-5,noseY+5,50,20)
    document.body.style.background= url("m.jpg")
}
}

function Lipstick(){
 lipstick=true;   
}
function Moustache(){
    moustache=true;
}

