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
	that = this;
	this.image.addEventListener("load", function() {
		that.loaded = true;
	}, false);
	this.image.src = this.source;

	this.draft = document.createElement('canvas');
	this.drfatCtx = this.draft.getContext('2d');

	this.sprites = {};
}

SpriteList.prototype.getSprite = function(anim) {
	if (this.animations[anim] !== undefined) {
		if (this.sprites[anim] == undefined) {
			var imgList = new Array();
			console.log(this.animations[anim]);
			// for (var i = 0; i < Things.length; i++) {
			// 	Things[i]
			// };

			this.sprites[anim] = new Sprite();
		}
		return this.sprites[anim];
	} else {
		console.log("L'animations " + anim + " n'existe pas !");
		return false;
	}
};
