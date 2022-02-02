function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let step = 50;
	stroke(color("rgba(0, 0, 0, 0.2)"));
	noFill();

	for (let t=0; t<100; t++) {
		let points = []
		for (let x=0; x<width+step; x+=step) {
			let random = noise(x+(0.01*t))*200;
			let point = { x, y: height/2 + random };
			points.push(point)
		}
		beginShape();
		points.forEach((point, i) => {
			curveVertex(point.x, point.y);
			if (i == 0 || i == points.length-1) 
				curveVertex(point.x, point.y);
		})
		endShape();
	}
}

function draw() {
	
}