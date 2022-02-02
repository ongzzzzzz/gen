let rows, cols;
let side = 40;
let noiseInc = 0.1;

let fr;

let particles = [];
let nParticles = 100;

let flowField;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	rows = Math.floor(height / side);
	cols = Math.floor(width / side);

	fr = createSpan('');
	
	for (let i=0; i<nParticles; i++) 
		particles[i] = new Particle();
	
	flowField = new Array(rows*cols);
}

let noiseZ = 0;
function draw() {
	let noiseY = 0;
	for(let y=0; y<rows; y++) {
		let noiseX = 0;
		for (let x=0; x<cols; x++) {
			let r = noise(noiseX, noiseY, noiseZ) * 2*PI * 4;
			noiseX += noiseInc;

			let v = p5.Vector.fromAngle(r)
			
			let idx = x + y*cols;
			flowField[idx] = v;

			// // show flow field
			// push();
			// translate(x*side, y*side);
			// rotate(v.heading());
			// stroke(0, 50); strokeWeight(1);
			// line(0, 0, side, 0);
			// pop();
		}
		noiseY += noiseInc;
	}
	noiseZ += 0.005;
	
	for (let i=0; i<particles.length; i++) {
		particles[i].follow(flowField)
		particles[i].update();
		particles[i].show();
	}

	fr.html(`FPS: ${Math.floor(frameRate())}`)
}