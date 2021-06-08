noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('Beard.png');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0)
        console.log(results);
    noseX = results[0].pose.nose.x - 75;
    noseY = results[0].pose.nose.y - 10;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);

}

function draw() {
    image(video, 0, 0, 600, 400);
    image(clown_nose, noseX, noseY, 150, 100)
}

function take_snapshot() {
    save('picture.png');
}