// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "URL_FROM_CONTENT") {
    chrome.action.setPopup({ tabId: sender.tab.id, popup: "popup.html" });
    chrome.storage.local.set({ popupUrl: message.url });
  }
});
