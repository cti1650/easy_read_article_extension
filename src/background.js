chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (!changeInfo.status) return;
  let url = tab.url;
  if (!~url.indexOf('dev.com')) return;
  chrome.scripting.excuteScript({
    target: {
      'tabId': tabId,
      'files': ['script.js']
    }
  })
});
