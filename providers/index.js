const { languages } = require('vscode');

function register(provider) {
  return languages.registerCompletionItemProvider('javascript', provider, '.');
}

module.exports = [
  register(require('./Users')),
  register(require('./wixUsers')),
  register(require('./wixUsersBackend')),
  register(require('./wixWindow')),
  register(require('./wixStorage')),
];
