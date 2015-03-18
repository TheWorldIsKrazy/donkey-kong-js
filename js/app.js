// Librairy init
var listener = new window.keypress.Listener();

var allSkins = new SpriteList({
	source : 'images/spriteMondeX3.png',
	animations : sprites,
});

var mapSkins = new SpriteList({
	source : 'images/spriteMapX3.png',
	animations : mapSprites,
});

SpriteList.startWaiting();

var size = new Vector(28*24, 28*24);

var mapLayer = new Layer(0, size);
var characteresLayer = new Layer(1, size);

var mapWorld = new World();
var characteresWorld = new World();

var map;
var jumpman;

// Init
function init() {
	
	// Keys
	listener.register_combo({
		keys : "left",
		prevent_repeat : true,
		on_keydown : function() {
			jumpman.velocity.setX(-200);
			jumpman.setSkin('runLeft');
		},
		on_keyup : function() {
			jumpman.velocity.setX(0);
			jumpman.setSkin('standLeft');
		},
	});
	listener.register_combo({
		keys : "right",
		prevent_repeat : true,
		on_keydown : function() {
			jumpman.velocity.setX(200);
			jumpman.setSkin('runRight');
		},
		on_keyup : function() {
			jumpman.velocity.setX(0);
			jumpman.setSkin('standRight');
		},
	});
	listener.register_combo({
		keys : "up",
		prevent_repeat : false,
		on_keydown : function() {
			jumpman.setSkin('climb');
			jumpman.up = true;
			jumpman.velocity.setY(-200);
		},
		on_keyup : function() {
			jumpman.up = false;
			jumpman.skin.pause(0);
		}
	});
	listener.register_combo({
		keys : "down",
		prevent_repeat : false,
		on_keydown : function() {
			jumpman.up = true;
			jumpman.velocity.setY(200);
		},
		on_keyup : function() {
			jumpman.up = false;
		}
	});

	// Map
	map = new Map({
		levels: levels,
		skins: mapSkins,
		size: new Vector(28, 28),
		grid: new Vector(24, 24),
		world: mapWorld,
		layer: mapLayer,
	});

	// Characters
	jumpman = new Jumpman({
		position : new Vector(200, 200),
		size : new Vector(12*3, 16*3),
		velocity : new Vector(0, 0),
		layer : characteresLayer
	}).setSkin('standLeft', 'jumpMan', allSkins);
	jumpman.up = false;

	characteresWorld.add(jumpman);

	// Init
	map.loadLevel(0);
	mapLayer.clear('#000');
	mapWorld.display();
	characteresWorld.display();

}

// Render
function render(timestamp) {

	characteresWorld.applyVelocity();

	// Echelles
	var collisions = jumpman.detectCollisions([mapWorld], ['water']);
	collisions = Collision.filter(collisions, function(col) {
		if ( col.margin.bottom > -20 ) return true;
		else return false;
	});
	if (collisions) {
		if (jumpman.up == false)
			jumpman.setVelocityY(0);
	} else {

		// Block
		var collisions = jumpman.detectCollisions([mapWorld], ['block']);
		collisions = Collision.filter(collisions, function(col) {
			if ( col.margin.bottom > -20 ) return true;
			else return false;
		});
		if (collisions) {
			if (jumpman.up == false)
				jumpman.setVelocityY(0);
			var collision = collisions[0];
			var bot = collision.margin.bottom;
			jumpman.position.y += bot;
		} else {
			if (jumpman.up == false)
				jumpman.setVelocityY(100);
		}
	}



	
	characteresWorld.skinUpdate();
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
