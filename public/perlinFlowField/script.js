let rows, cols;
let side = 10;
let noiseInc = 0.1;

let fr;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	rows = Math.floor(height / side);
	cols = Math.floor(width / side);

	fr = createP('');
}

function draw() {
	background(255);
	
	let noiseY = 0;
	for(let y=0; y<rows; y++) {
		let noiseX = 0;
		for (let x=0; x<cols; x++) {
			let r = noise(noiseX, noiseY) * 2*PI;
			noiseX += noiseInc;

			let v = p5.Vector.fromAngle(r)
			push();
			translate(x*side, y*side);
			rotate(v.heading());
			line(0, 0, side, 0);
			pop();

			// fill(r);
			// rect(x*side, y*side, side, side)
		}
		noiseY += noiseInc;
	}

	// fr.html(Math.floor(frameRate()))
}