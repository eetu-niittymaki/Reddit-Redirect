// ==UserScript==
// @name         Reddit Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script that automatically redirects you from the new reddit site to the old one.
// @author       Eetu Niittymäki
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(async () => {
    const entries = performance.getEntriesByType("navigation")
    const exclude = ["poll", "gallery", "redd.it"]

    entries.forEach(entry => {
        if (entry.type !== "back_forward" // So you won't be redirected back when using browsers backbutton
            && (!(exclude.some(i => window.location.href.includes(i))))) { // Filters out site parts that old API doesn't support
                window.location.href = window.location.href.replace("www", "old")
            }
        })
})();
