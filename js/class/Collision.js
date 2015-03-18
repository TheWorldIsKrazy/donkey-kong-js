var Collision = function(left, right) {
	this.left = left;
	this.right = right;

	if (left == right) {
		return false;
	} else {
		this.margin = {
			left : left.position.x - (right.position.x + right.size.x),
			right : right.position.x - (left.position.x + left.size.x),
			top : left.position.y - (right.position.y + right.size.y),
			bottom : right.position.y - (left.size.y + left.position.y)
		}
	}
};

Collision.prototype.overflow = function() {
	var d = this.margin;
	if (d.left < 0 && d.right < 0 && d.top < 0 && d.bottom < 0)
		return this;
	else
		return false;
};

Collision.prototype.bottomBottom = function() {
	var d = this.margin;
	var botbot = (this.left.position.y + this.left.size.y) - (this.right.position.y + this.right.size.y);
	if (d.left < 0 && d.right < 0 && botbot < 0)
		return botbot;
	else
		return false;
};

Collision.filter = function(collisions, filter) {
	var result = new Array();
	for (var i = 0; i < collisions.length; i++) {
		col = filter(collisions[i]);
		if (col)
			result.push(collisions[i]);
	}
	if (result.length == 0)
		return false;
	else
		return result;
}