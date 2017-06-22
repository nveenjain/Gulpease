chrome.contextMenus.create({
  id: "gulpease",
  title: 'Gulpease',
  enabled: true,
  contexts: ["editable"]
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'gulpeaseUpdateMessage') {
	chrome.contextMenus.update('gulpease', {
	  'title': 'Gulpease: ' + request.index,
	  "contexts": ["all"]
	});
  } else {
	sendResponse({});
  }
});
