// ==UserScript==
// @name       Hide ads in GMX webmail client
// @namespace  http://github.com/ragol/
// @version    0.5
// @description  This script should hide annoying ads in GMX webmail client
// @match      https://3c.gmx.net/mail/client/*
// @copyright  2014+, Renat Golubchyk
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    var ads = $('tr .ad-hint').closest('tr');
    ads.hide();
});
