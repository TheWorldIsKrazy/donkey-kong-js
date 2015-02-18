var Block = function(params) {
	this.skin = params.skin;
};

Block.prototype.enter = {};

Block.prototype.enter.top = function(map, x, y, elem) {
	return true;
};

Block.prototype.enter.right = function(map, x, y, elem) {
	return true;
};

Block.prototype.enter.bottom = function(map, x, y, elem) {
	return true;
};

Block.prototype.enter.left = function(map, x, y, elem) {
	return true;
};

Block.prototype.leave = {};

Block.prototype.leave.top = function(map, x, y, elem) {
	if (y == 0)
		return false;
	else
		return true;
};

Block.prototype.leave.right = function(map, x, y, elem) {
	if (x == map.size.width-1 )
		return false;
	else
		return true;
};

Block.prototype.leave.bottom = function(map, x, y, elem) {
	if (y == map.size.height-1 )
		return false
	else
		return true;
};

Block.prototype.leave.left = function(map, x, y, elem) {
	if (x == 0)
		return false
	else
		return true;
};


