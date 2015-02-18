var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

map = new Map({
	levels: levels,
	size: {width: 28, height:28},
	grid: {width: 24, height: 24},
	ctx: ctx,
});

objects = {};

objects.mario = new Character({

});

map.loadLevel(0, function() {
	map.display();
});

var render = function() {
	
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();