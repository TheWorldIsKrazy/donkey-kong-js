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


World.prototype.render = function(first_argument) {
	// body...
};

