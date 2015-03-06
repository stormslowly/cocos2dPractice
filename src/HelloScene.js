'use strict';
/* global res */
var HelloLayer = cc.Layer.extend({
  ctor: function() {
    this._super();
    var winSize = cc.winSize;
    var centerPointer = cc.p(winSize.width * 0.5, winSize.height * 0.5);

    var background = new cc.Sprite(res.helloBG_png);
    background.setAnchorPoint(cc.p(0.5, 0.5));
    background.setPosition(centerPointer);
    this.addChild(background);


    var startMenuItem = new cc.MenuItemSprite(
      new cc.Sprite(res.startNormal_png),
      new cc.Sprite(res.startClick_png), this.startGame, this);
    var menu = new cc.Menu(startMenuItem);
    this.addChild(menu);

  },
  startGame: function() {
    console.log('logs', 'ckicked start');
    cc.director.runScene(new Test());
  }
});


var HelloScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    this.addChild(new HelloLayer());
  }
});
