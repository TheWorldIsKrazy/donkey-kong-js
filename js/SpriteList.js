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
	SpriteList.waitForLoad++;
	this.image.addEventListener("load", function() {
		(function(spritelist){
			console.log(spritelist);
			spritelist.onload();
		})(that);
	}, false);
	this.image.src = this.source;

	this.draft = document.createElement('canvas');
	this.draftCtx = this.draft.getContext('2d');
	this.draftCtx.drawImage(this.image, 0, 0);
	this.sprites = {};
}

SpriteList.prototype.getSprite = function(obj, anim) {
	if (this.animations[obj][anim] !== undefined) {
		if (this.sprites[obj] == undefined) {
			this.sprites[obj] = {};
		};
		if (this.sprites[obj][anim] == undefined) {
			var sprite = this.animations[obj][anim];

			var imgList = new Array();

			for (var i = 0; i < sprite.nbrOfImages; i++) {
				var x = sprite.position.x + (i*sprite.size.width);
				var y = sprite.position.y;
				imgList[i] = this.draftCtx.getImageData(x, y, sprite.size.width, sprite.size.height);
			};

			console.log(imgList);

			//this.sprites[obj][anim] = new Sprite();
		}
		return this.sprites[obj][anim];
	} else {
		console.log("L'animations " + anim + " n'existe pas !");
		return false;
	}
};

SpriteList.prototype.onload = function() {
	console.log("The SpriteList for \"" + this.source + "\" is loaded !");
	this.loaded = true;
	SpriteList.waitForLoad--;
	if ( SpriteList.waitForLoad == 0 ) {
		console.log("All spritelist are loaded");
		SpriteList.allLoad();
	}
};

SpriteList.waitForLoad = 0;

SpriteList.allLoad = function() {
	
}