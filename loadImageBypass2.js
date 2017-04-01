
 
var loadImageErrorOverride = function(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
};

var OldLoadImage = loadImage;
loadImage = function(URL) {
  return loadImageBypass(URL);
};

var loadImageBypass = function(URL) {
       var img;
       return OldLoadImage(URL,
            function (pic) { print(img = pic), redraw(); },
            loadImageErrorOverride);
};

