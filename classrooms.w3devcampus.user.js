// ==UserScript==
// @name          Classrooms W3 Dev Campus
// @namespace     http://arkhi.org/userscripts/
// @downloadURL   https://github.com/arkhi/userscripts/raw/master/classrooms.w3devcampus.user.js
// @description   On W3 Dev Campus Classrooms, modify styles to make it more legible and focus on what's essential
// @match         http://classroom.w3devcampus.com/*
// @version       0.3
// ==/UserScript==

GM_addStyle(' \
  .path-mod-book h2 {  \
    margin: 6rem 0 .5rem;  \
    font-size: 1.8rem;  \
    font-variant: small-caps; \
    font-weight: bold !important; \
    color: #a00;  \
  } \
\
  .path-mod-book h3 {  \
    margin: 4rem 0 .5rem;  \
    font-size: 1.3rem;  \
    color: #090;  \
  } \
\
  .path-mod-book h4 {  \
    margin: 2rem 0 .5rem;  \
    font-size: 1rem;  \
    color: #00a;  \
  } \
\
  .path-mod-book h2 + h3 {  \
    margin-top: 1rem;  \
  } \
\
  .path-mod-book h3 + h4 {  \
    margin-top: 1rem;  \
  } \
\
  .path-mod-book li {  \
    line-height: 1.25;  \
  } \
\
  body, h2, h3, h4, h5, h6 {  \
    font-family: helvetica !important; \
  } \
\
  .path-mod-book #page-header {  \
    display: none;  \
  } \
\
  .path-mod-book .navbar,  \
  .path-mod-book #page-navbar, \
  .path-mod-book #block-region-side-pre {  \
    opacity: 0;  \
    transition: opacity .25s; \
  } \
\
  .path-mod-book .navbar:hover,  \
  .path-mod-book #page-navbar:hover, \
  .path-mod-book #block-region-side-pre:hover {  \
    opacity: 1;  \
  } \
\
  .path-mod-book #region-main-essential {  \
    width: 33em;  \
    font-size: 1.1rem;  \
    line-height: 1.5 !important;  \
  } \
\
  .path-mod-book .rj_insertcode_javascript,  \
  .path-mod-book .rj_insertcode_javascript pre { \
    width: auto;  \
    padding: .25em .5em;  \
    border: 0;  \
    font-size: 1rem;  \
    font-weight: bold;  \
    color: #060;  \
    background: #e9e9e9;  \
  } \
\
  .path-mod-book .block_book_toc .book_toc_numbered {  \
    font-size: 1em; \
  } \
\
  .path-mod-book .book_content .book_chapter_title { \
    margin-top: 0;  \
    font-size: 2rem; \
    font-weight: bolder !important;  \
    font-variant: initial; \
    text-transform: uppercase;  \
  } \
');