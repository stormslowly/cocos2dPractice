'use strict';

var PlayScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    this.addChild(new BackgroundLayer());
    this.addChild(new StatusLayer());
    this.addChild(new AnimationLayer());

  }
});
