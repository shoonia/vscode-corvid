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
    kind: kind.Property,
  },
  {
    name: 'getPricingPlans',
    kind: kind.Property,
  },
  {
    name: 'getRoles',
    kind: kind.Property,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (!prefix.endsWith('wixUsers.currentUser.')) {
      return undefined;
    }

    return list;
  },
};
