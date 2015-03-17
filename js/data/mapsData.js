var multiply = 3;

var levels = Array();

levels[0] = {};

// function decalage(content, map, x, y){
// 	content = parseInt(content, 10);
// 	map.displayElem('block',
// 		x*map.grid.width, y*map.grid.width + content*(map.grid.height*0.125),
// 		map.grid.width, map.grid.height
// 	);
// }

levels[0].skins = {
	'0' : {
		skin : ['lvl0', 'blockRouge'],
	},

	'1' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 1,
	},

	'2' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 2,
	},

	'3' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 3,
	},

	'4' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 4,
	},

	'5' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 5,
	},

	'6' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 6,
	},

	'7' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 7,
	},

	'8' : {
		skin : ['lvl0', 'blockRouge'],
		yOffset : 8,
	},

	'H' : {
		skin : ['lvl0', 'echelleBleu'],
		yOffset : 1,
	},

};


levels[0].maps = Array();

levels[0].maps[0] = [
	"        H H                 ",
	"        H H                 ",
	"        H H                 ",
	"        H H                 ",
	"        H H     H           ",
	"        H H     H           ",
	"        H H     H           ",
	"           H           H    ",
	"                       H    ",
	"           H           H    ",
	"           H                ",
	"         H           H      ",
	"    H    H                  ",
	"    H    H                  ",
	"         H           H      ",
	"        H     H             ",
	"              H        H    ",
	"              H        H    ",
	"        H     H        H    ",
	"            H               ",
	"    H       H               ",
	"    H       H               ",
	"    H       H               ",
	"          H                 ",
	"                       H    ",
	"                       H    ",
	"          H            H    ",
	"                            ",
];

levels[0].maps[1] = [
	"                            ",
	"                            ",
	"                            ",
	"           000000           ",
	"                            ",
	"                            ",
	"444444444444444444556677    ",
	"                        00  ",
	"                            ",
	"                      776655",
	"      7766554433221100      ",
	"  1100                      ",
	"                            ",
	"6677                        ",
	"    0011223344556677        ",
	"                    001122  ",
	"                            ",
	"                          77",
	"          7766554433221100  ",
	"  33221100                  ",
	"                            ",
	"                            ",
	"0011223344556677            ",
	"                0011223344  ",
	"                            ",
	"                            ",
	"              77665544332211",
	"00000000000000              ",
];


levels[1] = {};

levels[1].skins = {
	'N' : {
		skin : ['lvl1', 'blockJaune'],
	},
	'=' : {
		skin : ['lvl1', 'blockCarreJaune'],
	},
	'H' : {
		skin : ['lvl1', 'echelleBlanche'],
	},
	'X' : {
		skin : ['lvl1', 'croix'],
	},
};


levels[1].maps = Array();

levels[1].maps[0] = [
	"                            ",
	"        H H                 ",
	"        H H                 ",
	"        H H                 ",
	"        H H     H           ",
	"        H H     H           ",
	"        H H     H           ",
	"                            ",
	"                            ",
	"                            ",
	"  H                      H  ",
	"  H                      H  ",
	"                            ",
	"   H      H      H      H   ",
	"   H      H XXXX H      H   ",
	"   H      H XXXX H      H   ",
	"   H      H XXXX H      H   ",
	"                            ",
	"        H          H        ",
	"        H          H        ",
	"        H          H        ",
	"        H          H        ",
	"                            ",
	"   H      H      H      H   ",
	"   H      H      H      H   ",
	"   H      H      H      H   ",
	"   H      H      H      H   ",
	"                            ",
];

levels[1].maps[1] = [
	"        N N                 ",
	"                            ",
	"                            ",
	"           NNNNNN           ",
	"                            ",
	"                            ",
	"                            ",
	" ========================== ",
	"                            ",
	"                            ",
	"                            ",
	"                            ",
	"===========     ============",
	"                            ",
	"                            ",
	"                            ",
	"                            ",
	" NNNNN  NNNNNNNNNNNN  NNNNN ",
	"                            ",
	"                            ",
	"                            ",
	"                            ",
	" ========================== ",
	"                            ",
	"                            ",
	"                            ",
	"                            ",
	"NNNNNNNNNNNNNNNNNNNNNNNNNNNN",
];

for (var i = 0; i < levels.length; i++) {
	var level = levels[i];
	for (var name in level.skins) {
		var skin = level.skins[name];
		skin.xOffset = skin.xOffset*3 || skin.xOffset;
		skin.yOffset = skin.yOffset*3 || skin.yOffset;
	};
};

