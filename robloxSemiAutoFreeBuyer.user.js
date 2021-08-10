// ==UserScript==
// @name        robloxSemiAutoFreeBuyer
// @namespace   Violentmonkey Scripts
// @include     http*://www.roblox.com/catalog*
// @include     http*://www.roblox.com/bundles*
// @grant       none
// @version     1.0
// @author      PaxiTheAlchemist
// @description A script that will lessen the work in grabbing free items from Roblox's Catalog. This script will automatically click the "Get" button on catalog item pages that are free. Simply click on a free item in the catalog page and the script will grab it for you automatically. (Disclaimer: this script does not buy items that cost robux or buying priced items for free)
// ==/UserScript==

window.addEventListener('load', function() { 
    console.log('[UserScript][LOG]Running Script...');
    var btnBuy = document.querySelector('.PurchaseButton');
    if (btnBuy.innerHTML.search('Get') != -1) {
        console.log('[UserScript][LOG]Button Found!');
        btnBuy.click();
        document.getElementById('confirm-btn').click();
    } else {
        console.error('[UserScript][ERR]Button not Found! ('+btnBuy.innerHTML+' != "Get")');
    }
    console.log('[UserScript][LOG]Done!');
}, false);