'use strict';
cc.game.onStart = function() {
  cc.view.adjustViewPort(true);
  cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
  cc.view.resizeWithBrowserSize(true);
  //load resources
  cc.LoaderScene.preload(g_resources, function() {
    cc.director.runScene(new PlayScene());
  }, this);
};
cc.game.run();
