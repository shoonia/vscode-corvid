const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'id',
    kind: kind.Property,
  },
  {
    name: 'loggedIn',
    kind: kind.Property,
  },
  {
    name: 'role',
    kind: kind.Property,
  },
  {
    name: 'getEmail',
    kind: kind.Method,
  },
  {
    name: 'getPricingPlans',
    kind: kind.Method,
  },
  {
    name: 'getRoles',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(wixUsers|wixUsersBackend)\.currentUser\.$/.test(prefix)) {
      return list;
    }
  },
};
