// ==UserScript==
// @name          W3 Dev Campus Classrooms
// @namespace     http://arkhi.org/
// @downloadURL   https://github.com/arkhi/userscripts/raw/master/classrooms.w3devcampus.user.js
// @description   On W3 Dev Campus Classrooms, modify styles to make it more legible and focus on what's essential
// @match         http://classroom.w3devcampus.com/*
// @version       0.4
// ==/UserScript==

if (typeof GM_addStyle === 'undefined') {
  GM_addStyle = function(css) {
      var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
      if (!head) {return}
      style.type = 'text/css';
      try {style.innerHTML = css}
      catch(x) {style.innerText = css}
      head.appendChild(style);
  };
}

GM_addStyle(' \
  .pagelayout-incourse h2 {  \
    margin: 6rem 0 .5rem;  \
    font-size: 1.8rem;  \
    font-variant: small-caps; \
    font-weight: bold !important; \
    color: #a00;  \
  } \
\
  .pagelayout-incourse h3 {  \
    margin: 4rem 0 .5rem;  \
    font-size: 1.3rem;  \
    color: #090;  \
  } \
\
  .pagelayout-incourse h4 {  \
    margin: 2rem 0 .5rem;  \
    font-size: 1rem;  \
    color: #00a;  \
  } \
\
  .pagelayout-incourse h2 + h3 {  \
    margin-top: 1rem;  \
  } \
\
  .pagelayout-incourse h3 + h4 {  \
    margin-top: 1rem;  \
  } \
\
  .pagelayout-incourse li {  \
    line-height: 1.25;  \
  } \
\
  body, h2, h3, h4, h5, h6 {  \
    font-family: helvetica !important; \
  } \
\
  .pagelayout-incourse #page-header {  \
    display: none;  \
  } \
\
  .pagelayout-incourse .navbar,  \
  .pagelayout-incourse #page-navbar, \
  .pagelayout-incourse #block-region-side-pre {  \
    opacity: 0;  \
    transition: opacity .25s; \
  } \
\
  .pagelayout-incourse .navbar:hover,  \
  .pagelayout-incourse #page-navbar:hover, \
  .pagelayout-incourse #block-region-side-pre:hover {  \
    opacity: 1;  \
  } \
\
  .pagelayout-incourse #region-main-essential {  \
    width: 33em;  \
    font-size: 1.1rem;  \
    line-height: 1.5 !important;  \
  } \
\
  .pagelayout-incourse [class^=rj_insertcode_],  \
  .pagelayout-incourse [class^=rj_insertcode_] pre { \
    width: auto !important;  \
    padding: .25em .5em;  \
    border: 0;  \
    font-size: 1rem;  \
    font-weight: bold;  \
    color: #060;  \
    background: #e9e9e9;  \
  } \
\
  .pagelayout-incourse .block_book_toc .book_toc_numbered {  \
    font-size: 1em; \
  } \
\
  .pagelayout-incourse .book_content .book_chapter_title { \
    margin-top: 0;  \
    font-size: 2rem; \
    font-weight: bolder !important;  \
    font-variant: initial; \
    text-transform: uppercase;  \
  } \
\
  .back-to-top {  \
    right: 2em;  \
    left: auto;   \
  } \
\
  [class^="icon-"]:before, [class*=" icon-"]:before { \
    text-decoration: none; \
  } \
');
