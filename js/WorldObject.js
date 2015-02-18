var WorldObject = function (params) {
	if (params) {
		this.position = params.position;
		this.velocity = params.velocity || {x:0, y:0},
		this.acceleration = params.acceleration || {x:0, y:0},
		this.size = params.size || {width: 50, height:50},
		this.ctx = params.ctx;
	}
};

WorldObject.prototype.applyAcceleration = function() {
	this.velocity.x += this.acceleration.x;
	this.velocity.y += this.acceleration.y;
};

WorldObject.prototype.applyVelocity = function() {

	this.position.x += this.velocity.x;
	this.position.y += this.velocity.y;
};

WorldObject.prototype.applyMap = function(map) {
	
};


