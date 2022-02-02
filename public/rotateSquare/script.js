let step = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	for (let y=50; y<height-50; y+=step) {
		for (let x=50; x<width-50; x+=step) {
			let randomRotate = Math.random() * (1 - y/height)
			let randomShearX = Math.random() * (x/width) * (1 - y/height)
			let randomShearY = Math.random() * (1 - x/width) * (1 - y/height)
			
			push()
			translate(x, y)
			rotate(randomRotate)
			shearX(randomShearX)
			shearY(randomShearY)
			square(-step/2, -step/2, step);
			pop()
		}
	}
}

function draw() {
	
}