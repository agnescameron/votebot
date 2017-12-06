// this is the background code...

// listen for our browerAction to be clicked
chrome.webNavigation.onCommitted.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'jquery.min.js'
	});
});



// listen for our browerAction to be clicked
chrome.webNavigation.onCompleted.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});

