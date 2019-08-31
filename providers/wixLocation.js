const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'baseUrl', kind: K.Property },
  { name: 'path', kind: K.Property },
  { name: 'prefix', kind: K.Property },
  { name: 'protocol', kind: K.Property },
  { name: 'query', kind: K.Property },
  { name: 'url', kind: K.Property },
  { name: 'onChange', kind: K.Method },
  { name: 'to;', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixLocation.')) {
      return list;
    }
  },
};
