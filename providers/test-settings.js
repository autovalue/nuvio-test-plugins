function getStreams() {
  // Resolve nothing.
  return [];
}

function onSettings() {
  return [
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
    ], defaultValue: 'default-value' },
    { key: 'test-toggle', type: 'toggle', label: 'Toggle', description: 'Toggle description', defaultValue: true },
  ];
}

module.exports = {
  getStreams,
  onSettings,
};
