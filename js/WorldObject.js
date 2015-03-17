
var WorldObject = function (params) {
	if (params) {
		this.position = params.position || {x:0, y:0};
		this.size = params.size || {width: 50, height:50},
		this.velocity = params.velocity || {x:0, y:0},
		this.acceleration = params.acceleration || {x:0, y:0},
		this.skin = params.skin;
		this.layer = params.layer;
		this.world = params.world;
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

WorldObject.prototype.display = function(layers) {
	this.skin.display(layers);
};

WorldObject.prototype.getLayer = function() {
	return this.layer || this.parent.getLayer();
};

WorldObject.prototype.getPosition = function() {
	return this.position || this.parent.getPosition();
};

WorldObject.prototype.collision = function(worlds) {
	worlds = worlds || this.world;
	for (var i = 0; i < worlds.length; i++) {
		world = worlds[i];
		world.collisionWith(this);
	};
};