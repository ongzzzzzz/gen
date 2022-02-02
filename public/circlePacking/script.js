let circles = [];
let min_R = 2;
let max_R = 300;
let totCircles = 5000;
let maxTries = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	noFill();
	for (let n = 0; n < totCircles; n++) {
		createCircle();
	}
}


function createCircle() {
	let c;
	let canDraw = false;

	for (let tries = 0; tries < maxTries; tries++) {
		c = {
			x: Math.random() * width,
			y: Math.random() * height,
			r: min_R
		}
		if (hasCollision(c)) continue;
		else {
			canDraw = true;
			break;
		}
	}
	if (!canDraw) return;

	for (let r = min_R; r < max_R; r++) {
		c.r = r;
		if (hasCollision(c)) {
			c.r--;
			break;
		}
	}

	circles.push(c);
	circle(c.x, c.y, 2 * c.r);
}

function hasCollision(circle) {
	for (let i = 0; i < circles.length; i++) {
		let oc = circles[i];
		let R = oc.r + circle.r;
		let distance = dist(oc.x, oc.y, circle.x, circle.y);
		if (R > distance) {
			return true;
		}
	}
	return false;
}




function draw() {

}