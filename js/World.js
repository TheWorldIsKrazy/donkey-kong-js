var World = function () {
	this.objects = {};
	this.primaryKey = 0;
};

World.prototype.add = function(object) {
	result = this.objects[this.primaryKey](object);
	object.indexInWorld = this.primaryKey;
	this.primaryKey++;
};


