// ==UserScript==
// @name          W3 Dev Campus Classrooms (print)
// @namespace     http://arkhi.org/
// @downloadURL   https://github.com/arkhi/userscripts/raw/master/print.classrooms.w3devcampus.user.js
// @description   On W3 Dev Campus Classrooms, make a printable version of books.
// @match         http://classroom.w3devcampus.com/*
// @version       0.1
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
  .pagelayout-incourse h2 { \
    margin: 6rem 0 .5rem; \
    font-size: 1.8rem; \
    font-variant: small-caps; \
    font-weight: bold !important; \
    color: #a00; \
  } \
\
  .pagelayout-incourse h3 { \
    margin: 4rem 0 .5rem; \
    font-size: 1.3rem; \
    color: #090; \
  } \
\
  .pagelayout-incourse h4 { \
    margin: 2rem 0 .5rem; \
    font-size: 1rem; \
    color: #00a; \
  } \
\
  .pagelayout-incourse h2 + h3 { \
    margin-top: 1rem; \
  } \
\
  .pagelayout-incourse h3 + h4 { \
    margin-top: 1rem; \
  } \
\
  .pagelayout-incourse li { \
    line-height: 1.25; \
  } \
\
  body, h2, h3, h4, h5, h6 { \
    font-family: helvetica !important; \
  } \
\
  .pagelayout-incourse { \
    border: 0; \
  } \
\
  .pagelayout-incourse #page-header, \
  .pagelayout-incourse #maincontent, \
  .pagelayout-incourse #page-navbar, \
  .pagelayout-incourse #block-region-side-pre, \
  .pagelayout-incourse #block-region-side-post, \
  .pagelayout-incourse .skiplinks, \
  .pagelayout-incourse .navbar, \
  .pagelayout-incourse .navtop, \
  .pagelayout-incourse .navbottom, \
  .pagelayout-incourse .back-to-top { \
    display: none !important; \
  } \
\
  .pagelayout-incourse #region-bs-main-and-pre, \
  .pagelayout-incourse #region-main-essential, \
  .pagelayout-incourse .row-fluid, \
  .pagelayout-incourse .container-fluid { \
    width: auto !important; \
    max-width: none !important; \
    padding: 0 !important; \
    margin: 0 !important; \
  } \
\
  .pagelayout-incourse #region-main-essential { \
    font-size: 1.1rem; \
    line-height: 1.5 !important; \
  } \
\
  .pagelayout-incourse [class^=rj_insertcode_], \
  .pagelayout-incourse [class^=rj_insertcode_] pre { \
    width: auto !important; \
    padding: .25em .5em; \
    border: 0; \
    font-size: 1rem; \
    font-weight: bold; \
    color: #060; \
    background: #e9e9e9; \
  } \
\
  .pagelayout-incourse .block_book_toc .book_toc_numbered { \
    font-size: 1em; \
  } \
\
  .pagelayout-incourse .book_content .book_chapter_title { \
    margin-top: 0; \
    font-size: 2rem; \
    font-weight: bolder !important; \
    font-variant: initial; \
    text-transform: uppercase; \
  } \
\
  [class^="icon-"]:before, [class*=" icon-"]:before { \
    text-decoration: none; \
  } \
');
