const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'get', kind: K.Method },
  { name: 'query', kind: K.Method },
  { name: 'insert', kind: K.Method },
  { name: 'update', kind: K.Method },
  { name: 'remove', kind: K.Method },
  { name: 'save', kind: K.Method },
  { name: 'sort', kind: K.Method },
  { name: 'filter', kind: K.Method },
  { name: 'aggregate', kind: K.Method },
  { name: 'bulkInsert', kind: K.Method },
  { name: 'bulkSave', kind: K.Method },
  { name: 'bulkUpdate', kind: K.Method },
  { name: 'insertReference', kind: K.Method },
  { name: 'isReferenced', kind: K.Method },
  { name: 'queryReferenced', kind: K.Method },
  { name: 'removeReference', kind: K.Method },
  { name: 'replaceReferences', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixData.')) {
      return list;
    }
  },
};
