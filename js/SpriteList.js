/**
* Class SpriteList
* @source : sprite image url
* 
**/
var SpriteList = function(params) {
	this.source = params.source || null;

	this.animations = params.animations || null;

	this.loaded = false;

	this.image = new Image();
	var that = this;
	
	// Static
	SpriteList.waitForLoad = SpriteList.waitForLoad || 0;
	SpriteList.allRegistered = false;
	SpriteList.waitForLoad++;

	this.image.addEventListener("load", function() {
		(function(spritelist){
			spritelist.onload();
		})(that);
	}, false);
	this.image.src = this.source;

	this.draft = document.createElement('canvas');
	this.draftCtx = this.draft.getContext('2d');

	this.sprites = {};

}

SpriteList.prototype.getSprite = function(obj, anim, params) {
	if (this.animations[obj][anim] !== undefined) {
		if (this.sprites[obj] == undefined) {
			this.sprites[obj] = {};
		};
		if (this.sprites[obj][anim] == undefined) {
			// Create the Skin
			var sprite = this.animations[obj][anim];

			var imgList = new Array();

			sprite.nbrOfImages = sprite.nbrOfImages || 1;

			for (var i = 0; i < sprite.nbrOfImages; i++) {
				var x = sprite.position.x + (i*sprite.size.width);
				var y = sprite.position.y;
				imgList[i] = this.draftCtx.getImageData(x, y, sprite.size.width, sprite.size.height);
			};

			var params = params || {};
			params.imgList = imgList;

			this.sprites[obj][anim] = new Skin(params);
		}
		// Clone sprite
		return this.sprites[obj][anim];
	} else {
		console.log("L'animations " + anim + " n'existe pas !");
		return false;
	}
};

SpriteList.prototype.onload = function() {
	console.log("The SpriteList for \"" + this.source + "\" is loaded !");
	this.loaded = true;
	this.draft.width = this.image.width;
	this.draft.height = this.image.height;
	this.draftCtx.drawImage(this.image, 0, 0);
	SpriteList.waitForLoad--;
	if ( SpriteList.waitForLoad == 0 && SpriteList.allRegistered == true ) {
		console.log("All spritelist are loaded");
		SpriteList.allLoad();
	}
};

SpriteList.startWaiting = function() {
	SpriteList.allRegistered = true;
	if (SpriteList.waitForLoad == 0) {
		SpriteList.allLoad();
	}
}

SpriteList.allLoad = function() {
	
}