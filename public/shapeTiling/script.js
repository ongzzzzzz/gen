let step = 20;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);


	fill("black")

	for (let y=0; y<height; y+=step) {
		for (let x=0; x<width; x+=step) {
			let random = Math.random();
			let o = Math.floor(Math.random() * 4);

			if (0.00 <= random && random < 0.33)
				drawSquare(x, y, o)
			if (0.33 <= random && random < 0.66)
				drawTriangle(x, y, o)
			if (0.66 <= random && random < 1.00)
				drawCircle(x, y, o)
		}
	}

	// drawTriangle(0, 0, 3);
	// drawCircle(0, 0, 3);
}

function draw() {
	
}

function drawTriangle(x, y, orientation=0) {
	let points = [
		x, y, 
		x, y+step, 
		x+step, y, 
		x+step, y+step
	];
	points = points.filter((e, i) => {
		// filter out points according to orientation
		return !( (i == 2*orientation) || (i-1 == 2*orientation) )
	});

	triangle(...points);
}

function drawSquare(x, y, orientation=0) {
	if (orientation%2 == 0) {
		square(x, y, step/2);
		square(x+step/2, y+step/2, step/2);
	}
	else {
		square(x+step/2, y, step/2);
		square(x, y+step/2, step/2);		
	}
}

function drawCircle(x, y, orientation=0) {
	circle(x+step/2, y+step/2, step/2);
}