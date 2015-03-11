var Block = function(params) {
	this.skin = params.skin;
	
	if (params.enter !== undefined) {
		this.enter = {};
		
		if (params.enter.top !== undefined)
			this.enter.top = params.enter.top;
		if (params.enter.right !== undefined)
			this.enter.right = params.enter.right;
		if (params.enter.bottom !== undefined)
			this.enter.bottom = params.enter.bottom;
		if (params.enter.left !== undefined)
			this.enter.left = params.enter.left;
	}
	
	if (params.leave !== undefined) {
		this.leave = {};

		if (params.leave.top !== undefined)
			this.leave.top = params.leave.top;
		if (params.leave.right !== undefined)
			this.leave.right = params.leave.right;
		if (params.leave.bottom !== undefined)
			this.leave.bottom = params.leave.bottom;
		if (params.leave.left !== undefined)
			this.leave.left = params.leave.left;
	}
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

/*
* Return false, true or a number
*/
Block.prototype.fall = function (map, x, y, elem) {
	return true;
}
