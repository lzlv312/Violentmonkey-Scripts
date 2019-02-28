// ==UserScript==
// @name 谷歌自动翻译
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
    script.innerText = ''
      + 'var googleTranslateElementInit = function() {'
        + 'new google.translate.TranslateElement({'
          + 'layout: google.translate.TranslateElement.InlineLayout.SIMPLE'
        + '});'
      + '};';
    var head = document.querySelector('head') || document.documentElement;
    head.insertBefore(script, head.firstChild);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = 'https://translate.google.cn/translate_a/element.js?cb=googleTranslateElementInit';
    head.insertBefore(script, head.lastChild);
    document.cookie = 'googtrans = /auto/zh-CN';
  };
};

document.onreadystatechange = function() {
  if (document.readyState == 'complete') {
    jsMain();
  };
};
