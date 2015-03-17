var allSkins = new SpriteList({
	source : 'images/spriteMondeX3.png',
	animations : sprites,
});

var mapSkins = new SpriteList({
	source : 'images/spriteMapX3.png',
	animations : mapSprites,
});

SpriteList.startWaiting();

var size = {width: 28*24, height: 28*24};

var mapLayer = new Layer(0, size);
var characteresLayer = new Layer(1, size);

var mapWorld = new World();
var characteresWorld = new World();
var map;

SpriteList.allLoad = function() {
	
	map = new Map({
		levels: levels,
		skins: mapSkins,
		size: {width: 28, height:28},
		grid: {width: 24, height: 24},
		world: world,
		layer: mapLayer,
	});

	map.loadLevel(0);
	mapLayer.clear('#000');
	world.display([mapLayer]);

	window.setInterval(function() {
		characteresLayer.clear();
		world.display([characteresLayer]);
		world.applyVelocity();
	}, 1000/60);

}
