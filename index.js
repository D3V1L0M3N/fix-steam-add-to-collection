// ==UserScript==
// @name        Fix Steam's "Add to Collection" List - Size and Position
// @namespace   https://itsdevil.com
// @homepageURL https://github.com/D3V1L0M3N/fix-steam-add-to-collection
// @match       https://steamcommunity.com/sharedfiles/filedetails/*
// @grant       none
// @version     1.0
// @author      D3V1L0M3N
// @description Fix the "Add to Collection" model positioning on the steam workshop, so that we can click "Ok" no matter how big the collection list.
// ==/UserScript==

// create style element
var styleNode = document.createElement('style');

// custom styles to fix Steams UI positioning
var styleText = document.createTextNode('.newmodal { top: 50px !important; max-height: 90%; overflow: scroll; } ');

styleNode.appendChild(styleText);

// add our custom styles to the DOM
document.getElementsByTagName('head')[0].appendChild(styleNode);