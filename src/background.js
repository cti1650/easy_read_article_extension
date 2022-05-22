chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (!changeInfo.status) return;
  let url = tab.url;
  console.log(url)
  if (!url.startsWith('https://dev.to')) return;
  chrome.scripting.executeScript({
    target: {
      'tabId': tabId,
    },
    'files': ['script.js']
  })
});
