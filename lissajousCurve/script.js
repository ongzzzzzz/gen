// ( A sin(at+d) , B cos(bt)  )	

const fr = 30;
let capturer = new CCapture({ format: "webm", frameRate: fr });
let div, btn;

let recording = false;

function setup() {
	createCanvas(windowWidth, windowHeight);

	if (recording) {
		div = createDiv("0 seconds recorded!")
		btn = createButton("Save").mousePressed(() => capturer.save());
	}
}

let A = 200;
let B = 200;
let a = 10;
let b = -10;
let d = 0;

function f(t) {
	return [A * sin(a * t + d), B * cos(b * t)];
}

let bound = Math.PI;
let t = -bound;
let dt = 0.001;

let aSwitched = false;
let bSwitched = false;

let dVar = 0.005;
let varBound = 12;

function draw() {
	if (recording && frameCount === 1) capturer.start();

	background(0);
	t = -bound;

	if (aSwitched) a += dVar
	else a -= dVar

	if (bSwitched) b += dVar
	else b -= dVar

	if (a > 10) aSwitched = false
	if (a < 4) aSwitched = true

	if (b > -8) bSwitched = false
	if (b < -12) bSwitched = true

	text(`a: ${round(a, 2)} b: ${round(b, 2)}`, 10, 10)

	noFill();
	stroke("white");
	strokeWeight(1);
	beginShape();
	curveVertex(A * sin(a * -bound + d) + width / 2, height / 2 - B * cos(b * -bound));
	while (t < bound) {
		let [x, y] = f(t);
		curveVertex(x + width / 2, height / 2 - y);
		t += dt;
	}
	curveVertex(A * sin(a * (bound + dt) + d) + width / 2, height / 2 - B * cos(b * (bound + dt)));
	curveVertex(A * sin(a * (bound + dt) + d) + width / 2, height / 2 - B * cos(b * (bound + dt)));
	endShape();


	if (recording) {
		capturer.capture(document.getElementById("defaultCanvas0"));
		div.html(`${floor(frameCount / fr)} seconds recorded`);
		// if (frameCount > fr * 60 * 10) {
		// 	// after 10 minutes
		// 	createDiv("Recording stopped, too long!");
		// 	capturer.stop();
		// 	noLoop();
		// }
	}
}