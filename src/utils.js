'use strict';

var Utils = {

  pad: function(str, len, pad) {
    // body...
    if (str.length >= len) {
      return str;
    }

    var nToPad = len - str.length;
    return new Array(nToPad + 1).join(pad) + str;
  },

  generateFrameNames: function(prefix, start, stop, suffix, zeroPad) {
    var output = [];
    var frame = '';
    for (var i = start; i <= stop; i++) {
      if (typeof zeroPad === 'number') {
        //  str, len, pad, dir
        frame = this.pad(i.toString(), zeroPad, '0', 1);
      } else {
        frame = i.toString();
      }

      frame = prefix + frame + suffix;

      output.push(frame);
    }
    return output;
  }

};
