var Map = function(params) {
	this.data = params.levels;
	this.level = 1;
	this.grid = params.grid;
	this.size = params.size;
	this.ctx = params.ctx;

	// Set canvas Size
	this.ctx.canvas.height = this.size.height * this.grid.height;
	this.ctx.canvas.width = this.size.width * this.grid.width;

	// data validation
	for (var i = 0; i < this.data.length; i++) {
		var layers = this.data[i].maps;
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

Map.prototype.levelLoaded = function() {
	
};

Map.prototype.loadLevel = function(level, onload) {

	if (level !== undefined) {
		this.level = level;
	};

	if (onload !== undefined) {
		this.levelLoaded = onload;
	};

	// Black background
	this.ctx.rect(0,0,this.grid.width*this.size.width, this.grid.height*this.size.height);
	this.ctx.fillStyle = "black";
	this.ctx.fill();

	var lvl = this.getCurrentLevel();

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
};

Map.prototype.display = function() {
	
	var lvl = this.getCurrentLevel();

	// Foreach map
	for (var i = 0; i < lvl.maps.length; i++) {
		// Foreach line
		for (var j = 0; j < lvl.maps[i].length; j++) {
			// Foreach case
			for (var k = 0; k < lvl.maps[i][j].length; k++) {
				// Foreach block
				var content = lvl.maps[i][j][k];
                var el =  lvl.elements[content];
                if (el !== undefined) {
					if(typeof(el)  == "function" ){
						el(content, this, k, j);
					} else {
						this.displayElem(el,
							k*this.grid.width, j*this.grid.width,
							map.grid.width, map.grid.height
						);
					}
                } else {
                	console.log("Le charactere " + content + " ne correspond à aucun block");
                }
			}
		}
	}
};

Map.prototype.displayElem = function(name, x, y, width, height) {
	this.ctx.drawImage(this.images[name],
		x, y, width, height
	);
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
