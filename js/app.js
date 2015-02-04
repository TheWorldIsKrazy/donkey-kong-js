var canvas = document.getElementById('monster');
var ctx = canvas.getContext('2d');

map = new Map({

});

var render = function() {
	
};

(function animloop(){
	requestAnimationFrame(animloop);
	render();
})();