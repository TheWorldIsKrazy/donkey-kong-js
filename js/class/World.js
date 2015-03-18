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

World.prototype.display = function(layers) {
	for (var index in this.objects) {
		object = this.objects[index];
		object.display(layers);
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
		if (physics) {
			var physic = right.skin.physics;
			if (physics.indexOf(physic) > -1) {
				var collision = new Collision(left, right).overflow();
				if (collision) result.push(collision);
			}
		} else {
			// Si physics non définit
			var collision = new Collision(left, right).overflow();
			if (collision) result.push(collision);
		}
	}
	if (result.length == 0)
		return false;
	else 
		return result;
};




