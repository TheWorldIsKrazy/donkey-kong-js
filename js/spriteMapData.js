var multiply = 3;

var mapSprites = {

	level0 : {
		blockRouge : {
			position : {x: 0, y: 0},
			size : {width: 8, height: 8},
		},

		echelleBleu : {
			position : {x: 8, y:8},
			size : {width: 8, height: 8},
		},
	},

	level1 : {
		blockJaune : {
			position : {x: 0, y: 0},
			size : {width: 8, height: 8},
		},

		echelleBlanche : {
			position : {x: 8, y:8},
			size : {width: 8, height: 8},
		},		

		croix : {
			position : {x: 16, y: 16},
			size : {width: 8, height: 8},
		},

		blockCarreJaune : {
			position : {x: 24, y:24},
			size : {width: 8, height: 8},
		},
	},

};

for (var name in mapSprites) {
	charact = mapSprites[name];
	for (var animName in charact) {
		mapSprites[name][animName].position.x = mapSprites[name][animName].position.x * multiply;
		mapSprites[name][animName].position.y = mapSprites[name][animName].position.y * multiply;
		mapSprites[name][animName].size.width = mapSprites[name][animName].size.width * multiply;
		mapSprites[name][animName].size.height = mapSprites[name][animName].size.height * multiply;
	};
};
