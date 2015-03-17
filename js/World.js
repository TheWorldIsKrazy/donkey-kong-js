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

World.prototype.applyVelocity = function() {
	for (var index in this.objects) {
		object = this.objects[index];
		object.applyVelocity();
	}
};

World.prototype.collisionsWith = function(left) {
	var result = new Array();
	for (var index in this.objects) {
		right = this.objects[index];
		if (left !== right) {
			if (left.position.x < right.position.x + right.size.width &&
				left.position.x + left.size.width > right.position.x &&
				left.position.y < right.position.y + right.size.height &&
				left.size.height + left.position.y > right.position.y) {
			
				// Collision
				result.push(right);
			}
		}
	}
	if (result.length == 0)
		return false;
	else 
		return result;
};




