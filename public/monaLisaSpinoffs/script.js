let monaLisa;

function preload() {
	monaLisa = loadImage('mona_lisa.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	monaLisa.resize(0, windowHeight)

	let d = 10;
	
	push()
	translate((width - monaLisa.width)/2, 0)
	// image(monaLisa, 0, 0)

	for (let y=0; y<monaLisa.height; y+=d) {
		for (let x=0; x<monaLisa.width; x+=d) {
			let c = monaLisa.get(x, y);
			noStroke();
			fill(c)
			circle(x, y, d);
		}
	}
	pop()
}

function draw() {
}