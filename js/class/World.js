var World = function () {
	this.objects = {};
	this.primaryKey = 0;
};

World.prototype.add = function(object) {
	this.objects[this.primaryKey] = object;
	object.indexInWorld = this.primaryKey;
	object.world = this;
	this.primaryKey++;
};

World.prototype.delete = function(object) {
	index = object.indexInWorld;
	delete this.objects[index];
};

World.prototype.display = function(layers) {
	for (var index in this.objects) {
		object = this.objects[index];
		object.display(layers);
	}
};

World.prototype.debug = function(layers) {
	for (var index in this.objects) {
		object = this.objects[index];
		object.debug(layers);
	}
};

World.prototype.skinUpdate = function(layers) {
	for (var index in this.objects) {
		object = this.objects[index];
		object.skinUpdate(layers);
	}
};

World.prototype.applyVelocity = function() {
	for (var index in this.objects) {
		object = this.objects[index];
		object.applyVelocity();
	}
};

World.prototype.collisionsWith = function(left, physics) {
	var result = new Array();
	for (var index in this.objects) {
		var right = this.objects[index];
		var collision;
		if (physics) {
			var physic = right.skin.physics;
			if (physics.indexOf(physic) > -1) {
				var collision = new Collision(left, right);
			}
		} else {
			// Si physics non définit
			var collision = new Collision(left, right);
		}
		if(collision && collision.overflow()) {
			result.push(collision);
		}
	}
	if (result.length == 0)
		return false;
	else 
		return result;
};

World.filter = function(filter) {
	var result = new Array();
	for (var i = 0; i < this.objects.length; i++) {
		obj = filter(this.objects[i]);
		if (col)
			result.push(this.objects[i]);
	}
	if (result.length == 0)
		return false;
	else
		return result;
}



