const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'browserLocale',
    kind: kind.Property,
  },
  {
    name: 'formFactor',
    kind: kind.Property,
  },
  {
    name: 'referrer',
    kind: kind.Property,
  },
  {
    name: 'viewMode',
    kind: kind.Property,
  },
  {
    name: 'getBoundingRect',
    kind: kind.Method,
  },
  {
    name: 'getCurrentGeolocation',
    kind: kind.Method,
  },
  {
    name: 'getRouterData',
    kind: kind.Method,
  },
  {
    name: 'openLightbox',
    kind: kind.Method,
  },
  {
    name: 'openModal',
    kind: kind.Method,
  },
  {
    name: 'postMessage',
    kind: kind.Method,
  },
  {
    name: 'scrollBy',
    kind: kind.Method,
  },
  {
    name: 'scrollTo',
    kind: kind.Method,
  },
  {
    name: 'trackEvent',
    kind: kind.Method,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixWindow.')) {
      return list;
    }
  },
};
