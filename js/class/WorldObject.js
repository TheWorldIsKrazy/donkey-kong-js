
var WorldObject = function (params) {
	if (params) {
		this.position = params.position || {x:0, y:0};
		this.lastPosition = this.position.clone();
		this.size = params.size || {width: 50, height:50},
		this.velocity = params.velocity || {x:0, y:0},
		this.acceleration = params.acceleration || {x:0, y:0},
		this.forces = params.forces || {};
		this.skin = params.skin;
		this.layer = params.layer;
		this.world = params.world;
		this.lastVelocityUpdate = Date.now();
	}

	return this;
};

WorldObject.prototype.setSkin = function(anim, obj, sprites) {
	this.spriteGroup = sprites || this.spriteGroup;
	this.spriteObj = obj || this.spriteObj;
	this.skin = this.spriteGroup.getSprite(this.spriteObj, anim);
	this.skin.parent = this;
	this.skin.lastRenderTime = Date.now();

	return this;
};

WorldObject.prototype.applyAcceleration = function() {
	this.velocity.x += this.acceleration.x;
	this.velocity.y += this.acceleration.y;
};

WorldObject.prototype.setVelocity = function(x, y) {
	this.applyVelocity();
	if (x instanceof Vector) {
		this.velocity.set(x.x, x.y);
	} else {
		this.velocity.set(x,y);
	}
};

WorldObject.prototype.setVelocityX = function(x) {
	this.applyVelocity();
	this.velocity.setX(x);
};

WorldObject.prototype.setVelocityY = function(y) {
	this.applyVelocity();
	this.velocity.setY(y);
};

WorldObject.prototype.applyVelocity = function() {
	var duration = (Date.now() - this.lastVelocityUpdate)/1000;
	this.lastVelocityUpdate = Date.now();
	this.lastPosition = this.position.clone();
	this.position.add( Vector.multiply(this.velocity, duration) );
};

WorldObject.prototype.display = function(layers) {
	this.skin.display(layers);
};

WorldObject.prototype.skinUpdate = function(layers) {
	this.skin.update(layers);
};

WorldObject.prototype.getLayer = function() {
	return this.layer || this.parent.getLayer();
};

WorldObject.prototype.getPosition = function() {
	return this.position || this.parent.getPosition();
};

WorldObject.prototype.detectCollisions = function(worlds, physics) {
	var result = new Array();
	worlds = worlds || this.world;
	for (var i = 0; i < worlds.length; i++) {
		var world = worlds[i];
		var res = world.collisionsWith(this, physics);
		for (var i = 0; i < res.length; i++)
			result.push(res[i]);
	}
	if (result.length == 0)
		return false;
	else
		return result;
};

WorldObject.prototype.applyCollision = function(right) {
	
};

