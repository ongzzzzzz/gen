let iniL = 50;
let maxn = 5;
let ntrees = 50

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);


	// // one tree
	// strokeWeight(5);
	// let inix = width/2, iniy = height - iniL;
	// line(inix, iniy, inix, iniy+iniL);

	// drawBranches(inix, iniy, iniL, 0)


	// circular tree thing
	translate(width/2, height/2);
	for (let theta=0; theta<2*PI; theta += 2*Math.PI/ntrees) {
		push()
		rotate(theta)

		strokeWeight(5);
		line(0, 0, 0, iniL);
		drawBranches(0, -iniL, iniL, 0);
		pop()
	}
	
}

function draw() {

}

function drawBranches(x, y, maxL, n) {
	if (n > maxn || maxL < 0) return

	for (let i=0; i<2; i++) {
		let dx = randbtwn(-maxL, maxL);
		let dy = maxL + Math.random()*10;
		strokeWeight(constrain(maxL/iniL*5, 1, 5))
		line(x, y, x+dx, y-dy);
		drawBranches(x+dx, y-dy, maxL - 10, n+1);
	}
}


function randbtwn(min, max) {
  return Math.random() * (max - min) + min;
}