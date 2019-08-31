const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'currentUser', kind: K.Property },
  { name: 'emailUser', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'logout', kind: K.Method },
  { name: 'onLogin', kind: K.Method },
  { name: 'promptLogin', kind: K.Method },
  { name: 'register', kind: K.Method },
  { name: 'promptForgotPassword', kind: K.Method },
  { name: 'applySessionToken', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixUsers.')) {
      return list;
    }
  },
};
