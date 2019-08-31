const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'getItem', kind: K.Method },
  { name: 'setItem', kind: K.Method },
  { name: 'removeItem', kind: K.Method },
  { name: 'clear', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(local|session|memory)\.$/.test(prefix)) {
      return list;
    }
  },
};
