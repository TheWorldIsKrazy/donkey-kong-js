/**
* Class Skin
* @
**/
var Skin = function(params) {
	this.parent = params.parent;
	this.imgList = params.imgList;
	this.visible = params.visible || true;
	this.fps = params.fps || 2;
	this.index = params.initIndex || 0;
	
	this.layer = parent.layer;
	this.position = parent.position;

	this.length = this.imgList.length;

	this.lastRenderFrame = null;
	this.lastRenderTime = Date.now();

	this.end = 'bounce'; // bounce | stop | loop
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
	if (this.play == true) {
		if (this.reverse) {
			this.index--
		} else {
			this.index++;
		}
		if (this.index < this.getAnim().min) {

		}
		if (this.index > this.getAnim().max) {

		}
	};

};

Skin.prototype.update = function() {
	if (this.play == true && this.length > 1 ) {
		if (this.frameRate > 0) {
			if ( (Date.now() - this.lastRenderTime) > (1000/this.getAnim().frameRate) ) {
				this.lastRenderTime = Date.now();
				this.nextImage();		
			}
		}
	}
	if (this.visible) {
		this.display();
	};
}

Skin.prototype.setParam = function(param, value) {
	this[param] = value;
}

Skin.prototype.display = function(layers) {
	//if (this.index != this.lastRenderFrame) {
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
	//}
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
