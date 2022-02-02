let cols = 23;
let rows = 16;
let days = 365;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let gridw = width * 0.9, gridh = height * 0.7;
	let cellw = gridw / cols, cellh = gridh / rows;
	let marX = 0.5 * (width - gridw), marY = 0.5 * (height - gridh);

	for (let d=0; d<days; d++) {
		let col = Math.floor(d / rows);
		let row = d % rows;

		let x = marX + col * cellw;
		let y = marY + row * cellh;
		let w=2, h=30;

		push();
		translate(x, y);

		let cell = createGraphics(cellw, cellh);

		cell.translate(0.5*cellw, 0.5*cellh);

		let phi = (d / days) * Math.PI;
		let theta = Math.sin(phi) * (Math.PI/2) + Math.PI/4;
		cell.rotate(theta)

		let s = Math.abs(Math.cos(phi)) * 2 + 1;
		cell.scale(s, 1);

		cell.fill("black");
		cell.rect(-0.5*w, -0.5*h, w, h);

		image(cell, 0, 0)
		pop();

		// fill("white")
		// circle(x, y, 5)
	}
}

function draw() {

}