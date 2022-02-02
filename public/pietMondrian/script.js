let squares;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	squares = [{
		x: 0, y: 0,
		w: width, h: height
	}]

	let step = width / 20;
	for (let i=0; i<width; i+=step) {
		splitSquaresWith({ x: i });
		splitSquaresWith({ y: i });
	}


	for (let c of ["#D40920", "#1356A2", "#F7D842"]) {
		random(squares).color = c;
	}
	strokeWeight(8)
	squares.forEach(s => {
		if (s.color) fill(s.color);
		else fill("#F2F5F1")
		rect(s.x, s.y, s.w, s.h)
	})
}


function splitSquaresWith(coords) {
	let { x, y } = coords;
	for (let i=squares.length-1; i>=0; i--) {
		let s = squares[i];
		if (x && s.x < x && x < s.x + s.w) {
			if (Math.random() > 0.5) {
				squares.splice(i, 1); // remove square at i
				splitAtX(s, x);
			}
		}
		if (y && s.y < y && y < s.y + s.h) {
			if (Math.random() > 0.5) {
				squares.splice(i, 1); // remove square at i
				splitAtY(s, y);
			}
		}
	}
}

function splitAtX(square, x) {
	let s_1 = {
		x: square.x,
		y: square.y,
		w: square.w - (square.w - x + square.x),
		h: square.h
	};

	let s_2 = {
		x: x,
		y: square.y,
		w: square.w - x + square.x,
		h: square.h
	};

	squares.push(s_1);
	squares.push(s_2);
}

function splitAtY(square, y) {
	let s_1 = {
		x: square.x,
		y: square.y,
		w: square.w,
		h: square.h - (square.h - y + square.y)
	}
	
	let s_2 = {
		x: square.x,
		y: y,
		w: square.w,
		h: square.h - y + square.y
	}

	squares.push(s_1);
	squares.push(s_2);
}


function draw() {

}