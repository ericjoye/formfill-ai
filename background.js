chrome.runtime.onInstalled.addListener(() => {
  console.log('FormFill AI installed');
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'callAI') {
    chrome.storage.local.get(['apiKey', 'provider', 'model'], async (data) => {
      if (!data.apiKey) {
        sendResponse({error: 'No API key set. Open Options to configure.'});
        return;
      }
      // AI call logic would go here
      sendResponse({status: 'AI call initiated'});
    });
    return true;
  }
});
