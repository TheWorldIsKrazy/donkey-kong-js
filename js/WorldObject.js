
var WorldObject = function (params) {
	if (params) {
		this.position = params.position || {x:0, y:0};
		this.size = params.size || {width: 50, height:50},
		this.velocity = params.velocity || {x:0, y:0},
		this.acceleration = params.acceleration || {x:0, y:0},
		this.skin = params.skin;
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

WorldObject.prototype.display = function() {
	this.skin.display();
};


