const { languages } = require('vscode');

function register(provider) {
  return languages.registerCompletionItemProvider('javascript', provider, '.');
}

module.exports = [
  register(require('./modules')),
  register(require('./Users')),
  register(require('./wixUsers')),
  register(require('./wixUsersBackend')),
  register(require('./wixWindow')),
  register(require('./wixStorage')),
  register(require('./wixData')),
  register(require('./wixLocation')),
  register(require('./wixSite')),
  register(require('./wixStores')),
  register(require('./wixBookings')),
];
