var Jumpman = function(params) {
	Character.call(this, params);
};

Jumpman.prototype = new Character();

Jumpman.prototype.applyCollision = function(right) {
	var physics = right.skin.physics;
	console.log(physics);
	if (physics == 'block') {
		collision = new Collision(this, right);
	}
};



