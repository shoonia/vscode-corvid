const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'getItem',
    kind: kind.Method,
  },
  {
    name: 'setItem',
    kind: kind.Method,
  },
  {
    name: 'removeItem',
    kind: kind.Method,
  },
  {
    name: 'clear',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(local|session|memory)\.$/.test(prefix)) {
      return list;
    }
  },
};
