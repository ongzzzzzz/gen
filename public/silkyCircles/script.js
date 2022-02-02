let x=0, y=0;
let vx=2, vy=0.5;
let r = 5;

let colors;
let c;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	colors = [
		color("rgba(255,   0,   0, 0.2)"),
		color("rgba(  0, 255,   0, 0.2)"),
		color("rgba(  0,   0, 255, 0.2)"),
		color("rgba(255, 255,   0, 0.2)"),
		color("rgba(255,   0, 255, 0.2)"),
		color("rgba(  0, 255, 255, 0.2)"),
		color("rgba(255, 255, 255, 0.2)"),
	]
	c = random(colors)
}

function draw() {
	// background(0)
	drawBlob(x, y, r, c)
	
	x += vx;
	y += vy;

	if (x > width + 2*r) {
		x = 0;
		c = random(colors)
	}
	if (y > height + 2*r) noLoop();
}


function drawBlob(cx, cy, base, color, repeats=1, segs=20) {
	let dTheta = 2*PI / segs

	push();
	translate(cx, cy);
	for (let n=0; n<repeats; n++) {
		let points = [];
		for (let theta=0; theta<2*PI; theta+=dTheta) {
			let r = base + noise(100*theta + n/50 + frameCount/100)*200;
			let x = r*cos(theta), y = r*sin(theta)
			points.push({ x, y })
		}

		noFill()
		stroke(color)
		beginShape();
		curveVertex(points[0].x, points[0].y);
		points.forEach((point, i) => {
			let {x, y} = point;
			// circle( x, y, 5 )
			curveVertex(x, y);
		})
		curveVertex(points[0].x, points[0].y);
		curveVertex(points[0].x, points[0].y);
		endShape();
	}
	pop();
}