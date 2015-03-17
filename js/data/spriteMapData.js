var multiply = 3;

var mapSprites = {

	lvl0 : {
		blockRouge : {
			position : new Vector(0, 0),
			size : new Vector(8, 8),
		},

		echelleBleu : {
			position : new Vector(8, 0),
			size : new Vector(8, 8),
		},
	},

	lvl1 : {
		blockJaune : {
			position : new Vector(0, 8),
			size : new Vector(8, 8),
		},

		echelleBlanche : {
			position : new Vector(8, 8),
			size : new Vector(8, 8),
		},		

		croix : {
			position : new Vector(16, 8),
			size : new Vector(8, 8),
		},

		blockCarreJaune : {
			position : new Vector(24, 8),
			size : new Vector(8, 8),
		},
	},

};

for (var name in mapSprites) {
	charact = mapSprites[name];
	for (var animName in charact) {
		mapSprites[name][animName].position.multiply(multiply);
		mapSprites[name][animName].size.multiply(multiply);
	};
};
