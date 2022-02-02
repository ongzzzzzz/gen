let step = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let lines = [];

	for (let y=0; y<height; y+=step) {
		let line = [];
		for (let x=0; x<width; x+=step) {
			// more displacement towards middle
			let distanceToCenter = Math.abs(x - width / 2);
			let variance = -Math.max(width / 2 - distanceToCenter - 50, 0);
			let random = Math.random() * variance / 4;

			// // more displacement towards corner
			// let distanceToCorner = Math.abs(((width-x) + (height-y))/2);
			// let variance = -Math.max((width+height) / 4 - distanceToCorner - 50, 0);
			// let random = Math.random() * variance / 4;

			let point = { x: x, y:y+random };
			line.push(point);
		}
		lines.push(line);
	}

	stroke("black");
	noFill();
	lines.forEach(line => {
		beginShape();
		line.forEach((point, i) => {
			curveVertex(point.x, point.y);
			if (i == 0 || i == line.length-1) 
				curveVertex(point.x, point.y);
		})
		endShape();
	})
}

function draw() {
	
}