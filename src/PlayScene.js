'use strict';

var PlayScene = cc.Scene.extend({

  space: null,
  initPhysic: function() {
    this.space = new cp.Space();
    this.space.gravity = new cp.v(0, -350);

    var floor = new cp.SegmentShape(this.space.staticBody, new cp.v(0, 85),
      new cp.v(1000, 85), 0);

    this.space.addStaticShape(floor);

  },

  onEnter: function() {
    this._super();

    this.initPhysic();

    this.addChild(new BackgroundLayer());
    this.addChild(new StatusLayer());
    this.addChild(new AnimationLayer(this.space));

    this.scheduleUpdate();

  },

  update: function(dt) {
    this.space.step(dt);
  }
});
