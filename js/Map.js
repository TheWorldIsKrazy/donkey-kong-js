var Map = function(params) {
	this.data = params.levels;
	
	// Images
	that = this;
	this.imgsOK = 0;
	this.images = {
		block: new Image(),
		echelle: new Image(),
	};
	this.images.block.addEventListener("load", function() {
		console.log("img1");
		that.imgLoaded();
	}, false);
	this.images.echelle.addEventListener("load", function() {
		console.log("img2");
		that.imgLoaded();
	}, false);
	this.images.block.scr = 'images/block.png';
	this.images.echelle.scr = 'images/echelle.png';

	this.init();
};

Map.prototype.init = function() {
	
};

Map.prototype.display = function() {
	
};

Map.prototype.imgLoaded = function() {
	this.imgsOK++;
	var nbrOfImages = 0;
	for (var elem in this.images) {
		nbrOfImages++;
	};
	if (nbrOfImages == this.imgsOK) {
		console.log("loaded !");
	}
};
