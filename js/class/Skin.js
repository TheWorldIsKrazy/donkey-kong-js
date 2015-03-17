/**
* Class Skin
* @
**/
var Skin = function(params) {
	this.parent = params.parent;
	this.fps = params.fps || 2;
	this.imgList = params.imgList;
	if (this.imgList.length == 1)
		this.fps = 0;
	this.visible = params.visible || true;
	this.index = params.initIndex || 0;
	
	this.layer = parent.layer;
	this.position = parent.position;

	this.length = this.imgList.length;

	this.lastRenderFrame = null;
	this.lastRenderTime = Date.now();

	this.end = 'loop'; // bounce | stop | loop
	this.reverse = false;

	this.play = true;
}

Skin.prototype.play = function(reverse) {
	if (this.imgList > 0) {
		this.reverse = reverse;
		this.play = true;
	}
}

Skin.prototype.pause = function() {
	this.play = false;
}

Skin.prototype.switchRevese = function(val) {
	this.reverse = !this.reverse || val;
}

Skin.prototype.nextImage = function() {
	if (this.play == true && this.imgList.length > 1) {
		if (this.reverse) {
			this.index--
		} else {
			this.index++;
		}
		if (this.end == 'bounce') {
			if (this.index == this.imgList.length-1 || this.index == 0) {
				this.switchRevese();
			}
		}
		if (this.end == 'loop') {
			if (this.index == this.imgList.length) {
				this.index = 0;
			}
			if (this.index < 0) {
				this.index = this.imgList.length-1;
			}
		}
	}
};

Skin.prototype.update = function(layers) {
	if (this.play == true && this.length > 1 ) {
		var layer = this.getLayer();
		layers = layers || Layer.all;

		if (layers.indexOf(layer) > -1) {
			if (this.fps > 0) {
				if ( (Date.now() - this.lastRenderTime) > (1000/this.fps) ) {
					this.nextImage();		
					this.lastRenderTime = Date.now();
				}
			}
		}
	}
}

Skin.prototype.setParam = function(param, value) {
	this[param] = value;
}

Skin.prototype.display = function(layers) {
	if (this.visible) {
		var layer = this.getLayer();
		layers = layers || Layer.all;

		if (layers.indexOf(layer) > -1) {
			var pos = this.getPosition();
			// Draw
			layer.ctx.putImageData(
				this.imgList[this.index],
				pos.x, pos.y
			);
			this.lastRenderFrame = this.index;
		}
	}
}

Skin.prototype.hide = function() {
	this.visible = false;
};

Skin.prototype.show = function() {
	this.visible = true;
};

Skin.prototype.getLayer = function() {
	return this.layer || this.parent.getLayer();
};

Skin.prototype.getPosition = function() {
	return this.position || this.parent.getPosition();
};
