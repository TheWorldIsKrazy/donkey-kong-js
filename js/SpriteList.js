/**
* Class SpriteList
* @source : sprite image
* @animations : {'name': {min: frame, max:frame, frameRate: X(fps)}}
**/
var SpriteList = function(params) {
	this.source = params.source || null;

	this.animations = params.animations || null;

	this.loaded = false;

	this.image = new Image();
	var that = this;
	this.image.addEventListener("load", function() {
		(function(spritelist){
			console.log("The SpriteList for \"" + spritelist.source + "\" is loaded !");
			spritelist.loaded = true;
		})(that);
	}, false);
	this.image.src = this.source;

	this.draft = document.createElement('canvas');
	this.drfatCtx = this.draft.getContext('2d');

	this.sprites = {};
}

SpriteList.prototype.getSprite = function(obj, anim) {
	if (this.animations[obj][anim] !== undefined) {
		if (this.sprites[obj] == undefined) {
			this.sprites[obj] = {};
		};
		if (this.sprites[obj][anim] == undefined) {
			var imgList = new Array();
			
			// for (var i = 0; i < Things.length; i++) {
			// 	Things[i]
			// };

			//this.sprites[obj][anim] = new Sprite();
		}
		return this.sprites[obj][anim];
	} else {
		console.log("L'animations " + anim + " n'existe pas !");
		return false;
	}
};
