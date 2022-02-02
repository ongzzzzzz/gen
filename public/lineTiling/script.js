let size = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(255);
	// // slanted lines
	for (let y=0; y<height; y+=size) {
		for (let x=0; x<width; x+=size) {
			if (Math.random() > 0.5) {
				line(x, y, x+size, y+size);
			}
			else {
				line(x+size, y, x, y+size);
			}
		}
	}

	// straight lines
	// for (let y=0; y<height; y+=size) {
	// 	for (let x=0; x<width; x+=size) {
	// 		if (Math.random() > 0.5) {
	// 			line(x+(size/2), y, x+(size/2), y+size);
	// 		}
	// 		else {
	// 			line(x, y+(size/2), x+size, y+(size/2));
	// 		}
	// 	}
	// }
}

function draw() {
	
}