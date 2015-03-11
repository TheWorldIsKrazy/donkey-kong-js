var multiply = 3;

var sprites = {

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

for (var name in sprites) {
	charact = sprites[name];
	for (var animName in charact) {
		sprites[name][animName].position.x = sprites[name][animName].position.x * multiply;
		sprites[name][animName].position.y = sprites[name][animName].position.y * multiply;
		sprites[name][animName].size.width = sprites[name][animName].size.width * multiply;
		sprites[name][animName].size.height = sprites[name][animName].size.height * multiply;
	};
};
