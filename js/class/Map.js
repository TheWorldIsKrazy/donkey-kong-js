/**
* Class Map
*
**/
var Map = function(params) {
	this.data = params.levels;
	this.level = params.initlevel || 0;
	this.grid = params.grid;
	this.size = params.size;
	this.layer = params.layer;
	this.world = params.world;
	this.skins = params.skins;
	this.blocks = new Array();

	// data validation
	for (var i = 0; i < this.data.length; i++) {
		var map = this.data[i];
		var layers = map.maps;
		for (var j = 0; j < layers.length; j++) {
			var layer = layers[j];
			if (layer.length != this.size.height) {
				console.log("La hauteur du calque n°" + j + " du niveau " + i + " ne correspond pas !");
			}
			for (var k = 0; k < layer.length; k++) {
				if (layer[k].length != this.size.width) {
					console.log("La largeur de la ligne n°" + k + " du calque n°" + j + " du niveau " + i + " ne correspond pas !");
				}
			}
		};
	}
};

Map.prototype.clear = function() {
	// Black background
	this.layer.clear();
};

Map.prototype.loadLevel = function(level) {

	this.unloadLevel(level);

	this.level = level || this.level;

	var layers = this.data[this.level].maps;
	var skins = this.data[this.level].skins;

	//Foreach map
	for (var i = 0; i < layers.length; i++) {
		// Foreach line j = ligne
		for (var j = 0; j < layers[i].length; j++) {
			// Foreach case k = colone
			for (var k = 0; k < layers[i][j].length; k++) {
				// Foreach block
				var blockChar = layers[i][j][k];

				var blockElem = skins[blockChar];

				if (blockElem == undefined) {
					if (blockChar !== ' ')
						console.log("Le charactere " + blockChar + " ne correspond à aucun block");
				} else {
					var xOffset = blockElem.xOffset || 0;
					var yOffset = blockElem.yOffset || 0;
					var skin = this.skins.getSprite(blockElem.skin[0], blockElem.skin[1]);
					var block = new Block({
						size: this.grid,
						position: {
							x: k*this.grid.width + xOffset,
							y: j*this.grid.height + yOffset,
						},
						skin: skin,
						layer: this.layer,
						world: this.world,
					});

					skin.parent = block;
					this.world.add(block);
					this.blocks.push(block);

				}
			}
		}
	}

};

Map.prototype.unloadLevel = function(level) {
	var level = level || this.level;

	for (var i = 0; i < this.blocks.length; i++) {
		var index = this.blocks[i];
		delete this.world[index];
	}

	this.blocks = new Array();

};

// Map.prototype.display = function() {

// 	this.clear();
	
// 	var lvl = this.getCurrentLevel();

// 	// Foreach map
// 	for (var i = 0; i < lvl.maps.length; i++) {
// 		// Foreach line
// 		for (var j = 0; j < lvl.maps[i].length; j++) {
// 			// Foreach case
// 			for (var k = 0; k < lvl.maps[i][j].length; k++) {
// 				// Foreach block
// 				var content = lvl.maps[i][j][k];
//                 var skin =  lvl.elements[content].skin;
//                 if (skin !== undefined) {
// 					if(typeof(skin)  == "function" ){
// 						skin(content, this, k, j);
// 					} else {
// 						this.displayElem(skin,
// 							k*this.grid.width, j*this.grid.height,
// 							map.grid.width, map.grid.height
// 						);
// 					}
//                 } else {
//                 	console.log("Le charactere " + content + " ne correspond à aucun block");
//                 }
// 			}
// 		}
// 	}
// };

// Map.prototype.displayElem = function(name, x, y, width, height) {
// 	this.ctx.drawImage(this.images[name],
// 		x, y, width, height
// 	);
// };

// Map.prototype.imgLoaded = function() {
// 	this.imgsOK++;
// 	var nbrOfImages = 0;
// 	for (var elem in this.images) {
// 		nbrOfImages++;
// 	};
// 	if (nbrOfImages == this.imgsOK) {
// 		console.log("All resources are loaded !");
// 		this.levelLoaded();
// 	}
// };
