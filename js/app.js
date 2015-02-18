var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

map = new Map({
	levels: levels,
	size: {width: 28, height:28},
	grid: {width: 16, height: 16},
	ctx: ctx,
});

map.loadLevel(1, function() {
	map.display();
});

var render = function() {
	
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();