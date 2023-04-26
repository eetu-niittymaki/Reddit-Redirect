// ==UserScript==
// @name         Reddit Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       Eetu Niittymäki
// @match        *://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?domain=tutsplus.com
// @grant        none
// ==/UserScript==

(function() {
    const entries = performance.getEntriesByType("navigation")
    const exclude = ["poll", "gallery"]

    entries.forEach((entry) => {
        if (entry.type !== "back_forward" // So you won't be redirected back when using browsers backbutton
           && (!(exclude.some(i => window.location.href.includes(i))))) {
             window.location.href = window.location.href.replace("www", "old")
        }
    })
})();
