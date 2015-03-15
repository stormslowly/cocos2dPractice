'use strict';
var BackgroundLayer = cc.Layer.extend({
  ctor: function() {
    this._super();

    var winSize = cc.director.getWinSize();

    var background = new cc.Sprite(res.background);
    background.setAnchorPoint(cc.p(0.5, 0.5));
    background.setPosition(cc.p(winSize.width / 2, winSize.height / 2));

    this.addChild(background);

  }
});
