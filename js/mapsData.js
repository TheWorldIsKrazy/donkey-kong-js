var levels = Array();

levels[0] = {};

levels[0].skins = {
	block : 'images/blockRouge.png',
	echelle : 'images/echelleBleu.png',
};

function decalage(content, map, x, y){
	content = parseInt(content, 10);
	map.displayElem('block',
		x*map.grid.width, y*map.grid.width + content*(map.grid.height*0.125),
		map.grid.width, map.grid.height
	);
}

levels[0].elements = {
	' ' : new Block({
		skin : function() {},
	}),

	'0' : new Block({
		skin : 'block',
	}),

	'1' : new Block({
		skin : decalage,
	}),

	'2' : new Block({
		skin : decalage,
	}),

	'3' : new Block({
		skin : decalage,
	}),

	'4' : new Block({
		skin : decalage,
	}),

	'5' : new Block({
		skin : decalage,
	}),

	'6' : new Block({
		skin : decalage,
	}),

	'7' : new Block({
		skin : decalage,
	}),

	'8' : new Block({
		skin : decalage,
	}),

	'H' : new Block({
		skin : 'echelle',
	}),

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


