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
var jumpman;

// Init
function init() {
	
	map = new Map({
		levels: levels,
		skins: mapSkins,
		size: {width: 28, height:28},
		grid: {width: 24, height: 24},
		world: mapWorld,
		layer: mapLayer,
	});

	jumpman = new Character({
		position : {x:200, y:200},
		size : {width: 12*3, height:16*3},
		velocity : {x:0, y:0.5},
		layer : characteresLayer
	}).setSkin(allSkins, 'jumpMan','standLeft');


	characteresWorld.add(jumpman);

	map.loadLevel(0);
	mapLayer.clear('#000');
	mapWorld.display();
	characteresWorld.display();

}

// Render
function render(timestamp) {

	characteresWorld.applyVelocity();
	collisions = jumpman.collisions([mapWorld]);
	console.log(collisions);
	characteresLayer.clear();
	characteresWorld.display();

	// Loop
	requestAnimationFrame(render);
}

// When Sprites are loaded
SpriteList.allLoad = function() {
	
	init();

	requestAnimationFrame(render);

}
