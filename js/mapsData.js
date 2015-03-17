var levels = Array();

levels[0] = {};

function decalage(content, map, x, y){
	content = parseInt(content, 10);
	map.displayElem('block',
		x*map.grid.width, y*map.grid.width + content*(map.grid.height*0.125),
		map.grid.width, map.grid.height
	);
}

levels[0].elements = {
	' ' : {
		skin : null,
	},

	'0' : {
		skin : ['lvl0', 'blockRouge'],
	},

	'1' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'2' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'3' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'4' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'5' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'6' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'7' : {
		skin : ['lvl0', 'blockRouge'],
		xOffset : 1,
	},

	'8' : {
		skin : ['lvl0', 'blockRouge'],
	},

	'H' : {
		skin : ['lvl0', 'echelleBleu'],
		xOffset : 1,
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
	block : 'images/blockJaune.png',
	carre : 'images/blockCarreJaune.png',
	croix : 'images/croix.png',
	echelle : 'images/echelleBlanche.png',
};

levels[1].elements = {
	' ' : new Block({
		skin : function() {},
	}),
	'N' : new Block({
		skin : 'block',
	}),
	'=' : new Block({
		skin : 'carre',
	}),
	'H' : new Block({
		skin : 'echelle',
	}),
	'X' : new Block({
		skin : 'croix',
	}),
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


