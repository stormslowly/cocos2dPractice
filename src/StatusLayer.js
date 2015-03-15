'use strict';
/* jshint unused: false */
var StatusLayer = cc.Layer.extend({
  ctor: function() {
    this._super();
    var winSize = cc.director.getWinSize();

    var coinLable = new cc.LabelTTF('Coin:0', 'Helvetica', 30);
    coinLable.setColor(cc.color(33, 255, 255));
    coinLable.setAnchorPoint(cc.p(0, 0.5));
    coinLable.setPosition(cc.p(20, winSize.height - 30));

    var meterLabel = new cc.LabelTTF('100 M', 'Helvetica', 30);
    meterLabel.setColor(cc.color(33, 255, 255));
    meterLabel.setAnchorPoint(cc.p(1, 0.5));
    meterLabel.setPosition(cc.p(winSize.width - 30, winSize.height - 30));

    this.addChild(coinLable);
    this.addChild(meterLabel);
  }
});
