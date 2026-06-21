document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const select = document.getElementById('profileSelect');
  
  // Load profiles
  chrome.storage.local.get(['profiles'], (data) => {
    const profiles = data.profiles || {};
    Object.keys(profiles).forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    });
  });
  
  document.getElementById('fillBtn').addEventListener('click', async () => {
    const profile = select.value;
    if (!profile) { status.textContent = 'Select a profile first'; return; }
    
    const profiles = await chrome.storage.local.get(['profiles']);
    const data = profiles.profiles[profile];
    
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {action: 'fillForm', data}, (resp) => {
      status.textContent = resp?.filled ? `Filled ${resp.filled} fields` : 'No form detected';
    });
  });
  
  document.getElementById('saveBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {action: 'scanForm'}, (resp) => {
      if (resp?.fields) {
        const profiles = await chrome.storage.local.get(['profiles']);
        const p = profiles.profiles || {};
        p['Profile ' + Object.keys(p).length + 1] = resp.fields;
        chrome.storage.local.set({profiles: p});
        status.textContent = `Saved ${Object.keys(resp.fields).length} fields`;
      }
    });
  });
  
  document.getElementById('optionsBtn').addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });
});
