var Character = function (params) {
	this.position = params.position;
	this.ctx = params.ctx;
};

Character.prototype.display = function() {
	this.ctx.beginPath();
    this.ctx.rect(this.position.x, this.position.y, 50, 50);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
};

