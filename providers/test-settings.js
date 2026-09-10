console.log('[test-settings] hello world');
const settings = globalThis.SCRAPER_SETTINGS || {};
console.log('[test-settings] current settings:', settings);

function getStreams() {
  const results = [];
  if (typeof localStorage !== 'undefined') {
    // Add a scraper showing when the last scrape was ran.
    let previousScrape = localStorage.getItem('previousScrape');
    console.log('previous scrape', previousScrape);
    results.push({
      name: '[test] localStorage (external URL)',
      title: `Previous scrape: ${previousScrape ? previousScrape : 'none'}`,
      externalUrl: 'https://github.com/autovalue/nuvio-test-plugins',
    });
    if (getSettings('update-last-scrape', true)) {
      localStorage.setItem('previousScrape', (new Date()).toISOString());
    }
  } else {
    results.push({
      name: '[test] localStorage (external URL)',
      title: `localStorage is not currently available.`,
      externalUrl: 'https://github.com/NuvioMedia/NuvioTV',
    })
  }
  return results;
}

function getSettings(key, defaultValue) {
  const settings = globalThis.SCRAPER_SETTINGS || {};
  if (!key) {
    return defaultValue;
  }
  if (settings.hasOwnProperty(key)) {
    return settings[key];
  }

  return defaultValue;
}

function onSettings() {
  return [
    { key: 'update-last-scrape', type: 'toggle', label: 'Update last scrape', description: 'Uses the localStorage to store the last scrape time.', defaultValue: true },
    { key: 'test-header', type: 'header', label: 'Header label' },
    { key: 'test-info', type: 'info', label: 'Information entry' },
    { key: 'test-text', type: 'text', label: 'Text label', description: 'Text description', defaultValue: 'Default value', placeholder: 'Placeholder', isPassword: false },
    { key: 'test-text-password', type: 'text', label: 'Password label', description: 'Password description', defaultValue: 'Default value', placeholder: 'Placeholder', isPassword: true },
    { key: 'test-select', type: 'select', label: 'Select', description: 'Select description', options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
    ], defaultValue: 'option-2' },
    { key: 'test-toggle', type: 'toggle', label: 'Toggle', description: 'Toggle description', defaultValue: true },
  ];
}

module.exports = {
  getStreams,
  onSettings,
};
