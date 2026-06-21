chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'fillForm') {
    const fields = msg.data;
    let filled = 0;
    
    document.querySelectorAll('input, textarea, select').forEach(el => {
      const name = (el.name || el.id || el.getAttribute('placeholder') || '').toLowerCase();
      for (const [key, value] of Object.entries(fields)) {
        if (name.includes(key.toLowerCase())) {
          el.value = value;
          el.dispatchEvent(new Event('input', {bubbles: true}));
          filled++;
          break;
        }
      }
    });
    
    sendResponse({filled});
  }
  
  if (msg.action === 'scanForm') {
    const fields = {};
    document.querySelectorAll('input, textarea, select').forEach(el => {
      const label = (el.name || el.id || el.getAttribute('placeholder') || '').trim();
      if (label && el.value) {
        fields[label] = el.value;
      }
    });
    sendResponse({fields});
  }
  
  return true;
});
