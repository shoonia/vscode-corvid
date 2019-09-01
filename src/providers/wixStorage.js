import { createCompletionList, K } from './util';

const list = createCompletionList([
  { name: 'getItem', kind: K.Method },
  { name: 'setItem', kind: K.Method },
  { name: 'removeItem', kind: K.Method },
  { name: 'clear', kind: K.Method },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(local|session|memory)\.$/.test(prefix)) {
      return list;
    }
  },
};
