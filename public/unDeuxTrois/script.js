function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let step = 20;
	strokeWeight(3);
	for (let y=step; y<height-step; y+=step) {
		for (let x=step; x<width-step; x+=step) {
			if (y < height / 3)
				drawSeggs(x, y, step, step, [0.5])
			else if (y < height * 2/3)
				drawSeggs(x, y, step, step, [0.2, 0.8])
			else
				drawSeggs(x, y, step, step, [0.1, 0.5, 0.9])
		}
	}
}


function drawSeggs(x, y, w, h, positions) {
	push();
	translate(x + w/2, y + h/2);
	rotate(Math.random()*5);
	translate(-w/2, -h/2);
	positions.forEach(pos => {
		line(pos * w, 0, pos * w, h);
	})
	pop();
}

function draw() {

}