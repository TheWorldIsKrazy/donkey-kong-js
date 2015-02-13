var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

map = new Map({
	levels: levels,
	size: {width: 28, height:28},
	grid: {width: 8, height: 8},
	ctx: ctx,
});

map.loadLevel();

var render = function() {
	
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();