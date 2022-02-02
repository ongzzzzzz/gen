function Particle() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.maxSpeed = 4;
	this.prevPos = this.pos.copy();

	this.follow = function(field) {
		let x = Math.floor(this.pos.x / side);
		let y = Math.floor(this.pos.y / side);

		let idx = x + y*cols;
		let force = field[idx];
		this.applyForce(force);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if (this.pos.x < 0) { this.pos.x = width; this.updatePos(); }
		if (this.pos.x > width) { this.pos.x = 0; this.updatePos(); }
		if (this.pos.y < 0) { this.pos.y = height; this.updatePos(); }
		if (this.pos.y > height) { this.pos.y = 0; this.updatePos(); }
	}

	this.show = function() {
		stroke(0, 1); strokeWeight(1);
		line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
		this.updatePos();
		// point(this.pos.x, this.pos.y);
	}

	this.updatePos = function() {
		this.prevPos.x = this.pos.x;
		this.prevPos.y = this.pos.y;
	}
}