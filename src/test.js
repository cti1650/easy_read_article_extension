document.querySelector("button").addEventListener("click", () => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.scripting.executeScript({
        target: {
          tabId: tabs[0].id,
        },
        files: ["script.js"],
      },() => {
        alert('convert done');
      });
    }
  );
});