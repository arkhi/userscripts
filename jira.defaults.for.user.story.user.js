// ==UserScript==
// @name          Add default content to user stories on Jira
// @namespace     http://arkhi.org/
// @downloadURL   https://github.com/arkhi/userscripts/raw/master/jira.default.user.js
// @description   When creating a user story, fill in the form fields with default values to speed up workflow. This script is created in the context of Juwai‘s workflow.
// @match         http://jira.juwai.com/secure/CreateIssue.jspa
// @version       0.1
// ==/UserScript==

var cfg = {
    userStoryID: 7 // This is project dependant.
};

var summary          = document.getElementById('summary'),
    fieldDescription = document.getElementById('description'),
    isUserStory      = cfg.userStoryID === Number(document.querySelector('input[name=issuetype]').value);

if (isUserStory) {
    summary.value = 'As [type of user], I want to [do something].';

    fieldDescription.innerHTML = 'h2. Goal \n' +
    '\n' +
    'The user story should have a reason to exist: what does it bring to which user(s)? \n' +
    '\n' +
    '\n' +
    'h2. Acceptance Criteria \n' +
    '\n' +
    '* If I do A. \n' +
    '* B should happen. \n' +
    '* Also, here are a few points that need to be addressed: \n' +
    '** Constraint 1; \n' +
    '** Constraint 2; \n' +
    '** Constraint 3. \n' +
    '\n' +
    '\n' +
    'h2. Resources:\n' +
    '\n' +
    '* Mockups: \[Here goes a URL to the mockups\];\n' +
    '* Testing URL: [Here goes a URL to the testing branch or IP];\n' +
    '* Staging URL: [Here goes a URL to the feature on stagin];\n' +
    '\n' +
    '\n' +
    'h2. Notes \n' +
    '\n' +
    '[Some complementary notes if necessary:]\n' +
    '\n' +
    '* {quote}Here goes a quote from an email{/quote}\n' +
    '* Here goes whatever useful information can exist…';
}
