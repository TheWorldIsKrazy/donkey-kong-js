var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

SpriteList.allLoad = function(){
	console.log(allSkins.getSprite('barrelWood', 'rollSide'));
}

var allSkins = new SpriteList({
	source : 'images/spriteMondeX3.png',
	animations : sprites,
});

var map = new Map({
	levels: levels,
	size: {width: 28, height:28},
	grid: {width: 24, height: 24},
	ctx: ctx,
});

var objects = {};

map.loadLevel(0, function() {
	map.display();
});

// objects.mario = new Character({
// 	position : {x : 500, y: 50},
// 	velocity : {x: 0, y:0},
// 	acceleration: {x:0.15, y:0},
// 	ctx : ctx,
// });

// objects.mario.display();

var render = function() {
	map.display();
	for (name in objects) {
		if (objects[name].position.x > 620) {
			objects[name].position.x = 620;
			objects[name].velocity.x = -objects[name].velocity.x*1.2;
		};
		objects[name].applyAcceleration();
		objects[name].applyVelocity();
		objects[name].display();
	};
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();