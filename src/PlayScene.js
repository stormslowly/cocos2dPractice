'use strict';
var Test = cc.Layer.extend({
  ctor: function() {
    this._super();

    var letsplay = new cc.LabelTTF('in PlayScene.js', 'Arial', 38);
    letsplay.setAnchorPoint(cc.p(0.5, 0.5));
    letsplay.setPosition(cc.p(100, 100));


    this.addChild(letsplay);


  }
});


var PlayScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    this.addChild(new Test());
  }
});
