function Character(params) {
	WorldObject.call(this, params);
};

Character.prototype = new WorldObject();

Character.prototype.display = function() {
	this.ctx.beginPath();
	this.ctx.rect(this.position.x, this.position.y, 50, 50);
	this.ctx.fillStyle = 'red';
	this.ctx.fill();
};