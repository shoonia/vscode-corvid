const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'get',
    kind: kind.Method,
  },
  {
    name: 'query',
    kind: kind.Method,
  },
  {
    name: 'insert',
    kind: kind.Method,
  },
  {
    name: 'update',
    kind: kind.Method,
  },
  {
    name: 'remove',
    kind: kind.Method,
  },
  {
    name: 'save',
    kind: kind.Method,
  },
  {
    name: 'sort',
    kind: kind.Method,
  },
  {
    name: 'filter',
    kind: kind.Method,
  },
  {
    name: 'aggregate',
    kind: kind.Method,
  },
  {
    name: 'bulkInsert',
    kind: kind.Method,
  },
  {
    name: 'bulkSave',
    kind: kind.Method,
  },
  {
    name: 'bulkUpdate',
    kind: kind.Method,
  },
  {
    name: 'insertReference',
    kind: kind.Method,
  },
  {
    name: 'isReferenced',
    kind: kind.Method,
  },
  {
    name: 'queryReferenced',
    kind: kind.Method,
  },
  {
    name: 'removeReference',
    kind: kind.Method,
  },
  {
    name: 'replaceReferences',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixData.')) {
      return list;
    }
  },
};
