'use strict';
var res = {
  helloBG_png: 'res/helloBG.png',
  startNormal_png: 'res/start_n.png',
  startClick_png: 'res/start_s.png',
  background: 'res/playBG.png',
  runner: 'res/runner.png',
  running_png: 'res/running.png',
  running_plist: 'res/running.plist'
};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}
