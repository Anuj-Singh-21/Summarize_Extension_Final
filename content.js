


// contentScript.js



// Get the current tab's URL
var currentUrl = window.location.href;

// Display the URL in the console
console.log("Current tab's URL:", currentUrl);

chrome.runtime.sendMessage({ type: "URL_FROM_CONTENT", url: currentUrl });




// Call sendContentToPopup when a button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const summaryBtn = document.getElementById("summaryBtn");
  const majorPointsBtn = document.getElementById("majorPointsBtn");

  summaryBtn.addEventListener("click", sendContentToPopup);
  majorPointsBtn.addEventListener("click", sendContentToPopup);
});




// Since we are not implementing the actual logic to extract content, we will send sample text
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendSummary") {
    sendResponse({ summary: "Sample summary from the web page" });
  } else if (message.action === "sendMajorPoints") {
    sendResponse({ majorPoints: "Sample major points from the web page" });
  }
});
