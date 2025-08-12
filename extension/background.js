chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyAmazonShortcode",
    title: "Copy Hugo Shortcode",
    contexts: ["page"],
    documentUrlPatterns: ["https://www.amazon.co.jp/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyAmazonShortcode") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
