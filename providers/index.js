const { languages } = require('vscode');

function register(provider) {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    '.',
  );
}

module.exports = [
  register(require('./modules')),
  register(require('./Users')),
  register(require('./wixCRM')),
  register(require('./wixUsers')),
  register(require('./wixMarketing')),
  register(require('./wixWindow')),
  register(require('./wixStorage')),
  register(require('./wixData')),
  register(require('./wixLocation')),
  register(require('./wixSite')),
  register(require('./wixStores')),
  register(require('./wixBookings')),
];
