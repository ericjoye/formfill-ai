document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['provider', 'model', 'apiKey'], (data) => {
    if (data.provider) document.getElementById('provider').value = data.provider;
    if (data.model) document.getElementById('model').value = data.model;
    if (data.apiKey) document.getElementById('apiKey').value = data.apiKey;
  });
  
  document.getElementById('save').addEventListener('click', () => {
    chrome.storage.local.set({
      provider: document.getElementById('provider').value,
      model: document.getElementById('model').value,
      apiKey: document.getElementById('apiKey').value
    }, () => alert('Settings saved'));
  });
});
