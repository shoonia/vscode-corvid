const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'currentUser', kind: K.Property },
  { name: 'emailUser', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'register', kind: K.Method },
  { name: 'generateSessionToken', kind: K.Method },
  { name: 'approveByEmail', kind: K.Method },
  { name: 'approveByToken', kind: K.Method },
  { name: 'blockByEmail', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixUsersBackend.')) {
      return list;
    }
  },
};
