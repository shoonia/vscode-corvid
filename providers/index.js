const { languages } = require('vscode');

function register(provider) {
  return languages.registerCompletionItemProvider('javascript', provider, '.');
}

module.exports = [
  register(require('./wixUsers')),
  register(require('./Users')),
];
