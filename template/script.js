let colorlist = ['gold', 'yellow', 'turquoise', 'red']


// let recording = false, fr = 30, div, btn;
// let capturer = new CCapture({ format: "webm", frameRate: fr });
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// if (recording) {
	// 	div = createDiv("0 seconds recorded!");
	// 	btn = createButton("Save").mousePressed(() => capturer.save());
	// }
}

function draw() {
	// if (recording && frameCount === 1) capturer.start();



	noStroke()
	fill(random(colorlist));
	ellipse(mouseX, mouseY, 25, 25);



	// if (recording) {
	// 	capturer.capture(document.getElementById("defaultCanvas0"));
	// 	div.html(`${floor(frameCount / fr)} seconds recorded`);
	// }
}