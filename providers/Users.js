const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'id', kind: K.Property },
  { name: 'loggedIn', kind: K.Property },
  { name: 'role', kind: K.Property },
  { name: 'getEmail', kind: K.Method },
  { name: 'getPricingPlans', kind: K.Method },
  { name: 'getRoles', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(wixUsers|wixUsersBackend\.)?currentUser\.$/.test(prefix)) {
      return list;
    }
  },
};
