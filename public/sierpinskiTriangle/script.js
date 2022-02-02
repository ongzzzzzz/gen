let r3_2 = Math.sqrt(3) / 2;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let tipx = width/2, tipy = 0.2 * height;
	let len = 300;

	triangle(tipx, tipy, 
		tipx - 0.5*len, tipy + r3_2*len,
		tipx + 0.5*len, tipy + r3_2*len
	)
	drawTriangle(tipx, tipy, len);
}

function draw() {

}


function drawTriangle(x, y, l) {
	if (l < 1) return;

	triangle(
		x - 0.25*l, y + 0.5*r3_2*l,
		x + 0.25*l, y + 0.5*r3_2*l,
		x, y + r3_2*l
	);

	drawTriangle(x, y, l/2);
	drawTriangle(x - 0.25*l, y + 0.5*r3_2*l, l/2);
	drawTriangle(x + 0.25*l, y + 0.5*r3_2*l, l/2);
}