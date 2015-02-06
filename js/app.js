var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

map = new Map({
	levels: levels,
});

var render = function() {
	
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();