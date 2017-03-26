/**
 * Uses LoadImageErrorOverride (v1.12)
 * by GoToLoop (2015/Jul/09)
 *
 * forum.Processing.org/two/discussion/11608/
 * i-can-t-display-images-dynamically-loaded-from-web-
 * with-p5-js-always-a-cross-domain-issue#Item_3
 */
 
 
function loadImageErrorOverride(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
}

function loadImageBypass(URL) {
  var img;
  return loadImage(URL,
            function (pic) { print(img = pic), redraw(); },
            loadImageErrorOverride);
}
 
