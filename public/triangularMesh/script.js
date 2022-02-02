function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let step = 20;
	let lines = [];
	let odd = false;
	for (let y = step / 2; y <= height; y += step) {
		odd = !odd;

		let line = [];
		for (let x = step / 4; x <= width; x += step) {
			line.push({ 
				x: x + (Math.random()*.8 -.4) * step + (odd ? step / 2 : 0), 
				y: y + (Math.random()*.8 -.4) * step
			});
		}

		lines.push(line)
	}

	// lines.forEach(line => line.forEach(p => {
	// 	circle(p.x, p.y, 5);
	// }))

	let dotLine;
	odd = true;

	for (var y = 0; y < lines.length - 1; y++) {
		odd = !odd;
		dotLine = [];

		// get points in a zigzag fashion
		for (var i = 0; i < lines[y].length; i++) {
			dotLine.push(odd ? lines[y][i] : lines[y + 1][i]);
			dotLine.push(odd ? lines[y + 1][i] : lines[y][i]);
		}

		// draw triangle between every trio of points in zigzag
		for (var i = 0; i < dotLine.length - 2; i++) {
			drawTriangle(dotLine[i], dotLine[i + 1], dotLine[i + 2]);
		}
	}
}

function drawTriangle(a, b, c) {
	fill(Math.floor(Math.random()*255) + 1)
	triangle(a.x, a.y, b.x, b.y, c.x, c.y)
}

function draw() {

}