// ==UserScript==
// @name          Layout for Github PR.
// @namespace     http://arkhi.org/
// @downloadURL   https://github.com/arkhi/userscripts/raw/master/pr-github.user.js
// @description   Hide a few things that were said to be annoying.
// @match         https://github.com/juwai/*
// @version       0.1
// ==/UserScript==

var GM_addStyle = GM_addStyle || function(css) {
  var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
  if (!head) {return}
  style.type = 'text/css';
  try {style.innerHTML = css}
  catch(x) {style.innerText = css}
  head.appendChild(style);
};

GM_addStyle(
    '.review-thread-reply .avatar {'
    + '    display: none;'
    + '}'
);
