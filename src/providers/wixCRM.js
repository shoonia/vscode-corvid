import { createCompletionList, isBackend, K } from './util';

const listFronend = createCompletionList([
  { name: 'createContact', kind: K.Method },
  { name: 'emailContact', kind: K.Method },
]);

const listBackend = createCompletionList([
  { name: 'createContact', kind: K.Method },
  { name: 'emailContact', kind: K.Method },
  { name: 'getContactById', kind: K.Method },
  { name: 'updateContact', kind: K.Method },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixCRM.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
