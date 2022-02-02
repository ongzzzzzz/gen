let step = 50;
let dec = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// // draw 1 big square with stuff inside
	// let bigW = 0.75*height;
	// translate(width/2 - bigW/2, height/2 - bigW/2);
	// // think of 0.5 and 0.8 as coords in 1 by 1 square
	// let drawSq = curryDrawSquare(0.5, 0.8);
	// drawSq(0, 0, bigW);

	for (let y=0; y<height; y+=step) {
		for (let x=0; x<width; x+=step) {
			let dx = Math.random()*dec - dec/2
			let dy = Math.random()*dec - dec/2
			let drawSq = curryDrawSquare(dx, dy);
			drawSq(x, y, step);
		}
	}
}

function draw() {
	
}

function curryDrawSquare(dx, dy) {
	return function drawSquares(x, y, w) {
		if (w < 1) return
		square(x - w/2, y - w/2, w);

		drawSquares(x + dx, y + dy, w - dec)
	}
}