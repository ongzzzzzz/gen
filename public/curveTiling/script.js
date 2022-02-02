
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let x=0, y=0;
	let step=20;
	stroke("black");
	noFill();

	for(let y=0; y<height; y+=step) {
		for (let x=0; x<width; x+=step) {
			if (Math.random() > 0.5) {
				beginShape();
				vertex(x, y+(step/2));
				quadraticVertex(x+(step/2), y+(step/2), x+(step/2), y+step)
				endShape();

				beginShape();
				vertex(x+(step/2), y);
				quadraticVertex(x+(step/2), y+(step/2), x+step, y+(step/2))
				endShape();
			}
			else {
				beginShape();
				vertex(x, y+(step/2));
				quadraticVertex(x+(step/2), y+(step/2), x+(step/2), y);
				endShape();

				beginShape();
				vertex(x+(step/2), y+step);
				quadraticVertex(x+(step/2), y+(step/2), x+step, y+(step/2))
				endShape();
			}
		}
	}
	
}

function draw() {

}