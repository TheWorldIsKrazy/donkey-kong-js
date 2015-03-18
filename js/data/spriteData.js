var multiply = 3;

var sprites = {

	jumpMan : {
		standLeft : {
			position : new Vector(0, 0),
			size : new Vector(12, 16),
		},

		standRight : {
			position : new Vector(0, 24),
			size : new Vector(12, 16),
		},

		runLeft : {
			position : new Vector(16, 0),
			size : new Vector(15, 16),
			nbrOfImages : 2,
			fps : 6,
		},

		runRight : {
			position : new Vector(16, 24),
			size : new Vector(15, 16),
			nbrOfImages : 2,
			fps : 6,
		},

		climb : {
			position : new Vector(48, 0),
			size : new Vector(16, 16),
			nbrOfImages : 4,
		},

		deathLeft : {
			position : new Vector(120, 0),
			size : new Vector(16, 16),
			nbrOfImages : 3,
		},

		deathRight : {
			position : new Vector(120, 24),
			size : new Vector(16, 16),
			nbrOfImages : 3,
		},
	},

	jumpManSayen : {
		standLeft : {
			position : new Vector(173, 0),
			size : new Vector(12, 16),
		},

		standRight : {
			position : new Vector(173, 24),
			size : new Vector(12, 16),
		},

		runLeft : {
			position : new Vector(189, 0),
			size : new Vector(15, 16),
			nbrOfImages : 2,
			fps : 6,
		},

		runRight : {
			position : new Vector(189, 24),
			size : new Vector(15, 16),
			nbrOfImages : 2,
			fps : 6,
		},

		climb : {
			position : new Vector(221, 0),
			size : new Vector(16, 16),
			nbrOfImages : 4,
		},

		deathLeft : {
			position : new Vector(119, 0),
			size : new Vector(16, 16),
			nbrOfImages : 3,
		},

		deathRight : {
			position : new Vector(119, 24),
			size : new Vector(16, 16),
			nbrOfImages : 3,
		},
	},

	kong : {
		stand : {
			position : new Vector(0, 48),
			size : new Vector(40, 32),
		},

		caisseMarron : {
			position : new Vector(48, 48),
			size : new Vector(43, 32),
			nbrOfImages : 3,
		},

		caisseBleue : {
			position : new Vector(184, 48),
			size : new Vector(43, 32),
			nbrOfImages : 3,
		},

		climb : {
			position : new Vector(320, 48),
			size : new Vector(32, 36),
			nbrOfImages : 2,
		},

		content : {
			position : new Vector(392, 48),
			size : new Vector(46, 32),
			nbrOfImages : 2,
		},

		climbMeuf : {
			position : new Vector(488, 48),
			size : new Vector(43, 36),
			nbrOfImages : 2,
		},

	},

	poline : {
		stand : {
			position : new Vector(0, 88),
			size : new Vector(16, 22),
		},

		dance : {
			position : new Vector(16, 88),
			size : new Vector(15, 22),
			nbrOfImages : 2,
		},
		
		climb : {
			position : new Vector(32, 88),
			size : new Vector(40, 32),
			nbrOfImages : 2,
		},

	},

	fireBall : {
		left : {
			position : new Vector(0, 112),
			size : new Vector(14, 22),
			nbrOfImages : 2,
		},

		right : {
			position : new Vector(32, 112),
			size : new Vector(14, 22),
			nbrOfImages : 2,
		},
	},

	fireBallBlue : {
		left : {
			position : new Vector(0, 128),
			size : new Vector(16, 22),
			nbrOfImages : 2,
		},

		right : {
			position : new Vector(32, 128),
			size : new Vector(14, 16),
			nbrOfImages : 2,
		},
	},

	barrelWood : {
		stand : {
			position : new Vector(0, 144),
			size : new Vector(10, 16),
		},

		rollSide : {
			position : new Vector(16, 144),
			size : new Vector(12, 10),
			nbrOfImages : 4,
		},

		rollFront : {
			position : new Vector(64, 144),
			size : new Vector(16, 10),
			nbrOfImages : 2,
		},
		fourBarrel : {
			position : new Vector(80, 144),
			size : new Vector(20, 32),
		}

	},

	barrelWoodBlue : {
		rollSide : {
			position : new Vector(16, 160),
			size : new Vector(12, 10),
			nbrOfImages : 4,
		},

		rollFront : {
			position : new Vector(64, 160),
			size : new Vector(16, 10),
			nbrOfImages : 2,
		},

	},

	oil : {
		burnNot : {
			position : new Vector(0, 176),
			size : new Vector(16, 32),
		},

		burnBegin : {
			position : new Vector(16, 176),
			size : new Vector(16, 32),
			nbrOfImages : 2,
		},

		burn : {
			position : new Vector(48, 176),
			size : new Vector(16, 32),
			nbrOfImages : 2,
		},

	},

};

for (var name in sprites) {
	charact = sprites[name];
	for (var animName in charact) {
		sprites[name][animName].position.multiply(multiply);
		sprites[name][animName].size.multiply(multiply);
	};
};
