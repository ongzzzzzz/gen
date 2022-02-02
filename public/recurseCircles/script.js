let colors = [
	"hsla(192,49%,35%, 0.5)", 
	"hsla(185,28%,44%, 0.5)", 
	"hsla(172,20%,52%, 0.5)", 
	"hsla(156,21%,60%, 0.5)", 
	"hsla(139,23%,65%, 0.5)"
];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(color("hsla(197,92%,25%,1.0)"));
	
	noStroke()
	drawCircles(width/2, height/2, 0.4*height, 0)
}

function draw() {

}

// n-gon
let n = 3;
function drawCircles(x, y, r, depth) {
	if (r < 1) return;

	push()
	translate(x, y);
	
	fill(color( colors[constrain(depth, 0, colors.length-1)] ))
	fill(color( colors[depth%(colors.length)] ))
	// draw main circle
	circle(0, 0, 2*r)

	// centers of nested circles lie on this new_r circle
	let new_r = r/2;
	// circle(0, 0, 2*new_r)

	// generate points for evenly spaced nested circles
	let new_points = []
	for (let t=0; t<2*PI; t+=(2*PI/n)) {
		new_points.push({
			x: new_r * cos(t-PI/2), 
			y: new_r * sin(t-PI/2),
		});
	}

	// draw new circles
	new_points.forEach(point => {
		circle(point.x, point.y, 2*new_r);
		drawCircles(point.x, point.y, new_r, depth+1);
	})

	pop()
}