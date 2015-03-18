var Character = function(params) {
	WorldObject.call(this, params);
};

Character.prototype = new WorldObject();

Character.prototype.applyVelocity = function() {
	WorldObject.prototype.applyVelocity.call(this);

	this.position.x = this.position.x < 0 ? 0 : this.position.x;
	this.position.y = this.position.y < 0 ? 0 : this.position.y;

	if (this.position.x + this.size.x > this.layer.size.x)
		this.position.x = this.layer.size.x - this.size.x;
	if (this.position.y + this.size.y > this.layer.size.y)
		this.position.y = this.layer.size.y - this.size.y;
};

