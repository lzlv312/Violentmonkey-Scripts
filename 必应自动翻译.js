// ==UserScript==
// @name 必应自动翻译
// @namespace Violentmonkey Scripts
// @match *://*/*
// @grant none
// ==/UserScript==

var isChn = function(text) {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+');
  return reg.test(text);
};

var jsMain = function() {
  var title = document.title;
  if (! isChn(title)) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = ((location && location.href && location.href.indexOf('https') == 0) ? 'https://ssl.microsofttranslator.com' : 'http://www.microsofttranslator.com') + '/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**&ctf=False&ui=False&settings=Auto&from=';
    var head = document.querySelector('head') || document.documentElement;
    head.insertBefore(script, head.firstChild);
  };
};

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    jsMain();
  };
};
