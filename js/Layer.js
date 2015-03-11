var Layer = function (zIndex, size) {

	for (var i = 0; i < Layer.all.length; i++) {
		lay = Layer.all[i];
		if (lay.zIndex == zIndex) {
			console.log("zIndex "+zIndex+" déjà pris");
			return	false;
		}
	}

	this.canvas = document.createElement('canvas');
	this.canvas.style.position = 'absolute';
	this.canvas.style.zIndex = zIndex;
	this.ctx = this.canvas.getContext('2d');
	document.getElementsByTagName('body')[0].appendChild(this.canvas);
	this.zIndex = zIndex;
	this.ctx.canvas.height = size.height;
	this.ctx.canvas.width = size.width;

	Layer.all.push(this);
	return this;

};

Layer.all = new Array();



