import { createCompletionList, K } from './util';

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

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixLocation.')) {
      return list;
    }
  },
};
