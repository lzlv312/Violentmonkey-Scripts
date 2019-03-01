// ==UserScript==
// @name 必应自动翻译
// @namespace Violentmonkey Scripts
// @match *://*/*
// @grant none
// ==/UserScript==

var isChn = function() {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+');
  var title = document.title;
  return reg.test(title);
};

var isFan = function() {
  var turn = false;
  var href = window.location.href;
  var list = ['fanyi', 'translat', 'dict'];
  for (var i in list) {
    var reg = new RegExp(list[i], 'i');
    if (reg.test(href)) {
      turn = true;
      break;
    };
  };
  return turn;
};

var jsMain = function() {
  if (! isChn() && ! isFan()) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = (window.location.href.indexOf('https') == 0 ? 'https://ssl.microsofttranslator.com' : 'http://www.microsofttranslator.com') + '/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**&ctf=False&ui=False&settings=Auto';
    var head = document.querySelector('head') || document.documentElement;
    head.insertBefore(script, head.firstChild);
  };
};

document.onreadystatechange = function() {
  if (document.readyState == 'complete') {
    jsMain();
  };
};

// 仅简单封装，无翻译按钮，对于使用 安全策略Content Security Policy (CSP) 的站点无效
