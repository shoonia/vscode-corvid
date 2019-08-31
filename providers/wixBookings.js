const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'checkoutBooking', kind: K.Method },
  { name: 'getServiceAvailability', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixBookings.')) {
      return list;
    }
  },
};
