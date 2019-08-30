const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'currentUser',
    kind: kind.Property,
  },
  {
    name: 'emailUser',
    kind: kind.Method,
  },
  {
    name: 'login',
    kind: kind.Method,
  },
  {
    name: 'register',
    kind: kind.Method,
  },
  {
    name: 'generateSessionToken',
    kind: kind.Method,
  },
  {
    name: 'approveByEmail',
    kind: kind.Method,
  },
  {
    name: 'approveByToken',
    kind: kind.Method,
  },
  {
    name: 'blockByEmail',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixUsersBackend.')) {
      return list;
    }
  },
};
