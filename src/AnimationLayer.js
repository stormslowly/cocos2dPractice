'use strict';
/*global res,Utils*/
var AnimationLayer = cc.Layer.extend({
  ctor: function(space) {
    this._super();
    this.space = space;


    cc.spriteFrameCache.addSpriteFrames(res.running_plist);

    var runnerFrames = Utils.generateFrameNames('runner', 0, 7, '.png', 0)
      .map(function(frameName) {
        return cc.spriteFrameCache.getSpriteFrame(frameName);
      });

    var runner = new cc.Sprite('#runner5.png');
    runner.attr({
      x: 100,
      y: 85
    });



    var runningAnimation = new cc.Animation(runnerFrames, 0.1);

    var runningAction = new cc.RepeatForever(new cc.Animate(
      runningAnimation));

    runner.runAction(runningAction);

    this.addChild(runner);

  }
});
