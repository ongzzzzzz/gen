function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

let step = 20;
let chillFactor = 0.01

function draw() {
	background(255)
	for (let y=0; y<height; y+=step) {
		for (let x=0; x<width; x+=step) {
			fill( 255 * noise(x+(mouseX*chillFactor)) );
			circle(x, y, 2*step * noise(y+(mouseY*chillFactor)) );
		}
	}
}