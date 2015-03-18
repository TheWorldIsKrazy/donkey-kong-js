// Librairy init
var listener = new window.keypress.Listener();

// Create list of skins
var allSkins = new SpriteList({
	source : 'images/spriteMondeX3.png',
	animations : sprites,
});

// Create list of skins for maps
var mapSkins = new SpriteList({
	source : 'images/spriteMapX3.png',
	animations : mapSprites,
});

// All sprites registered
SpriteList.startWaiting();

var size = new Vector(28*24, 28*24);

// Layers
var mapLayer = new Layer(0, size);
var jumpmanLayer = new Layer(4, size);
var polineLayer = new Layer(2, size);
var kongLayer = new Layer(1, size);

// Worlds
var mapWorld = new World();
var characteresWorld = new World();

var map;
var jumpman;
var kong;
var poline;

// Init
function init() {
	
	// Keys
		// Left
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
		// Right
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
		// Up
		listener.register_combo({
			keys : "up",
			prevent_repeat : false,
			on_keydown : function() {
				jumpman.setSkin('climb');
				jumpman.skin.play();
				jumpman.up = true;
				jumpman.velocity.setY(-200);
			},
			on_keyup : function() {
				jumpman.skin.pause(3);
				jumpman.up = false;
			}
		});
		// Top
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
		// Space
		listener.register_combo({
			keys : "space",
			prevent_repeat : true,
			on_keydown : function() {
				if (jumpman.spriteObj == 'jumpMan') {
					jumpman.setSkin('standLeft', 'jumpManSayen');
				} else {
					jumpman.setSkin('standLeft', 'jumpMan');
				}
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

	// Characters : JumpMan
	jumpman = new Jumpman({
		position : new Vector(50, 590),
		size : new Vector(12*3, 16*3),
		velocity : new Vector(0, 0),
		layer : jumpmanLayer
	}).setSkin('standLeft', 'jumpMan', allSkins);
	jumpman.up = false;

	characteresWorld.add(jumpman);

	// Characters : Poline
	poline = new Character({
		position : new Vector(300, 5),
		size : new Vector(12*3, 16*3),
		velocity : new Vector(0, 0),
		layer : polineLayer,
	}).setSkin('dance', 'poline', allSkins);

	characteresWorld.add(poline);

	// Characters : Kong
	kong = new Character({
		position : new Vector(30, 60),
		size : new Vector(12*3, 16*3),
		velocity : new Vector(0, 0),
		layer : kongLayer,
	}).setSkin('content', 'kong', allSkins);

	characteresWorld.add(kong);

	// Init
	map.loadLevel(0);
	mapLayer.clear('#000');
	mapWorld.display();

	characteresWorld.display();

}

// Render
function render(timestamp) {

	characteresWorld.applyVelocity();

	// Collisions with 'Ehelles'
	var collisions = jumpman.detectCollisions([mapWorld], ['water']);
	collisions = Collision.filter(collisions, function(col) {
		if ( col.margin.bottom > -20 ) return true;
		else return false;
	});
	if (collisions) {
		if (jumpman.up == false)
			jumpman.setVelocityY(0);
	} else {

	}
	
	// Collisions with 'Blocks'
	var collisions = jumpman.detectCollisions([mapWorld], ['block']);
	collisions = Collision.filter(collisions, function(col) {
		if ( col.margin.bottom > -13 ) return true;
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

	// Collision with Poline
	var collisions = jumpman.detectCollisions([characteresWorld], ['poline']);
	if (collisions) {
		console.log(map.level);
		if (map.level == 0) {
			poline.position = new Vector(300, 5);
			kong.position = new Vector(40, 71);
			map.loadLevel(1);
		} else 
		if (map.level == 1) {
			console.log("chrage lvl 0");
			poline.position = new Vector(300, 5);
			kong.position = new Vector(50, 60);
			map.loadLevel(0);
		}
		jumpman.position = new Vector(50, 590);
		mapLayer.clear('#000');
		mapWorld.display();
	};

	play = true;

	// Collision with Kong
	var collisions = jumpman.detectCollisions([characteresWorld], ['kong']);
	if (collisions) {
		jumpman.setSkin('deathLeft', 'jumpMan');
		jumpman.velocity = new Vector(0,0);
		listener.stop_listening();
		play = false;
	}

	characteresWorld.skinUpdate();
	jumpmanLayer.clear();
	polineLayer.clear();
	kongLayer.clear();
	characteresWorld.display();

	// Loop
	if (play) {
		requestAnimationFrame(render);
	} else {
		var p = document.createElement('h1');
		p.innerHTML = 'Perdu !!';
		document.getElementsByTagName('body')[0].appendChild(p);
	}
}

// When Sprites are loaded
SpriteList.allLoad = function() {
	
	init();

	requestAnimationFrame(render);

}
