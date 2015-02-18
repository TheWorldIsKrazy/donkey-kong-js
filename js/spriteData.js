var multiply = 3;

var sprites = {

	mario : {
		run : {
			position : {x: 12, y:32},
			size : {width: 6, height: 6},
			nbrOfImgaes : 1,
		}
	}

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
