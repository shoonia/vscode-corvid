import { createCompletionList, isBackend, K } from './util';

const listFronend = createCompletionList([
  { name: 'startPayment', kind: K.Method },
]);

const listBackend = createCompletionList([
  { name: 'createPayment', kind: K.Method },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixPay.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};

