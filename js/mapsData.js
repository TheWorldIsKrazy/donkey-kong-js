var levels = Array();

levels[0] = {};

levels[0].images = {
	block : 'images/blockRouge.png',
	echelle : 'images/echelleBleu.png',
};

levels[0].elements = {
	' ' : function() {},
	'0' : 'block',
	'1234567' : function() {},
	'H' : 'echelle',
};

function decalage(content, map, x, y){
	content = parseInt(content, 10);
	map.displayElem('block',
		x*map.grid.width, y*map.grid.width + content,
		map.grid.width, map.grid.height
	);
}

levels[0].elements = {
	' ' : new Block(
		skin : function() {},
	),

	'0' : new Block(
		skin : 'block',
	),

	'1' : new Block(
		skin : decalage,
	),

	'2' : new Block(
		skin : decalage,
	),

	'3' : new Block(
		skin : decalage,
	),

	'4' : new Block(
		skin : decalage,
	),

	'5' : new Block(
		skin : decalage,
	),

	'6' : new Block(
		skin : decalage,
	),

	'7' : new Block(
		skin : decalage,
	),

	'8' : new Block(
		skin : decalage,
	),

	'H' : new Block(
		skin : 'echelle',
	),

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

levels[1].images = {
	block : 'images/blockJaune.png',
	carre : 'images/blockCarreJaune.png',
	croix : 'images/croix.png',
	echelle : 'images/echelleBlanche.png',
};

levels[1].elements = {
	' ' : function() {},
	'N' : 'block',
	'=' : 'carre',
	'H' : 'echelle',
	'X' : 'croix',
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
















// levels[1] = {};

// levels[1].images = {
// 	blockRouge : 'images/blockRouge.png'
// 	blockJaune : 'images/blockJaune.png'
// 	blockCarreJaune : 'images/blockCarreJaune.png'
// 	croix : 'images/croix.png'
// 	echelleBleu : 'images/echelleBleu.png'
// 	echelleBlanche : 'images/echelleBlanche.png'
// };

// levels[1].blocks = [
// 	[9999999909099999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999900000099999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9111111111111111111111111119]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[1111111111199999111111111111]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9000009900000000000099000009]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9111111111111111111111111119]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[9999999999999999999999999999]
// 	[0000000000000000000000000000]
// ];

// levels[1].echelles = [
// 	[0000000000000000000000000000]
// 	[0000000010100000000000000000]
// 	[0000000010100000000000000000]
// 	[0000000010100000000000000000]
// 	[0000000010100000000000000000]
// 	[0000000010100000100000000000]
// 	[0000000010100000100000000000]
// 	[0000000000000000100000000000]
// 	[0000000000000000000000000000]
// 	[0000000000000000000000000000]
// 	[0010000000000000000000000100]
// 	[0010000000000000000000000100]
// 	[0000000000000000000000000000]
// 	[0001000000100000010000001000]
// 	[0001000000102222010000001000]
// 	[0001000000102222010000001000]
// 	[0001000000102222010000001000]
// 	[0000000000000000000000000000]
// 	[0000000010000000000100000000]
// 	[0000000010000000000100000000]
// 	[0000000010000000000100000000]
// 	[0000000010000000000100000000]
// 	[0000000000000000000000000000]
// 	[0001000000100000010000001000]
// 	[0001000000100000010000001000]
// 	[0001000000100000010000001000]
// 	[0001000000100000010000001000]
// 	[0000000000000000000000000000]
// ];
