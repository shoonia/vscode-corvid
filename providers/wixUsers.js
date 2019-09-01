const vs = require('vscode');
const { createCompletionList, isBackend } = require('./util');

const K = vs.CompletionItemKind;

const listFronend = createCompletionList([
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

const listBackend = createCompletionList([
  { name: 'currentUser', kind: K.Property },
  { name: 'approveByEmail', kind: K.Method },
  { name: 'approveByToken', kind: K.Method },
  { name: 'blockByEmail', kind: K.Method },
  { name: 'emailUser', kind: K.Method },
  { name: 'generateSessionToken', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'register', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/wixUsers(Backend)?\.$/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
