var Map = function(params) {
	this.data = params.levels;
	this.level = 0;
	this.grid = params.grid;
	this.size = params.size;
	this.ctx = params.ctx;
	this.onload = params.onload;
	
	// Images
	that = this;
	this.imgsOK = 0;
	this.images = {
		block: new Image(),
		echelle: new Image(),
	};
	this.images.block.addEventListener("load", function() {
		that.imgLoaded();
	}, false);
	this.images.echelle.addEventListener("load", function() {
		that.imgLoaded();
	}, false);
	this.images.block.src = 'images/block.png';
	this.images.echelle.src = 'images/echelle.png';

	// Set canvas Size
	this.ctx.canvas.height = this.size.height * this.grid.height;
	this.ctx.canvas.width = this.size.width * this.grid.width;

	// data validation
	for (var i = 0; i < this.data.length; i++) {
		lvl = this.data[i];
		for (var grid in lvl) {
			if (lvl[grid].length != this.size.height) {
				console.log("La hauteur de " + grid + " du niveau " + i + " ne correspond pas !");
			}
			for (var j = 0; j < lvl[grid].length; j++) {
				if (lvl[grid][j].length != this.size.width) {
					console.log("La largeur de " + grid + " du niveau " + i + " ne correspond pas !");
				}
			};
		}
	}
};

Map.prototype.init = function() {
	
};

Map.prototype.display = function() {
	lvl = this.getCurrentLevel();
	for (var i = 0; i < this.data.length; i++) {
		lvl = this.data[i];
		for (var j = 0; j < lvl["blocks"].length; j++) {
			for (var k = 0; k < lvl["blocks"][j].length; k++) {
				//lvl["blocks"][j][k];
				if (lvl["blocks"][j][k] != 9) {
					this.ctx.drawImage(this.images.block,
						this.grid.width*k, this.grid.height*j + lvl["blocks"][j][k],
						this.grid.width, this.grid.height
					);
				}
			}
		}
	}
};

Map.prototype.getCurrentLevel = function() {
	return this.data[this.level];
};

Map.prototype.imgLoaded = function() {
	this.imgsOK++;
	var nbrOfImages = 0;
	for (var elem in this.images) {
		nbrOfImages++;
	};
	if (nbrOfImages == this.imgsOK) {
		console.log("All resources are loaded !");
		this.onload(this);
	}
};
