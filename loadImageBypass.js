/**
 * Uses LoadImageErrorOverride (v1.12)
 * by GoToLoop (2015/Jul/09)
 *
 * forum.Processing.org/two/discussion/11608/
 * i-can-t-display-images-dynamically-loaded-from-web-
 * with-p5-js-always-a-cross-domain-issue#Item_3
 */
var OldLoadImage;
 
var loadImageErrorOverride = function(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
};

var loadImageBypass = function(URL) {
  var img;
  OldLoadImage = loadImage;
  return OldLoadImage(URL,
            function (pic) { print(img = pic), redraw(); },
            loadImageErrorOverride);
};
var loadImage = function(URL) {
  return loadImageBypass(URL);
};
