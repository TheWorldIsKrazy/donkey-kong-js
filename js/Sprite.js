/**
* Class Sprite
* @source sprite image
* @rows number of image collumn
* @size of one image {height: XX, width: XX}
* @nbrOfImages
* @canvas
* @context
* @visible boolean
* @animations {'name': {min: frame, max:frame}}
* @currentAnimation 
* @position {x:XX, y:XX}
* @bounceMin function(sprite)
* @bounceMax function(sprite)
* @onload function(sprite)
**/
var Sprite = function(params) {
	this.source = params.source || null;
	this.canvas = params.canvas || null;
	this.ctx = params.context || null;
	this.rows = params.rows || null;
	this.size = params.size || {height: 100, width: 100};
	this.position = params.position || {x:0, y:0};
	this.nbrOfImages = params.nbrOfImages || null;
	this.visible = params.visible || true;
	
	this.animations = params.animations || {'main':{min:0, max:this.nbrOfImages}};
	this.currentAnimation = params.currentAnimation || 'main';

	if (this.ctx === null && this.canvas !== null) {
		this.ctx = this.canvas.getContext('2d');
	}	
	if (this.ctx !== null && this.canvas === null) {
		this.canvas = this.ctx.canvas;
	}

	this.defaultBounceMin = params.bounceMin || function(sprite) {
		sprite.switchRevese();
	};

	this.defaultBounceMax = params.bounceMax || function(sprite) {
		sprite.switchRevese();
	};

	this.onload = params.onload || function(sprite) {
		sprite.play();
	};

	this.image =  new Image();
	that = this;
	this.image.addEventListener("load", function() {
		that.loaded = true;
		that.play();
	}, false);
	this.image.src = this.source;

	this.state = 'pause';
	this.loaded = false;
	this.reverse = false;
	this.index = 0;
	this.lastRenderFrame = null;

	// Set canvas size
	this.canvas.height = this.size.height;
	this.canvas.width = this.size.width;
}

Sprite.prototype.play = function(reverse) {
	this.reverse = reverse;
	this.state = 'play';
}

Sprite.prototype.pause = function() {
	this.state = 'pause';
}

Sprite.prototype.switchRevese = function(val) {
	this.reverse = !this.reverse || val;
}

Sprite.prototype.getAnim = function() {
	return this.animations[this.currentAnimation];
};

Sprite.prototype.nextImage = function() {
	if (this.reverse) {
		this.index--
	} else {
		this.index++;
	}
	if (this.index < this.getAnim().min) {
		this.bounceMin(this);
		this.index = this.getAnim().min;
	}
	if (this.index > this.getAnim().max) {
		this.bounceMax(this);
		this.index = this.getAnim().max;
	}

};

Sprite.prototype.update = function() {
	if (this.state == 'play') {
		this.nextImage();
	}
	if (this.visible) {
		this.display();
	};
}

Sprite.prototype.setParam = function(param, value) {
	this[param] = value;
}

Sprite.prototype.getCrop = function() {
	dy = Math.floor(this.index / this.rows);
	dx = this.index % this.rows;
	dy *= this.size.height;
	dx *= this.size.width;
	return {x: dx, y: dy, h:this.size.height, w:this.size.width };
}

Sprite.prototype.bounceMin = function() {
	if (this.getAnim().bounceMin !== undefined) {
		this.getAnim().bounceMin(this);
	} else {
		this.defaultBounceMin(this);
	}
};

Sprite.prototype.bounceMax = function() {
	if (this.getAnim().bounceMax !== undefined) {
		this.getAnim().bounceMax(this);
	} else {
		this.defaultBounceMax(this);
	}
};

Sprite.prototype.display = function() {
	if (this.loaded) {
		if (this.index != this.lastRenderFrame) {
			crop = this.getCrop();
			pos = this.position;
			this.clear();
			// Draw
			this.ctx.drawImage(this.image,
				crop.x, crop.y, crop.h, crop.w,
				pos.x, pos.y, crop.h, crop.w
			);
			this.lastRenderFrame = this.index;
		}
	}
}

Sprite.prototype.clear = function() {
	this.ctx.clearRect(0,0,canvas.height, canvas.width);
};

Sprite.prototype.hide = function() {
	this.visible = false;
	this.clear();
};

Sprite.prototype.show = function() {
	this.visible = true;
};

Sprite.prototype.setAnimation = function(anim) {
	this.currentAnimation = anim;
	this.index = this.animations[this.currentAnimation].min;
};
