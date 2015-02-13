var Map = function(params) {
	this.data = params.levels;
	this.level = 1;
	this.grid = params.grid;
	this.size = params.size;
	this.ctx = params.ctx;

	// this.images = {
	// 	blockRouge: new Image(),
	// 	blockJaune: new Image(),
	// 	blockCarreJaune: new Image(),
	// 	croix: new Image(),
	// 	echelleBleu: new Image(),
	// 	echelleBlanche: new Image(),
	// };
	// this.images.blockRouge.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);
	// this.images.blockJaune.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);
	// this.images.blockCarreJaune.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);
	// this.images.croix.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);
	// this.images.echelleBleu.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);
	// this.images.echelleBlanche.addEventListener("load", function() {
	// 	that.imgLoaded();
	// }, false);

	// this.images.blockRouge.src = 'images/blockRouge.png';
	// this.images.blockJaune.src = 'images/blockJaune.png';
	// this.images.blockCarreJaune.src = 'images/blockCarreJaune.png';
	// this.images.croix.src = 'images/croix.png';
	// this.images.echelleBleu.src = 'images/echelleBleu.png';
	// this.images.echelleBlanche.src = 'images/echelleBlanche.png';

	// Set canvas Size
	this.ctx.canvas.height = this.size.height * this.grid.height;
	this.ctx.canvas.width = this.size.width * this.grid.width;

	// data validation
	for (var i = 0; i < this.data.length; i++) {
		layers = this.data[i].maps;
		for (var j = 0; j < layers.length; j++) {
			if (layers[j].length != this.size.height) {
				console.log("La hauteur du calque n°" + j + " du niveau " + i + " ne correspond pas !");
			}
			for (var k = 0; k < layers[j].length; k++) {
				if (layers[j][k].length != this.size.width) {
					console.log("La largeur de la ligne n°" + k + " du calque n°" + j + " du niveau " + i + " ne correspond pas !");
				}
			};
		};
	}
};

Map.prototype.init = function() {
	
};

Map.prototype.levelLoaded = function() {
	
};

Map.prototype.loadLevel = function(level) {

	if (level !== undefined) {
		this.level = level;
	}

	// Black background
	this.ctx.rect(0,0,this.grid.width*this.size.width, this.grid.height*this.size.height);
	this.ctx.fillStyle = "black";
	this.ctx.fill();

	lvl = this.getCurrentLevel();

	// Load level's images
	this.images = {};
	this.imgsOK = 0;
	that = this;

	for (var name in lvl.images) {
		this.images[name] = new Image();
		this.images[name].addEventListener("load", function() {
			(function(myMap) {
				myMap.imgLoaded();
			})(that);
		}, false);
		this.images[name].src = lvl.images[name];
	};

	// if (this.level == 0) {
	// 	for (var j = 0; j < lvl["echelles"].length; j++) {
	// 		for (var k = 0; k < lvl["echelles"][j].length; k++) {
	// 			//lvl["blocks"][j][k];
	// 			if (lvl["echelles"][j][k] == 1) {
	// 				this.ctx.drawImage(this.images.echelleBleu,
	// 					this.grid.width*k, this.grid.height*j,
	// 					this.grid.width, this.grid.height
	// 				);
	// 			}
	// 		}
	// 	}
	// 	for (var j = 0; j < lvl["blocks"].length; j++) {
	// 		for (var k = 0; k < lvl["blocks"][j].length; k++) {
	// 			//lvl["blocks"][j][k];
	// 			if (lvl["blocks"][j][k] != 9) {
	// 				this.ctx.drawImage(this.images.blockRouge,
	// 					this.grid.width*k, this.grid.height*j + lvl["blocks"][j][k],
	// 					this.grid.width, this.grid.height
	// 				);
	// 			}
	// 		}
	// 	}
	// }
	// if (this.level == 1) {
	// 	for (var j = 0; j < lvl["echelles"].length; j++) {
	// 		for (var k = 0; k < lvl["echelles"][j].length; k++) {
	// 			//lvl["blocks"][j][k];
	// 			if (lvl["echelles"][j][k] == 1) {
	// 				this.ctx.drawImage(this.images.echelleBlanche,
	// 					this.grid.width*k, this.grid.height*j,
	// 					this.grid.width, this.grid.height
	// 				);
	// 			}
	// 			if (lvl["echelles"][j][k] == 2) {
	// 				this.ctx.drawImage(this.images.croix,
	// 					this.grid.width*k, this.grid.height*j,
	// 					this.grid.width, this.grid.height
	// 				);
	// 			}
	// 		}
	// 	}
	// }
	// for (var j = 0; j < lvl["blocks"].length; j++) {
	// 	for (var k = 0; k < lvl["blocks"][j].length; k++) {
	// 		//lvl["blocks"][j][k];
	// 		if (lvl["blocks"][j][k] == 0) {
	// 			this.ctx.drawImage(this.images.blockJaune,
	// 				this.grid.width*k, this.grid.height*j,
	// 				this.grid.width, this.grid.height
	// 			);
	// 		}
	// 		if (lvl["blocks"][j][k] == 1) {
	// 			this.ctx.drawImage(this.images.blockCarreJaune,
	// 				this.grid.width*k, this.grid.height*j,
	// 				this.grid.width, this.grid.height
	// 			);
	// 		}
	// 	}
	// }
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
		this.levelLoaded();
	}
};
