var Jumpman = function(params) {
	Character.call(this, params);
};

Jumpman.prototype = new Character();

Jumpman.prototype.applyCollision = function(collisions) {

	// first 'block' collision
	var collision = collisions[0];

	var bot = collision.margin.bottom;
	this.position.y += bot;

};



