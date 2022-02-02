
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// translate(width/2, height/2);
	// // for (let t=0; t<2*PI; t+=dt) {
	// // 	fill((t/(2*PI))*255)
	// // 	circle(100, 0, 5);
	// // 	rotate(t)
	// // }
	// let dTheta = 2*PI / 20
	// let base = 100;

	// for (let n=0; n<100; n++) {
	// 	let points = [];
	// 	for (let theta=0; theta<2*PI; theta+=dTheta) {
	// 		let r = base + noise(100*theta + n/50)*100;
	// 		let x = r*cos(theta), y = r*sin(theta)
	// 		points.push({ x, y })
	// 	}

	// 	noFill()
	// 	stroke(color("rgba(0,0,0,0.2)"))
	// 	beginShape();
	// 	points.forEach((point, i) => {
	// 		let {x, y} = point;
	// 		// circle( x, y, 5 )

	// 		curveVertex(x, y);
	// 		if (i == 0) curveVertex(x, y);
	// 	})
	// 	curveVertex(points[0].x, points[0].y);
	// 	curveVertex(points[0].x, points[0].y);
	// 	endShape();
	// }
}

function draw() {
	background(255)

	translate(width/2, height/2);
	// for (let t=0; t<2*PI; t+=dt) {
	// 	fill((t/(2*PI))*255)
	// 	circle(100, 0, 5);
	// 	rotate(t)
	// }
	let dTheta = 2*PI / 20
	let base = 50;

	for (let n=0; n<20; n++) {
		let points = [];
		for (let theta=0; theta<2*PI; theta+=dTheta) {
			let r = base + noise(100*theta + n/50 + frameCount/100)*200;
			let x = r*cos(theta), y = r*sin(theta)
			points.push({ x, y })
		}

		noFill()
		stroke(color("rgba(0,0,0,0.2)"))
		beginShape();
		curveVertex(points[0].x, points[0].y);
		points.forEach((point, i) => {
			let {x, y} = point;
			// circle( x, y, 5 )
			curveVertex(x, y);
		})
		curveVertex(points[0].x, points[0].y);
		curveVertex(points[0].x, points[0].y);
		endShape();
	}
}