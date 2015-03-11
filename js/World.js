var World = function () {
	this.objects = new Array();
};

World.prototype.add = function(object) {
	result = this.objects.push(object);
	object.indexInWorld = result - 1;
};


