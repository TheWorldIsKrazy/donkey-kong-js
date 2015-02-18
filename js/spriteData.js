var multiply = 3;

var sprites = {

	mario : {
		standLeft : {
			position : {x: 0, y:0},
			size : {width: 12, height: 16},
			nbrOfImages : 1,
		}

		standRight : {
			position : {x: 0, y:25},
			size : {width: 12, height: 16},
			nbrOfImages : 1,
		}

		runLeft : {
			position : {x: 16, y:0},
			size : {width: 15, height: 16},
			nbrOfImages : 2,
		}

		runRight : {
			position : {x: 16, y:25},
			size : {width: 15, height: 16},
			nbrOfImages : 2,
		}

		climb : {
			position : {x: 48, y:0},
			size : {width: 16, height: 16},
			nbrOfImages : 4,
		}
		deathLeft : {
			position : {x: 120, y:0},
			size : {width: 16, height: 16},
			nbrOfImages : 3,
		}

		deathRight : {
			position : {x: 120, y:25},
			size : {width: 16, height: 16},
			nbrOfImages : 3,
		}
	}

	kong : {
		stand : {
			position : {x: 0, y:49 },
			size : {width: 40, height: 32},
			nbrOfImages : 1,
		}

		caisseMarron : {
			position : {x: 48, y:49 },
			size : {width: 43, height: 32},
			nbrOfImages : 3,
		}

		caisseBleue : {
			position : {x: 184, y:49 },
			size : {width: 43, height: 32},
			nbrOfImages : 3,
		}

		climb : {
			position : {x: 320, y:49 },
			size : {width: 32, height: 36},
			nbrOfImages : 2,
		}

		content : {
			position : {x: 392, y:49 },
			size : {width: 46, height: 32},
			nbrOfImages : 2,
		}

		climbMeuf : {
			position : {x: 488, y:49 },
			size : {width: 43, height: 36},
			nbrOfImages : 2,
		}

	}

	Poline : {
		stand : {
			position : {x: 0, y:89 },
			size : {width: 16, height: 22},
			nbrOfImages : 1,
		}

		dance : {
			position : {x: 16, y:89 },
			size : {width: 40, height: 32},
			nbrOfImages : 2,
		}
		
		climb : {
			position : {x: 32, y:89 },
			size : {width: 40, height: 32},
			nbrOfImages : 2,
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
