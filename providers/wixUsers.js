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
    name: 'logout',
    kind: kind.Method,
  },
  {
    name: 'onLogin',
    kind: kind.Method,
  },
  {
    name: 'promptLogin',
    kind: kind.Method,
  },
  {
    name: 'register',
    kind: kind.Method,
  },
  {
    name: 'promptForgotPassword',
    kind: kind.Method,
  },
  {
    name: 'applySessionToken',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (!prefix.endsWith('wixUsers.')) {
      return undefined;
    }

    return list;
  },
};
