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

World.prototype.collisionsWith = function(left) {
	var result = new Array();
	for (var index in this.objects) {
		var right = this.objects[index];
		var collision = new Collision(left, right);
		if (collision) result.push(right);
	}
	if (result.length == 0)
		return false;
	else 
		return result;
};




