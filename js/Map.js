var Map = function(params) {
	this.model = params.levels;
	
	// Images
	that = this;
	this.imgsOK = 0;
	blockimg = new Image();
	blockimg.addEventListener("load", function() {
		that.imgLoaded();
	}, false);
	echelleimg = new Image();
	echelleimg.addEventListener("load", function() {
		that.imgLoaded();
	}, false);
	this.images = {
		block: blockimg,
		echelle: echelleimg,
	}
	blockimg.scr = 'images/block.png';
	echelleimg.scr = 'images/echelle.png';

	this.data = Array();
	this.init();
};

Map.prototype.init = function() {
	
};

Map.prototype.display = function() {
	
};

Map.prototype.imgLoaded = function() {
	this.imgsOK++;
	if (this.images.length == this.imgsOK) {
		console.log("loaded !");
	}
};
