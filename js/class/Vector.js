/**
* Class Vector
**/
var Vector = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

/* Instance Methods */
Vector.prototype = {
	negative: function() {
		this.x = -this.x;
		this.y = -this.y;
	},
	add: function(v) {
		if (v instanceof Vector) {
			this.x = this.x + v.x;
			this.y = this.y + v.y;
		} else {
			this.x = this.x + v;
			this.y = this.y + v;
		}
	},
	subtract: function(v) {
		if (v instanceof Vector) {
			this.x = this.x - v.x;
			this.y = this.y - v.y;
		} else {
			this.x = this.x - v;
			this.y = this.y - v;
		}
	},
	multiply: function(v) {
		if (v instanceof Vector) {
			this.x = this.x * v.x;
			this.y = this.y * v.y;
		} else {
			this.x = this.x * v;
			this.y = this.y * v;
		}
	},
	divide: function(v) {
		if (v instanceof Vector) {
			this.x = this.x / v.x;
			this.y = this.y / v.y;
		} else {
			this.x = this.x / v;
			this.y = this.y / v;
		}
	},
	isEquals: function(v) {
		return this.x == v.x && this.y == v.y;
	},
	min: function() {
		return Math.min(this.x, this.y);
	},
	max: function() {
		return Math.max(this.x, this.y);
	},
	toArray: function(n) {
		return [this.x, this.y, this.z].slice(0, n || 3);
	},
	clone: function() {
		result = new Vector(this.x, this.y);
		return result;
	},
	set: function(x, y) {
		this.x = x;
		this.y = y;
	},
	setX: function(x) {
		this.x = x;
	},
	setY: function(y) {
		this.y = y;
	},
	getAngle: function() {
		return Math.atan2(this.x,this.y);
	},
	getLength: function() {
		return Math.sqrt( (this.x*this.x) + (this.y*this.y) );
	},
	rotate: function(angle) {
		newAngle = this.getAngle() + angle;
		length = this.getLength();
		this.y = Math.cos(newAngle) * length;
		this.x = Math.sin(newAngle) * length;
	},
	debug: function() {
		console.log( this.x + ',' + this.y);
	},
};

/* Static Methods */
Vector.negative = function(a) {
	return new Vector(-a.x, -a.y);
};
Vector.add = function(a, b) {
	c = new Vector();
	if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; }
	else { c.x = a.x + b; c.y = a.y + b; }
	return c;
};
Vector.subtract = function(a, b) {
	c = new Vector();
	if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; }
	else { c.x = a.x - b; c.y = a.y - b; }
	return c;
};
Vector.multiply = function(a, b) {
	c = new Vector();
	if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; }
	else { c.x = a.x * b; c.y = a.y * b; }
	return c;
};
Vector.divide = function(a, b) {
	c = new Vector();
	if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; }
	else { c.x = a.x / b; c.y = a.y / b; }
	return c;
};
Vector.min = function(a, b) {
	return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y) );
};
Vector.max = function(a, b) {
	return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y) );
};
Vector.fromArray = function(a) {
	return new Vector(a[0], a[1]);
};