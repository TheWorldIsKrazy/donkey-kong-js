var Collision = function(left, right) {
	this.left = left;
	this.right = right;

	if (left == right) {
		return false;
	} else {
		this.distances = {
			left : left.position.x - (right.position.x + right.size.x),
			right : right.position.x - (left.position.x + left.size.x),
			top : left.position.y - (right.position.y + right.size.y),
			bottom : right.position.y - (left.size.y + left.position.y)
		}
		if ( !this.overflow() ) {
			return false;
		}
	}
};

Collision.prototype.overflow = function() {
	var d = this.distances;
	return d.left < && d.right && d.top && d.bottom
};