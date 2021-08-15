// ==UserScript==
// @name        robloxSemiAutoFreeBuyer
// @namespace   Violentmonkey Scripts
// @include     http*://www.roblox.com/catalog/*
// @include     http*://www.roblox.com/bundles/*
// @grant       none
// @version     1.1
// @author      PaxiTheAlchemist
// @description A user script that will lessen the work in grabbing free items from Roblox's Catalog. This user script will automatically click the "Get" button on catalog item pages that are free. Simply click on a free item in the catalog page and the script will grab it for you automatically. (Disclaimer: this script does not buy items that cost robux or buying priced items for free)
// ==/UserScript==

// Variables (Feel free to change anything to your need)
var boolAutoClose = false                                                                        // (DEFAULT: false) Automatically closes the tab if the current item is already purchased

//Main Script
window.addEventListener('load', function() {                                                    // Waiting for page to load before running main part of the script
    console.log('[UserScript][LOG]Running Script...');
    var btnBuy = document.querySelector('.PurchaseButton');                                     // Attempts to find the buy button
    if (btnBuy == null && boolAutoClose) {                                                      // Check if the buy button was found. If not, close the tab if auto close was enabled
        window.close()
    }
    if (btnBuy.innerHTML.search('Get') != -1) {                                                 // Check if the word "Get" is inside the button. If so, click the button. If not do nothing (visibly, anyways)
        console.log('[UserScript][LOG]Button Found!');
        btnBuy.click();
        document.getElementById('confirm-btn').click();                                         // Finds and clicks the confirm button
    } else {
        console.error('[UserScript][ERR]Button not Found! ('+btnBuy.innerHTML+' != "Get")');    // Logs the reason why the button wasn't found (Debug)
    }
    console.log('[UserScript][LOG]Done!');
}, false);