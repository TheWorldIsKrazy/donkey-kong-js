var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

// Events
canvas.addEventListener('click', function(event) {
	if (monster.currentAnimation == 'jump') {
		monster.setAnimation('boom');
		window.setTimeout(function() {
			monster.setAnimation('jump');
		}, 2000);
	}
});

// Monster Sprite
var monster = new Sprite({
	source : 'images/monsterTileSheet.png',
	size : {height: 128, width: 128},
	rows : 3,
	nbrOfImages: 7,
	canvas: canvas,
	animations: {
		'jump': {
			min: 0,
			max:5,
			frameRate:10,
			bounceMin: function(sprite) {
				sprite.setAnimation('hide');
				sprite.reverse = false;
				delay = (Math.random()*2*1000);
				window.setTimeout(function() {
					sprite.setAnimation('jump');
				}, delay);
			}
		},
		'hide': {min: 0, max:0, frameRate:0},
		'boom': {min: 6, max:6, frameRate:0}
	},
	currentAnimation: 'jump',
});

var render = function() {
	monster.update();
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();